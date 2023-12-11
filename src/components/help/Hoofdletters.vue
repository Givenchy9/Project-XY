<template>
    <div>
        <div>
            <input v-model="input1" type="text" max="20" placeholder="Alles Hoofdletter" maxlength="20"
                class="relative rounded border-blue-500 border-2 outline-none" />
            <button @click="myFunction1"
                class="relative rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Text1</button>
            <p>{{ output1 }}</p>
        </div>
        <div>
            <input v-model="input2" type="text" max="20" placeholder="Alles Kleineletter" maxlength="20"
                class="relative rounded border-red-500 border-2 outline-none" />
            <button @click="myFunction2"
                class="relative rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Text2</button>
            <p>{{ output2 }}</p>
        </div>
        <div>
            <input v-model="input3" type="text" max="20" placeholder="1e letter Hoofdletter" maxlength="20"
                class="relative rounded border-green-500 border-2 outline-none" />
            <button @click="myFunction3"
                class="relative rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Text3</button>
            <p>{{ output3 }}</p>
        </div>
        <div>
            <input v-model="input4" type="text" max="20" placeholder="Elke eerste letter" maxlength="20"
                class="relative rounded border-yellow-500 border-2 outline-none" />
            <button @click="myFunction4"
                class="relative rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Text4</button>
            <p>{{ output4 }}</p>
        </div>
        <div>
            <input v-model="input5" type="text" max="20" placeholder="Standaard Input" maxlength="20"
                class="relative rounded border-pink-500 border-2 outline-none" />
            <button @click="myFunction5"
                class="relative rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Text5</button>
            <p>{{ output5 }}</p>
        </div>
        <div>
            <input v-model="input6" type="text" max="20" placeholder="Alles Hoofdletter" maxlength="20"
                class="relative rounded border-black border-2 outline-none" />

            <button @click="myFunction6"
                class="relative rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Text6</button>
            <select v-model="selectedOption"
                class="relative rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 outline-none"
                name="select">
                <option value="myFunction1">Text1</option>
                <option value="myFunction2">Text2</option>
                <option value="myFunction3">Text3</option>
                <option value="myFunction4">Text4</option>
                <option value="myFunction5">Text5</option>
            </select>
            <p>{{ output6 }}</p>
        </div>
        <button @click="myFunction"
            class="relative rounded-full w-60 bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">All</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const input1 = ref('');
const output1 = ref('');
const myFunction1 = () => {
    const a = input1.value;
    const result = a.toUpperCase();
    output1.value = result;
};



const input2 = ref('');
const output2 = ref('');
const myFunction2 = () => {
    const a = input2.value;
    const result = a.toLowerCase();
    output2.value = result;
};



const input3 = ref('');
const output3 = ref('');
const myFunction3 = () => {
    const a = input3.value;
    const result = a.charAt(0).toUpperCase() + a.slice(1);
    output3.value = result;
};


const input4 = ref('');
const output4 = ref('');
const myFunction4 = () => {
    const a = input4.value;
    let result = "";
    const words = a.split(" ");

    for (let i = 0; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
        result += " ";
    }

    output4.value = result.trim();
};

const input5 = ref('');
const output5 = ref('');
const myFunction5 = () => {
    const a = input5.value;
    const result = a;
    output5.value = result;
};




const input6 = ref('');
const output6 = ref('');
let selectedOption = ref('myFunction1');

const myFunction6 = () => {
    const inputValue = input6.value;
    let result = '';

    switch (selectedOption.value) {
        case 'myFunction1':
            result = inputValue.toUpperCase();
            break;
        case 'myFunction2':
            result = inputValue.toLowerCase();
            break;
        case 'myFunction3':
            result = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
            break;
        case 'myFunction4':
            const words = inputValue.split(' ');
            result = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            break;
        case 'myFunction5':
            result = inputValue;
            break;
        default:
            result = inputValue;
    }

    output6.value = result;
};


const myFunction = () => {
    console.log("het werktz");
    myFunction1();
    myFunction2();
    myFunction3();
    myFunction4();
    myFunction5();
    button.value.innerHTML = `${myFunction1()}, ${myFunction2()}, ${myFunction3()}, ${myFunction4()}, ${myFunction5()}`;
};
</script>