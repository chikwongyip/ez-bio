<template>
  <div id="app">
    <index-header> </index-header>
    <div class="mt-4"></div>
    <router-view> </router-view>
    <index-brand> </index-brand>
    <index-footer> </index-footer>
  </div>
</template>

<script>
import IndexHeader from "./components/common/IndexHeader.vue";
import IndexFooter from "./components/common/IndexFooter.vue";
import IndexBrand from "./components/common/IndexBrand.vue";
export default {
  name: "App",
  components: {
    IndexHeader,
    IndexFooter,
    IndexBrand
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
