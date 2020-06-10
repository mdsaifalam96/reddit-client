<template>
  <div class="header-container mb-8">
    <h1 class="mb-8 text-white text-4xl">A clean, minimal Reddit client. 🚄</h1>
    <input
      class="shadow appearance-none border-none rounded-full bg-blue-100 w-full p-4 text-black text-xl leading-tight focus:outline-none focus:shadow-outline mb-8"
      id="subreddit"
      type="text"
      placeholder="Enter a subreddit name here"
      v-model="subname"
      v-on:keyup.enter="fetchData"
    />
    <button
      class="bg-green-600 text-2xl hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
      type="button"
      v-on:click="fetchData"
    >
      Search
    </button>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      subname: "",
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("fetchData", this.subname);
    },
  },
};
</script>
