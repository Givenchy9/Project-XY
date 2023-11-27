<template>
    <div class="mt-4">
        <label for="naam">Naam:</label>
        <input type="text" id="naam" v-model="naam" maxlength="20">

        <label for="leeftijd">Leeftijd:</label>
        <input type="number" id="leeftijd" v-model="leeftijd" maxlength="20">

        <p id="output1"></p>
        <p id="output2"></p>
        <p id="output3"></p>
        <p id="output4"></p>

        <button @click="myFunction"
            class="bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Button
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const leeftijd = ref(0);
const naam = ref("");
const zestien = 16;
const vijftig = 50;
const zevenenzestig = 67;
const hondert = 100;

const calculateAge = (age, baseAge) => {
    return Math.abs(age - baseAge);
};

const myFunction = () => {
    const z16 = calculateAge(leeftijd.value, zestien);
    const z50 = calculateAge(vijftig, leeftijd.value);
    const z67 = calculateAge(zevenenzestig, leeftijd.value);
    const z100 = calculateAge(hondert, leeftijd.value);

    document.getElementById("output1").innerHTML = `Mijn naam is ${naam.value} en ik ben ${leeftijd.value} jaar. Jij bent ${z16} jaar ouder dan ${zestien}`;
    document.getElementById("output2").innerHTML = `Mijn naam is ${naam.value} en ik ben ${leeftijd.value} jaar. Jij bent ${z50} jaar jonger dan ${vijftig}`;
    document.getElementById("output3").innerHTML = `Mijn naam is ${naam.value} en ik ben ${leeftijd.value} jaar. Nog ${z67} jaar dan ben je ${zevenenzestig}`;
    document.getElementById("output4").innerHTML = `Mijn naam is ${naam.value} en ik ben ${leeftijd.value} jaar. Nog ${z100} jaar dan ben je ${hondert}`;
};
</script>
