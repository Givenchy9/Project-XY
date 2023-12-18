<template>
    <div>
        <input type="checkbox" @click="toggleDivs">
        <div :style="{ display: isDiv1Visible ? 'inline-block' : 'none' }" id="div1">hallo</div>
        <div :style="{ display: !isDiv1Visible ? 'inline-block' : 'none' }" id="div2">hallo</div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const isDiv1Visible = ref(true);
const emits = defineEmits(['toggleDivs']);

const toggleDivs = () => {
    isDiv1Visible.value = !isDiv1Visible.value;
    emits('toggleDivs', isDiv1Visible.value);
};
</script>
