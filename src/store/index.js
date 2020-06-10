import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: "https://www.reddit.com/r/",
    subreddit: "imaginarysliceoflife",
    suffix: ".json",
    limit: "?limit=",
    limitCount: "30",
    redditData: [],
  },
  mutations: {
    fetchData(state, sub) {
      let url;
      if (sub == "" || sub.length == 0)
        url =
          state.baseUrl +
          state.subreddit +
          state.suffix +
          state.limit +
          state.limitCount;
      else
        url =
          state.baseUrl + sub + state.suffix + state.limit + state.limitCount;

      // Make an HTTP request to Reddit API
      axios
        .get(url)
        .then((res) => {
          state.redditData = res.data.data.children;
          let filteredData = state.redditData;

          for (let i = 0; i < filteredData.length; ++i)
            filteredData[i].data.preview.images[0].source.url = filteredData[
              i
            ].data.preview.images[0].source.url.replace("&amp;s", "&s");

          state.redditData = filteredData;
          filteredData = null;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  actions: {},
  modules: {},
});
