<template>
    <div>
        <textarea id="myInput" readonly class="resize-none h-80 w-80">
<!-- <?php
$talen = array("PHP", "C#", "HTML", "JavaScript", "Java", "C++", "C");
echo "I like " .$talen[3] . ", " . $talen[2] . " and " . $talen[6] . ".<br><br>";

foreach ($talen as $value) {
echo "$value <br>";
    }
?> -->
    </textarea>
        <button @click="copyText" class="absolute">
            <i v-if="isCopied" class="fa-solid fa-check"></i>
            <i v-else class="fa-regular fa-copy fa-xl"></i>
        </button>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
// const textToCopy = ref();
const isCopied = ref(false);

const copyText = () => {
    const copyInput = document.getElementById('myInput');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopied.value = true;
    setTimeout(() => {
        isCopied.value = false;
    }, 1000);
};
</script>
  