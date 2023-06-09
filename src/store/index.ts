import { Animal, RawAnimal } from "@/types/types";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    animals: [
      {
          "fullname": "Mandu the amazing cat",
          "age": 10
      },
      {
          "fullname": "Mia the black cat",
          "age": 10
      },
      {
          "fullname": "Leeloo the growing dog",
          "age": 3
      },
      {
          "fullname": "Toothless the trained dragon",
          "age": 14
      },
      {
          "fullname": "ScoobyDoo the wondering dog",
          "age": 58
      },
      {
          "fullname": "Horsey the horsing horse",
          "age": 10
      }
  ] as Array<RawAnimal> 
  },
  getters: {
    getCleanData(state) {
      const nextAnimals = state.animals.map((ani) => {
        const [name, the, description, type] = ani.fullname.split(" ");
        return {
          name: name,
          description: description,
          type: type,
          age: ani.age,
        } as Animal;
      });
      return nextAnimals;
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
