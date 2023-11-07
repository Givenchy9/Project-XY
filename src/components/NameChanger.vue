<template>
    <div class="m-auto grid grid-rows-3 gap-2 py-2 border-2 rounded-xl w-80 justify-center">
        <p class="text-center font-bold text-xl">NameChanger</p>
        <p class="text-center text-gray-500">Verzin een Titel voor mijn Website</p>
        <router-link to="/NameChanger"
            class="rounded-xl bg-cyan-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-1/2 m-auto cursor-auto hover:bg-blue-800">
            <button>Klik Hier
                <i class="fa-solid fa-share text-white" id="send"></i></button>
        </router-link>
        <!-- <input type="text" v-model="title" id="input" maxlength="20"
            class="w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 py-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-400 xm:text-xm sm:leading-6 font-bold text-center" />
        <button @click="updateTitle" id="myButton" value="send"
            class="rounded-xl bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-1/2 m-auto cursor-auto">
            Send
            <i class="fa-solid fa-share text-white" id="send"></i>
            <i class="fa-solid fa-spinner fa-spin text-white hidden" id="loading"></i>
            <i class="fa-solid fa-check text-white hidden" id="check"></i>
        </button>
        <p class="text-center text-gray-900 border rounded-xl py-2">{{ title }}</p> -->
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            title: '',
        };
    },
    methods: {
        updateTitle() {
            const button = document.getElementById('myButton');
            const loading = document.getElementById('loading');
            const send = document.getElementById('send');
            const check = document.getElementById('check');
            button.style.backgroundColor = 'red';
            loading.style.display = 'inline-block';
            send.style.display = 'none';
            check.style.display = 'none';
            setTimeout(() => {
                button.style.backgroundColor = 'green';
                loading.style.display = 'none';
                send.style.display = 'none';
                check.style.display = 'inline-block';
            }, 2000);
            // this.title = this.title;
        },
    },
};


</script>
  
<style>
.button:active .fa-spin {
    display: inline-block;
}
</style>
  