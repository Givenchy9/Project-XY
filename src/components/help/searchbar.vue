<template>
    <div>
        <input v-model="searchTerm" type="text" placeholder="Search footballers"
            class="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <ul id="footballersList">
            <li v-for="footballer in filteredFootballers" :key="footballer">{{ footballer }}</li>
        </ul>
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue'
const famousFootballers = [
    'Lionel Messi',
    'Cristiano Ronaldo',
    'Neymar Jr.',
    'Kylian Mbappé',
    'Mohamed Salah',
    'Sergio Ramos',
    'Robert Lewandowski',
    'Kevin De Bruyne',
    'Virgil van Dijk',
    'Harry Kane',
    'Luka Modric',
    'Sadio Mané',
    'Zlatan Ibrahimović',
    'Andres Iniesta',
    'Gareth Bale',
    'Antoine Griezmann',
    'Paul Pogba',
    'Thiago Alcantara',
];

const searchTerm = ref('');
const filteredFootballers = computed(() =>
    famousFootballers.filter(footballer => footballer.toLowerCase().includes(searchTerm.value.toLowerCase()))
);
</script>
  