<template>
  <div class="table">
    <li v-for="animal in animalList" :key="animal.name">
        {{animal}}
    </li>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import  store  from "../store"

@Component
export default class Table extends Vue {
  @Prop({ default: "Hello darlings"}) msg!: string;

  get animalList() {
    return this.$store.getters.getCleanData
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.table {
  border: solid 1px #1a1a1a;
  border-radius: 20px;
  padding: 2em;
 }
</style>
