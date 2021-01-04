<template>
  <header>
    <Navbar></Navbar>
  </header>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name:'App',
  components:{
    Navbar,
    Footer
  }
}
</script>

<style>
  @import '../src/assets/css/main.css';
</style>
<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>