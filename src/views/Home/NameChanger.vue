<template>
    <div class="m-auto h-full grid grid-rows-12 gap-4 w-1/2 backdrop-blur-3xl p-2 my-10 rounded-xl border-white border-2">
        <div class="row-span-2 text-center font-bold text-xl">
            <p class="dark:text-white">
                Come up with a nice title for this website</p>
        </div>
        <div class="row-span-2">
            <div class="flex items-center bg-white rounded-xl shadow-sm ring-1 ring-inset ring-gray-300">
                <i class="fa-solid fa-magnifying-glass pl-3 text-gray-500"></i>
                <input type="text" v-model="searchTerm"
                    class="flex-1 py-1.5 px-2 pl-3 text-gray-900 bg-transparent placeholder:text-gray-400 focus:outline-none"
                    placeholder="Search your titles" />
            </div>
        </div>
        <div class="overflow-auto row-span-8 h-72">
            <div v-for="message in filtered" :key="message.id" ref="adds">
                <div class="grid grid-cols-7">
                    <input v-model="message.text" type="text"
                        class="col-span-4 px-2 rounded-lg italic font-bold text-gray-700 text-lg hover:bg-blue-200 focus:outline-none">
                    <button @click="updateMessage(message)"
                        class="col-span-2 rounded bg-green-600 px-2 font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <span v-if="!loading">Rename <i class="fa-solid fa-square-check"></i></span>
                        <span v-else>Loading <i class="fa-solid fa-spinner fa-spin"></i></span>
                    </button>
                    <button @click="deleteMessage(message.id)"
                        class="col-span-1 rounded bg-red-500 px-2 font-semibold text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">delete
                        <i class="fa-solid fa-square-xmark"></i></button>
                </div>
            </div>
            <div v-if="filtered.length == 0">
                <div class="mt-4 text-gray-900 col-span-2">
                    <button type="button"
                        class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none">
                        No results add a new title below <i class="fa-solid fa-arrow-down"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 row-span-2">
            <input @keydown="maximumCaracters" ref="newmessage" placeholder="Add new name..." type="text"
                class="rounded-xl px-2 mr-7">
            <button @click="addNewMessage" id="addnew" ref="addnew"
                class="col-span-1 rounded-xl bg-blue-500 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">addnew
                <i class="fa-solid fa-plus fa-lg"></i></button>

            <div ref="errorMessage" class="rounded-xl bg-red-50 py-1 px-2 mt-4 hidden col-span-2">
                <p class="text-sm text-yellow-700">
                    <i class="fa-solid fa-triangle-exclamation"></i> Maximum caracters 20
                </p>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { getFirestore, onSnapshot, collection, doc, deleteDoc, setDoc, addDoc, orderBy, query } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ref, onUnmounted, computed } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid';

const firebaseConfig = {
    apiKey: "AIzaSyCPl9h4DqF4Yhd1_0mL6VyuUQ3r7L1uZzI",
    authDomain: "test-311af.firebaseapp.com",
    projectId: "test-311af",
    storageBucket: "test-311af.appspot.com",
    messagingSenderId: "647783387657",
    appId: "1:647783387657:web:9ad27de35ee9402c671ed8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const search = ref('');
const messages = ref([]);

export default {
    name: 'App',
    components: {},
    computed: {
        filtered() {
            if (!this.searchTerm) {
                return this.messages
            }

            return this.messages.filter((message) => {
                return message.text.toLowerCase().includes(this.searchTerm.toLowerCase())
            })
        },
    },
    methods: {
        filterMessages() {
            const filteredMessages = this.messages.filter((message) => {
                return message.text.toLowerCase().includes(this.searchTerm.toLowerCase());
            });
            return filteredMessages;
        },
        addNewMessage: function () {
            if (this.filtered.length >= 10) {
                this.$refs.errorMessage.style.display = "inline-block";
                this.$refs.errorMessage.innerHTML = "Maximum adds = 10   (you can always rename your adds)";
                this.$refs.addnew.style.cursor = "not-allowed";
                this.$refs.addnew.disabled = true;
            } else {
                this.$refs.errorMessage.style.display = "none";
                this.$refs.addnew.style.cursor = "auto";
                this.$refs.addnew.disabled = false;

                addDoc(collection(db, 'messages'), {
                    text: this.$refs.newmessage.value,
                    date: Date.now()
                });
            }
        },
        updateMessage: function (message) {
            this.loading = true;

            setTimeout(() => {
                this.loading = false;
                setDoc(doc(db, 'messages', message.id), {
                    text: message.text,
                    date: message.date
                });
            }, 2000);
        },
        deleteMessage: function (id) {
            deleteDoc(doc(db, 'messages', id))
            if (this.filtered.length < 11) {
                this.$refs.errorMessage.style.display = "none";
                this.$refs.addnew.style.cursor = "auto";
                this.$refs.addnew.disabled = false;
            }
        },
        maximumCaracters() {
            if (this.$refs.newmessage.value.length > 20) {
                this.$refs.newmessage.style.backgroundColor = "salmon";
                this.$refs.errorMessage.style.display = "inline-block";
                this.$refs.errorMessage.innerHTML = "maximum caracters = 20";
                this.$refs.addnew.style.cursor = "not-allowed";
                this.$refs.addnew.disabled = true;
            } else {
                this.$refs.newmessage.style.backgroundColor = "lightgreen";
                this.$refs.errorMessage.style.display = "none";
                this.$refs.addnew.style.cursor = "auto";
                this.$refs.addnew.disabled = false;
            }
        },
    },
    data: () => {
        return {
            messages: ref([]),
            searchTerm: '',
            loading: false
        }
    },
    mounted() {
        const latestQuery = query(collection(db, "messages"), orderBy('date'));
        const livemessages = onSnapshot(latestQuery, (snapshot) => {
            this.messages = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    text: doc.data().text,
                    date: doc.data().date
                }
            });
        });
        onUnmounted(livemessages)
        this.messages = this.filterMessages();
    }
}
</script>
<style>
#addnew:hover+#hover {
    display: inline-block;
}
</style>
  