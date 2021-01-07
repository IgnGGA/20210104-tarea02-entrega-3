<template>
  <header>
    <Navbar></Navbar>
  </header>
</template>

<script>
import Navbar from './components/Navbar.vue'
//import PiePag from './components/PiePag.vue'

export default {
  name:'App',
  components:{
    Navbar,
    //PiePag,
  }
  
}
</script>

<style lang="css">
  @import '../src/assets/css/main.css';
</style>