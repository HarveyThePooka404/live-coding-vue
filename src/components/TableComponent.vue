<template>
  <div className="App">
    <Sort :sortOptions="sortOptions" />
    <Filters :filterOptions="filterOptions" />
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Age</th>
          <th>Description</th>
          <th>Greet</th>
        </tr>
      </thead>
      <tbody>
        <animal-line
          v-for="animal in animalList"
          :key="animal"
          :animal="animal"
        />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Animal } from "@/types/types";
import { Component, Vue } from "vue-property-decorator";
import AnimalLine from "./AnimalLine.vue";
import Button from "./table-options/Button.vue";
import Filters from "./table-options/Filters.vue";
import Sort from "./table-options/Sort.vue";

@Component({
  components: {
    AnimalLine,
    Button,
    Sort,
    Filters
  },
})
export default class TableComponent extends Vue {
  get animalList(): Array<Animal> {
    return this.$store.getters.getCleanData;
  }

  //If you can not write something directly, then deduce it!
  //use of Object.keys
  get sortOptions(): string[] {
    const sortOptions = Object.keys(this.animalList[0]);
    return sortOptions;
  }

  //use of map
  get filterOptions(): Array<string> {
    return this.animalList.map((animal) => animal.type);
  }
}
</script>
