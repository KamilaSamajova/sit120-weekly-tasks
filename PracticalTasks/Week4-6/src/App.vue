<template>
  <div id="app">
    <HelloWorld/>
    <Registration/>
    <Checkbox/>
    <Options/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Registration from './components/Registration.vue'
import Checkbox from './components/Checkbox.vue'
import Options from './components/Options.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Registration,
    Checkbox,
    Options
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
