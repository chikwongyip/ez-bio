<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <index-header>

    </index-header>
    <index-footer>

    </index-footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import IndexHeader from './components/common/IndexHeader.vue';
import IndexFooter from './components/common/IndexFooter.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    IndexHeader,
    IndexFooter
  }
}
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
