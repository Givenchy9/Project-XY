<template>
  <div class="flex flex-col h-screen">
    <NavigationBar />
    <router-view class="flex-grow" />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import NavigationBar from '@/components/NavigationBar.vue';
import Footer from '@/components/Footer.vue';

</script>
<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: lightskyblue;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: dodgerblue;
}
</style>
