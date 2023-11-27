<template>
    <div>
        <p id="demo2">This is an Javascript array: </p>
        <ul>
            <li v-for="language in talen" :key="language.id">{{ language.name }}</li>
        </ul>
    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
    setup() {
        const talen = ref([
            { id: 1, name: '1 PHP' },
            { id: 2, name: '2 c#' },
            { id: 3, name: '3 HTML' },
            { id: 4, name: '4 Javascript' },
            { id: 5, name: '5 Java' },
            { id: 6, name: '6 C++' },
        ]);

        return {
            talen,
        };
    },
};
</script>
  