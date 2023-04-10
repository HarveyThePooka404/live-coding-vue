<template>
  <div className="App">
    <Sort :sortOptions="sortOptions" @sort="sort" :current="sortOption"/>
    <Filters :filterOptions="filterOptions" @filter="filter" :current="filterValue"/>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Age</th>
          <th>Greet</th>
        </tr>
      </thead>
      <tbody>
        <animal-line
          v-for="animal in listToRender"
          :key="animal.name"
          :animal="animal"
        />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Animal } from "@/types/types";
import { Component, Vue, Watch } from "vue-property-decorator";
import AnimalLine from "./AnimalLine.vue";
import Button from "./table-options/Button.vue";
import Filters from "./table-options/Filters.vue";
import Sort from "./table-options/Sort.vue";

@Component({
  components: {
    AnimalLine,
    Button,
    Sort,
    Filters,
  },
})
export default class TableComponent extends Vue {
  //variables need to have a value for Vue to re-render them => using null instead of undefined
  sortOption?: keyof Animal | null = null;
  filterValue: string | null = null;

  get animalList(): Animal[] {
    return this.$store.getters.getCleanData;
  }

  get sortedList() {
    return this.animalList.sort(this.compareFunction);
  }

  get listToRender() {
    return this.sortedList.filter((animal) =>
      this.filterValue ? animal["type"] === this.filterValue : animal
    );
  }

  sort(type: keyof Animal) {
    this.sortOption = type;
  }

  filter(value: string) {
    if (this.filterValue !== value) {
      this.filterValue = value;
    } else {
        this.filterValue = null
    }

  }

  compareFunction(a: Animal, b: Animal) {
    //return early pattern
    if (!this.sortOption) {
      return 0;
    }

    if (a[this.sortOption] > b[this.sortOption]) {
      return 1;
    } else if (a[this.sortOption] < b[this.sortOption]) {
      return -1;
    } else {
      return 0;
    }
  }

  //If you can not write something directly, then deduce it!
  //use of Object.keys
  get sortOptions(): string[] {
    const sortOptions = Object.keys(this.animalList[0]);
    return sortOptions;
  }

  //use of map
  get filterOptions(): Array<string> {
    const allTypes = this.animalList.map((animal) => animal.type);
    return [...new Set(allTypes)];
  }
}
</script>
