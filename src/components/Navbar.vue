<template>
<div id=Navbar>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand to="/">NYSL</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/contact">Contact</b-nav-item>
        <b-nav-item to="/info">Info</b-nav-item>
        <b-nav-item to="/registration">Registratin</b-nav-item>
        <b-nav-item to="/rules">Rules</b-nav-item>
        <b-nav-item to="#" disabled>NorthSide Youth Soccer League</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <Transicion></Transicion>
</div>
</template>

<script>
import Transicion from '../components/Transicion'
export default {
  name:'Navbar',
  components:{
    Transicion,
  }
}
</script>