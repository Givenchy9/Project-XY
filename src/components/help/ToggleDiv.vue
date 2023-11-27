<template>
    <div>
        <div :style="{ display: isDiv1Visible ? 'inline-block' : 'none' }" id="div1">hallo</div>
        <div :style="{ display: !isDiv1Visible ? 'inline-block' : 'none' }" id="div2">hallo</div>
        <input type="checkbox" @click="toggleDivs">
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const isDiv1Visible = ref(true);

const toggleDivs = () => {
    isDiv1Visible.value = !isDiv1Visible.value;
};
</script>
  
<style>
#div1 {
    color: blue;
    height: 200px;
    width: 200px;
    border: solid red 2px;
    position: absolute;
    background-color: red;
}

#div2 {
    color: red;
    background-color: blue;
    height: 200px;
    width: 200px;
    border: solid blue 2px;
    position: absolute;
    display: none;
}

input {
    margin-top: 220px;
}
</style>
  