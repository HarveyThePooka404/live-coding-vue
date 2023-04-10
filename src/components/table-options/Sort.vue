<template>
      <fieldset class="fieldset">
        <legend>Sort</legend>
        <Button v-for="option in sortOptions" :key="option" :title="option" @click="sort(option)"/>
      </fieldset>
</template>
    
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from './Button.vue';
    
@Component({
    components: {
        Button, 
    }
})
export default class Sort extends Vue {
    @Prop({default: []}) sortOptions!: string[]

    sort(e: any) {
        this.$emit("sort", e)
    }
}
</script>
    

<style lang="css">

.fieldset {
    display: flex;
    margin: 2em 0;
    align-content: space-around;
}

.fieldset button {
    margin-right: 1em;
}
</style>