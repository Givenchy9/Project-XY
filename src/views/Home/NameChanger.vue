<template>
    <div class="m-auto h-full grid grid-rows-10 gap-4 w-1/2 backdrop-blur-3xl p-2 my-10 rounded-xl border-white border-2">
        <div class="row-span-2">
            <div class="flex items-center bg-white rounded-xl shadow-sm ring-1 ring-inset ring-gray-300">
                <i class="fa-solid fa-magnifying-glass pl-3 text-gray-500"></i>
                <input type="text" v-model="searchTerm"
                    class="flex-1 py-1.5 px-2 pl-3 text-gray-900 bg-transparent placeholder:text-gray-400 focus:outline-none"
                    placeholder="Search your titles" />
            </div>
        </div>
        <div class="overflow-auto row-span-8 h-72">
            <div v-for="message in filtered" :key="message.id">
                <div class="grid grid-cols-7">
                    <input v-model="message.text" type="text"
                        class="col-span-4 px-2 rounded-lg italic font-bold text-gray-700 text-lg hover:bg-blue-200 focus:outline-none">
                    <button @click="updateMessage(message)"
                        class="col-span-2 rounded bg-green-600 px-2 font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">send
                        <i class="fa-solid fa-square-check fa-xl"></i></button>
                    <button @click="deleteMessage(message.id)"
                        class="col-span-1 rounded bg-red-500 px-2 font-semibold text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">delete
                        <i class="fa-solid fa-square-xmark fa-xl"></i></button>
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
            <input ref="newmessage" placeholder="Add new name..." type="text" class="rounded-xl px-2 mr-7">
            <button @click="addNewMessage"
                class="col-span-1 rounded-xl bg-blue-500 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">addnew
                <i class="fa-solid fa-plus fa-lg"></i><i class="fa-solid fa-check fa-lg hidden"></i></button>
        </div>
    </div>









    <!-- <div v-for="message in messages">
      <input v-model="message.text" type="text">
      <button @click="updateMessage(message)">send</button>
      <button @click="deleteMessage(message.id)">delete</button>
    </div>
    <hr>
    <input ref="newmessage" placeholder="new message ..." type="text">
    <button @click="addNewMessage">addnew</button>
  </div> -->
</template>
  
<script lang="ts">
import { getFirestore, onSnapshot, collection, doc, deleteDoc, setDoc, addDoc, orderBy, query } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const search = ref('');
const messages = ref([]);

// const filteredMessages = computed(() => {
//     if (!search.value) {
//         return messages.value;
//     }

//     const searchTerm = search.value.toLowerCase();
//     return messages.value.filter((message) => {
//         return message.text.toLowerCase().includes(searchTerm);
//     });
// });

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
            addDoc(collection(db, 'messages'), {
                text: this.$refs.newmessage.value,
                date: Date.now()
            });
        },
        updateMessage: function (message) {
            setDoc(doc(db, 'messages', message.id), {
                text: message.text,
                date: message.date
            })
        },
        deleteMessage: function (id) {
            deleteDoc(doc(db, 'messages', id))
        }
    },
    data: () => {
        return {
            messages: ref([]),
            searchTerm: '',
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
  
  