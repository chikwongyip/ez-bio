<template>
  <div id="app">
    <index-header>
    </index-header>
  </div>
</template>

<script>
import IndexHeader from './components/common/IndexHeader.vue';
export default {
  name: 'App',
  components: {
    IndexHeader
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
