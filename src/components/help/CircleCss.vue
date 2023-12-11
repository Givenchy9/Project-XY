<template>
    <div>
        <button @click="myFunction1"
            class="relative rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">100px</button>
        <button @click="myFunction2"
            class="relative rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">200px</button>
        <button @click="myFunction3"
            class="relative rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">300px</button>
        <button @click="myFunction4"
            class="relative rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">400px</button>
        <button @click="myFunctionR"
            class="relative rounded-full bg-black px-3.5 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-500">Reset</button>
        <input type="number" class="relative rounded-xl" v-model="inputValue" @change="myFunction" maxlength="20" />
        <div id="circle" :style="circleStyle"></div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';

const inputValue = ref(50);

const circleStyle = ref({
    backgroundColor: 'black',
    borderRadius: '50px',
    height: '50px',
    width: '50px',
    transition: '0.5s',
});

const myFunction = () => {
    circleStyle.value.height = `${inputValue.value}px`;
    circleStyle.value.width = `${inputValue.value}px`;
    circleStyle.value.borderRadius = `${inputValue.value}px`;
};

const setCircleStyle = (height, width, borderRadius, backgroundColor) => {
    circleStyle.value.height = `${height}px`;
    circleStyle.value.width = `${width}px`;
    circleStyle.value.borderRadius = `${borderRadius}px`;
    circleStyle.value.backgroundColor = backgroundColor;
};

const myFunction1 = () => setCircleStyle(100, 100, 100, 'blue');
const myFunction2 = () => setCircleStyle(200, 200, 200, 'red');
const myFunction3 = () => setCircleStyle(300, 300, 300, 'green');
const myFunction4 = () => setCircleStyle(400, 400, 400, 'purple');
const myFunctionR = () => setCircleStyle(50, 50, 50, 'black');

onMounted(() => {
    myFunction(); // Set initial circle style based on input value
});
</script>
  
<style scoped>
#circle {
    margin-top: 10px;
    /* Add some spacing for better visibility */
}
</style>
  