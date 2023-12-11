<template>
    <div class="m-auto">
        <input v-model="inputValue" type="text" maxlength="20" class="relative">
        <button @click="myFunction"
            class="relative bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Click
        </button>
        <p id="output" class="">{{ outputValue }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref('');
const outputValue = ref('');

const myFunction = () => {
    outputValue.value = inputValue.value;
};
</script>
