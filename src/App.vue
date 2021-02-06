<template>
  <div id="app">
    <h1><span><img src="./assets/logo.png"></span>ue Calculator </h1>
    <Operation></Operation>
  </div>
</template>

<script>
import Operation from "@/components/Operation";
export default {
  name: 'app',
  components: {
    Operation,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  font-size: 3em;
}
img{
  max-width: 50px;
  max-height: 80px;
  height: 80px;
}
</style>