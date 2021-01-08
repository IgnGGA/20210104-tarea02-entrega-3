<template>
  <div>
    <header>
      <Navbar></Navbar>
    </header>
    <body>
      <Transicion></Transicion>
    </body>
    <footer>
      <PiePag></PiePag>
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PiePag from "./components/PiePag.vue";
import Transicion from './components/Transicion'

export default {
  name: "App",
  components: {
    Navbar,
    PiePag,
    Transicion,
  },
};
</script>

<style lang="css">
@import "../src/assets/css/main.css";
</style>