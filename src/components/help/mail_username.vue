<template>
    <div>
        <label>Email: </label>
        <input v-model="email" type="text" id="email1" placeholder="Name.backname@gmail.com"
            class="relative rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <button @click="myFunctionKnop" id="submit" type="submit"
            class="relative rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Hello</button>

        <div v-if="result.beforeDot">
            <p>Voornaam: {{ result.beforeDot }}</p>
        </div>

        <div v-if="result.betweenDotAndAt">
            <p>Achternaam: {{ result.betweenDotAndAt }}</p>
        </div>

        <div v-if="result.afterAt">
            <p>Provider: {{ result.afterAt }}</p>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const email = ref('');
const result = ref({
    beforeDot: '',
    betweenDotAndAt: '',
    afterAt: '',
});

function myFunctionKnop() {
    let parts = email.value.split("@");
    result.value.beforeDot = parts[0].split(".")[0];
    result.value.betweenDotAndAt = parts[0].split(".")[1];
    result.value.afterAt = parts[1];
}
</script>
  