<template>
    <footer class="backdrop-blur-3xl shadow-gray-500 shadow rounded-3xl">
        <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <div class="flex justify-center space-x-6 md:order-2">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500"
                    target="_blank">
                    <span class="sr-only">{{ item.name }}</span>
                    <i :class="item.icon"></i>
                </a>
            </div>
            <div class="mt-8 md:order-1 md:mt-0">
                <p class="text-center text-xs leading-5 text-gray-500">&copy; V0.1.6</p>
            </div>
        </div>
    </footer>
</template>
  
<script setup>
// import { defineComponent } from 'vue';

const navigation = [
    {
        name: 'linkedin',
        href: 'https://www.linkedin.com/',
        icon: 'fab fa-linkedin fa-2xl'
    },
    {
        name: 'GitHub',
        href: 'https://github.com/Givenchy9',
        icon: 'fab fa-github fa-2xl'
    },
];
</script>
  