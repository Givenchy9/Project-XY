<template>
    <div class="bg-gray-200 m-auto grid grid-rows-3 gap-2 py-2 rounded-xl w-80 justify-center dark:bg-gray-500">
        <p class="text-center font-bold text-xl dark:text-white">NameChanger</p>
        <p class="text-center text-gray-500 dark:text-white dark:text-gray-800">Verzin een Titel voor mijn Website</p>
        <router-link to="/NameChanger"
            class="router rounded-xl bg-cyan-500 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-1/2 m-auto cursor-auto">
            <button>Klik Hier
                <i class="share1 fa-solid fa-share text-white" id="send"></i>
                <i class="share2 fa-solid fa-share fa-beat-fade hidden"></i>
            </button>
        </router-link>
    </div>
</template>
  
<style>
.button:active .fa-spin {
    display: inline-block;
}

.router:hover .share1 {
    display: none;
}

.router:hover .share2 {
    display: inline-block;
}
</style>
  