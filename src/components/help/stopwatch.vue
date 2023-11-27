<template>
    <div class="auto text-center">
        <div id="display" class="text-3xl">{{ formattedTime }}</div>
        <div id="controls">
            <button @click="startStop"
                class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Start/Stop</button>
            <button @click="reset"
                class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Reset</button>
        </div>
    </div>
</template>
  
<script setup>
import { ref, computed, onBeforeUnmount } from 'vue';

let isRunning = ref(false);
let milliseconds = ref(0);
let seconds = ref(0);
let minutes = ref(0);
let hours = ref(0);
let interval;

const startStop = () => {
    if (isRunning.value) {
        clearInterval(interval);
    } else {
        interval = setInterval(updateDisplay, 10); // Update every 10 milliseconds
    }

    isRunning.value = !isRunning.value;
};

const reset = () => {
    clearInterval(interval);
    isRunning.value = false;
    milliseconds.value = 0;
    seconds.value = 0;
    minutes.value = 0;
    hours.value = 0;
    updateDisplay();
};

const updateDisplay = () => {
    milliseconds.value += 10; // Increment by 10 milliseconds
    if (milliseconds.value === 1000) {
        milliseconds.value = 0;
        seconds.value++;
        if (seconds.value === 60) {
            seconds.value = 0;
            minutes.value++;
            if (minutes.value === 60) {
                minutes.value = 0;
                hours.value++;
            }
        }
    }
};

const pad = (value) => {
    return value.toString().padStart(2, '0');
};

const formattedTime = computed(() => {
    return `${pad(hours.value)}:${pad(minutes.value)}:${pad(seconds.value)}.${pad(milliseconds.value)}`;
});

// Cleanup the interval when the component is unmounted
onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>
  