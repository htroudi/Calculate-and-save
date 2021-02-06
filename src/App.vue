<template>
  <div id="app" class="container">
    <h1><span><img src="./assets/logo.png" alt="Vue logo"></span>ue 2 Calculator </h1>
    <Operation></Operation>
    <History></History>
  </div>
</template>

<script>
import Operation from "@/components/Operation";
import History from "@/components/History";
export default {
  name: 'app',
  components: {
    History,
    Operation,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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