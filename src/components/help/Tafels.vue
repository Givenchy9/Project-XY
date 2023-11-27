<template>
    <div class="m-4">
        <input v-model="number" type="text" id="input"
            class="rounded-md py-1.5  ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400"
            placeholder="Insert a numer" maxlength="20" />
        <table id="table" class="border-white border-2 rounded-xl">
            <tbody>
                <tr v-for="i in 10" :key="i" class="border-white border-2 rounded-xl">
                    <td>{{ number }} * {{ i }} = {{ number * i }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
const number = ref('');
</script>