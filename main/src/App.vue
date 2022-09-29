<template>
  <div id="app">
    <nav>
      <router-link to="/about">主应用about</router-link> |
      <router-link to="/vue-hash/">子应用vue-hash</router-link> |
      <router-link to="/vue-history">子应用vue-history</router-link>
    </nav>
    <router-view/>
    <div id="subContainer" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
