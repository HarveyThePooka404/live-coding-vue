<template>
        <button @click="onClick">{{title}}</button>
</template>
    
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
    
@Component({})
export default class Button extends Vue {
    @Prop({default: 'Default Title'}) title!: string

onClick() {
    this.$emit("click")
}
}
</script>
    
<style scoped>
button {
    cursor: pointer;
}
</style>