<template>
    <div>
        <MyProgressBar />
        <button @click="startProgress">Start Progress</button>
    </div>
</template>
  
<script>
import MyProgressBar from './MyProgressBar.vue'; // Adjust the path based on your project structure

export default {
    components: {
        MyProgressBar,
    },
    methods: {
        startProgress() {
            // Call the startProgressBar method from the component
            this.$refs.myProgressBar.startProgressBar();
        },
    },
};
</script>
  