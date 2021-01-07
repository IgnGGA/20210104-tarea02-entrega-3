<template>
  <div id="PiePag">
    <b-button v-b-toggle.sidebar-footer>Momentos</b-button>
    <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" no-header shadow>
      <template #footer="{ hide }">
       <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
        <strong class="mr-auto">NorthSide Youth Socer League</strong>
        <b-button size="sm" @click="hide">Close</b-button>
       </div>
      </template>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <Carrusel></Carrusel>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import Carrusel from './Carrusel.vue'

export default {
  name:'PiePag',
  components:{
    Carrusel,
  }
}
</script>