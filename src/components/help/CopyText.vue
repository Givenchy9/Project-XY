<template>
    <div>
        <textarea ref="myTextarea">Hello my name is</textarea>
        <button @click="copyText"
            class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Copy
            Text</button>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
const myTextarea = ref(null);

const copyText = () => {
    myTextarea.value.select();
    myTextarea.value.setSelectionRange(0, 99999);

    document.execCommand('copy');

    myTextarea.value.setSelectionRange(0, 0);

    alert('Text copied to clipboard!');
};
</script>
  