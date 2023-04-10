<template>
  <div class="table">
    <TableComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AnimalLine from "./AnimalLine.vue";
import TableComponent from "./TableComponent.vue";

@Component({
  components: {
    AnimalLine, 
    TableComponent 
  },
})
export default class Table extends Vue {}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.table {
  border: solid 1px #1a1a1a;
  border-radius: 20px;
  padding: 2em;
 }
</style>
