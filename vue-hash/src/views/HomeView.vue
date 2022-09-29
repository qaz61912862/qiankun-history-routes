<template>
  <div class="home">
    <h3>我是子应用vue-hash</h3>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Vue-hash"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
