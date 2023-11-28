<template>
    <div>
        <input v-model="inputValue" id="myInput"
            :class="{ 'error': inputValue.length > 20, 'success': inputValue.length <= 20 }">
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
const inputValue = ref('');
</script>
  
<style>
#myInput {
    padding: 5px;
}

.error {
    background-color: #ff9999;
}

.success {
    background-color: #99ff99;
}
</style>
  