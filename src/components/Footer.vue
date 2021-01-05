<template>
    <div id="footer">
        <div class="card text-center">
  <div class="card-header">
    NYLS
  </div>
  <div class="card-body">
    <h5 class="card-title">Northside Youth SoccerLeague</h5>
    <p class="card-text">El equipo de futbol, que con su comite creativo, mas cachos nos ha dado</p>
    <Boton></Boton>
  </div>
  <div class="card-footer text-muted">
    20210104
  </div>
</div>
    </div>
</template>

<script>
import Boton from '../components/Boton.vue'
export default {
  name:'Footer',
  components:{
    Boton
  }
}
</script>