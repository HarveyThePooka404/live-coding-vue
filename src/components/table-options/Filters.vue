<template>
      <fieldset class="fieldset">
        <legend>Filter</legend>
        <Button v-for="option in filterOptions" :key="option" :title="option" @click="filter(option)" :isActive="current === option ? true: false"/>
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
export default class Filters extends Vue {
    @Prop({default: []}) filterOptions!: string[]
    @Prop() current!: string

    filter(e: any) {
        this.$emit("filter", e)
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