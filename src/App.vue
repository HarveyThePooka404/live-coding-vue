<template>
  <div id="app">
    <Table />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Table from "./components/Table.vue";

@Component({
  components: {
    Table
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 20vw;
}
</style>
