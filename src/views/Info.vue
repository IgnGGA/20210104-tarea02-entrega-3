<template>
  <div id="info">
    <div id="container">
      <div id="pageheader">
        <h1>NYSL Game Information</h1>
      </div>
        <TableSep></TableSep>
        <TableOct></TableOct>
      <div id="bodycontent">
        <h2><em>Fall Schedule</em></h2>
        <p class="announcement">*All games take place on Saturday</p>

        <p><br /><strong>Facility Type:</strong> Outdoor</p>
        <p>
          <strong>Additional Information:</strong> If deemed necessary by NYSL,
          games may be shortened or cancelled due to extreme weather conditions.
        </p>
        <p>
          <strong>Please direct all questions to:</strong> Michael Randall,
          League Coordinator
        </p>
        <address>
          <p>
            <span style="float: left"
              ><strong>Phone:</strong> (630) 690-8132</span
            >
          </p>
          <p style="text-align: right">
            <strong>Email:</strong>
            <a href="mailto:michael.randall@chisoccer.org"
              >michael.randall@chisoccer.org</a
            >
          </p>
        </address>
      </div>
    </div>
  </div>
</template>

<script>
import TableSep from '../components/TablaSep.vue'
import TableOct from '../components/TablaOct.vue'
export default {
  name: 'Info',
  components:{
    TableSep,
    TableOct,
  }
}
</script>     