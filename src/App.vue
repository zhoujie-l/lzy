<template>
  <a-layout>
    <a-layout-header>
      <app-header></app-header>
    </a-layout-header>
    <a-layout-content>
      <app-main></app-main>
    </a-layout-content>
  </a-layout>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
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
.ant-layout-header {
  padding-top: 10px;
}
</style>
