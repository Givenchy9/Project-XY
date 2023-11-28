<template>
    <div>
        <div id="div1" class="h-20 w-20 bg-blue-500 absolute text-red-500">hallo</div>
        <div id="div2" class="h-20 w-20 bg-red-500 absolute hidden text-blue-500">hallo</div>

        <input id="div3" type="checkbox" class="mt-96" v-model="isChecked" />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const isChecked = ref(false);

watch(isChecked, () => {
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");

    if (isChecked.value) {
        div2.style.display = "none";
        div1.style.display = "block";
    } else {
        div2.style.display = "block";
        div1.style.display = "none";
    }
});
</script>

<style>
#div3 {
    margin-top: 120px;
}
</style>
