<template>
<tr>
      <td> {{animal.name}}</td>
      <td> {{animal.description}}</td>
      <td> {{animal.type}}</td>
      <td> {{animal.age}}</td>

      <td>
        <button onClick={local}>Greet</button>
      </td>
    </tr>
</template>
    
<script lang='ts'>
import { Animal } from '@/types/types';
import { Component, Prop, Vue } from 'vue-property-decorator';
    
@Component({})
export default class AnimalLine extends Vue {
     @Prop() animal!: Animal
}
</script>

<style scoped>
.animal-entry {
     display: flex;
}
</style>
