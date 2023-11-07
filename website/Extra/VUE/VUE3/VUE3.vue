<template>
    <div id="app">
        Tekst vanuit data: <ul>{{ tekst }}</ul><br>
        Tekst vanuit data: <ul>{{ lijst }}</ul>
    </div>
</template>
<script>
Vue.createApp({
    data() {
        return {
            tekst: "dit is een test tekst",
            lijst: ["aaa", "bee", "cee"]
        }
    }
}).mount('#app')
</script>