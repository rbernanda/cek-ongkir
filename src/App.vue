<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Poppins', sans-serif;
}
</style>
