<template>
  <div id="app">
    <h1>Todos with Commands</h1>
    <todos />
  </div>
</template>

<script>
  import Todos from '@/components/Todos'

  export default {
    name: 'app',
    components: {
      Todos
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
