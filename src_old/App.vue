<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <long-list id="longList"></long-list>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import LongList from "./components/LongList";

export default {
  name: "App",
  components: {
    // HelloWorld,
    LongList,
  },
};
</script>

<style>
html,
body {
  margin: 0px;
  padding: 0px;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100%;
}
</style>
