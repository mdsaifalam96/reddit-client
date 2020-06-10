<template>
  <div id="app" class="bg-gray-800 w-full h-screen container mx-auto p-16">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      subreddit: "",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@700&display=swap");

* {
  background-color: #2d3748;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#app input {
  font-family: "Jost", sans-serif;
  font-weight: 400;
}

#app button {
  font-family: "Jost", sans-serif;
  font-weight: 700;
}

#app h1 {
  font-family: "Jost", sans-serif;
  font-weight: 700;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
