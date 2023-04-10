<template>
        <button :class="{active: isActive}" @click="onClick">{{title}}</button>
</template>
    
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
    
@Component({})
export default class Button extends Vue {
    @Prop({default: 'Default Title'}) title!: string
    @Prop({default: false}) isActive!: boolean

onClick() {
    this.$emit("click")
}
}
</script>
    
<style scoped>
button {
    cursor: pointer;
}

.active{
    color: hotpink;
    border-color: hotpink;
}
</style>