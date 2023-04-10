<template>
        <button @click="onClick">{{title}}</button>
</template>
    
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
    
@Component({})
export default class Button extends Vue {
    @Prop({default: 'Default Title'}) title!: string

onClick() {
    console.log("you've clicked that")
}
}
</script>
    
<style scoped>
button {
    cursor: pointer;
}
</style>