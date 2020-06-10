<template>
  <div class="home">
    <div
      class="max-w-xl rounded overflow-hidden shadow-lg my-4 text-gray-200 bg-teal-500 card-wrapper"
      v-for="data in redditData"
      v-bind:key="data.data.id"
    >
      <a
        :href="getLink(data)"
        target="_blank"
        rel="noreferref noopener"
        class="p-4"
      >
        <img v-bind:src="getImageUrl(data)" alt="" class="max-w-sm mx-auto" />
        <div class="p-4 bg-teal-500">
          <div class="text-xl bg-teal-500 jost-400 text-black">
            {{ data.data.title }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    ...mapState(["redditData"]),
  },
  methods: {
    displayRedditData() {
      console.log(this.redditData);
    },
    getImageUrl(obj) {
      return obj.data.preview.images[0].source.url;
    },
    getLink(obj) {
      const baseUrl = "https://www.reddit.com";
      return baseUrl + obj.data.permalink;
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}

.home img {
  object-fit: cover;
}

.card-wrapper {
  display: flex;
  flex-direction: column;
}

.jost-400 {
  font-family: "Jost", sans-serif;
  font-weight: 400;
}
</style>
