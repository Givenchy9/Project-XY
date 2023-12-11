<template>
    <div class="overflow-auto h-screen">
        <div @mousemove="hover"
            class="button grid grid-col m-auto mb-5 p-2 w-2/3 backdrop-blur-3xl rounded-3xl border-white border-2">
            <p class="text-center border-b-2 font-bold">Searchbar
                <ShortToggleSwitch @click="toggleDivA" class="float-right" />
            </p>
            <div :style="{ display: DivA ? 'inline-block' : 'none' }" id="a1">
                <searchbar />
            </div>
            <div class="grid grid-cols-2 text-center" :style="{ display: !DivA ? '' : 'none' }" id="a2">
                <div class="p-2">
                    <p>Javascript</p>
                    <textarea id="CopyA1" readonly
                        class="relative resize-none h-40 w-full overflow rounded-lg px-2 text-xs outline-none">
<!-- 
<script>
    const famousFootballers = [
        'Lionel Messi',
        'Cristiano Ronaldo',
        'Neymar Jr.',
    ];

    const footballersList = document.getElementById('footballersList');
    const searchInput = document.getElementById('searchInput');

    populateList(famousFootballers);

    searchInput.addEventListener('input', handleSearch);

    function populateList(footballers) {
        footballersList.innerHTML = '';

        footballers.forEach(footballer => {
            const listItem = document.createElement('li');
            listItem.textContent = footballer;
            footballersList.appendChild(listItem);
        });
    }

    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase();

        const filteredFootballers = famousFootballers.filter(footballer =>
            footballer.toLowerCase().includes(searchTerm)
        );

        populateList(filteredFootballers);
    }
</script>
 -->
    </textarea>
                    <button @click="CopyA1"
                        class="relative rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        copy this code
                        <i v-if="isCopiedA1" class="fa-solid fa-check text-green-500"></i>
                        <i v-else class="fa-regular fa-copy fa-xl"></i>
                    </button>
                </div>
                <div class="p-2">
                    <p>PHP</p>
                    <!-- <textarea id="CopyA2" readonly class="resize-none h-40 w-full rounded-lg px-2 text-xs outline-none">

    </textarea>
                    <button @click="CopyA2">
                        copy this code
                        <i v-if="isCopiedA2" class="fa-solid fa-check text-green-500"></i>
                        <i v-else class="fa-regular fa-copy fa-xl"></i>
                    </button> -->
                </div>
            </div>
        </div>



        <div @mousemove="hover"
            class="button grid grid-col m-auto mb-5 p-2 w-2/3 backdrop-blur-3xl rounded-3xl border-white border-2">
            <p class="text-center border-b-2 font-bold">Fuzzy Search
                <ShortToggleSwitch disabled @click="toggleDivB" class="float-right opacity-50" />
            </p>
            <div :style="{ display: DivB ? 'inline-block' : 'none' }" id="a1">
                <i class="fa-solid fa-lock text-gray-700"></i>
            </div>
            <div class="grid grid-cols-2 text-center" :style="{ display: !DivB ? '' : 'none' }" id="a2">
                <div class="p-2">
                    <p>Javascript</p>
                    <textarea id="CopyB1" readonly
                        class="relative resize-none h-40 w-full overflow rounded-lg px-2 text-xs outline-none">

    </textarea>
                    <button @click="CopyB1"
                        class="relative rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        copy this code
                        <i v-if="isCopiedB1" class="fa-solid fa-check text-green-500"></i>
                        <i v-else class="fa-regular fa-copy fa-xl"></i>
                    </button>
                </div>
                <div class="p-2">
                    <p>Html</p>
                    <textarea id="CopyB2" readonly class="resize-none h-40 w-full rounded-lg px-2 text-xs outline-none">

    </textarea>
                    <button @click="CopyB2"
                        class="relative rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        copy this code
                        <i v-if="isCopiedB2" class="fa-solid fa-check text-green-500"></i>
                        <i v-else class="fa-regular fa-copy fa-xl"></i>
                    </button>
                </div>
            </div>
        </div>



        <div @mousemove="hover"
            class="button grid grid-col m-auto mb-5 p-2 w-2/3 backdrop-blur-3xl rounded-3xl border-white border-2">
            <p class="text-center border-b-2 font-bold">Toggle Divs
                <ShortToggleSwitch @click="toggleDivC" class="float-right" />
            </p>
            <div :style="{ display: DivC ? 'inline-block' : 'none' }" id="a1">
                <toggledivs />
            </div>
            <div class="grid grid-cols-2 text-center" :style="{ display: !DivC ? '' : 'none' }" id="a2">
                <div class="p-2">
                    <p>Javascript</p>
                    <textarea id="CopyC1" readonly
                        class="relative resize-none h-40 w-full overflow rounded-lg px-2 text-xs outline-none">
<!-- 
<script>
    function myFunction() {
        let checkbox = document.getElementById("checkbox");
        let div1 = document.getElementById("div1");
        let div2 = document.getElementById("div2");

        if (checkbox.checked) {
            div2.style.display = "none";
            div1.style.display = "block";
        } else {
            div2.style.display = "block";
            div1.style.display = "none";
        }
    }
</script>
 -->
    </textarea>
                    <button @click="CopyC1"
                        class="relative rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        copy this code
                        <i v-if="isCopiedC1" class="fa-solid fa-check text-green-500"></i>
                        <i v-else class="fa-regular fa-copy fa-xl"></i>
                    </button>
                </div>
                <div class="p-2">
                    <p>Css</p>
                    <textarea id="CopyC2" readonly
                        class="relative resize-none h-40 w-full rounded-lg px-2 text-xs outline-none">
<!-- 
<style>
        #div1 {
            height: 100px;
            width: 100px;
            background-color: blue;
            color: red;
            position: absolute;
            display: none;
        }

        #div2 {
            height: 100px;
            width: 100px;
            background-color: red;
            color: blue;
            position: absolute;
        }

        input {
            margin-top: 120px;
        }
    </style>
 -->
    </textarea>
                    <button @click="CopyC2"
                        class="relative rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        copy this code
                        <i v-if="isCopiedC2" class="fa-solid fa-check text-green-500"></i>
                        <i v-else class="fa-regular fa-copy fa-xl"></i>
                    </button>
                </div>
            </div>
        </div>



        <div @mousemove="hover"
            class="button grid grid-col m-auto mb-5 p-2 w-2/3 backdrop-blur-3xl rounded-3xl border-white border-2">
            <p class="text-center border-b-2 font-bold">Copy Text
                <ShortToggleSwitch @click="toggleDivD" class="float-right" />
            </p>
            <div :style="{ display: DivD ? 'inline-block' : 'none' }" id="a1">
                <CopyText />
            </div>
            <div class="grid grid-cols-2 text-center" :style="{ display: !DivD ? '' : 'none' }" id="a2">
                <div class="p-2">
                    <p>Javascript</p>
                    <textarea id="CopyD1" readonly
                        class="relative resize-none h-40 w-full overflow rounded-lg px-2 text-xs outline-none">
<!-- 
<script>
        function copyText() {
            const textarea = document.getElementById('myTextarea');

            textarea.select();
            textarea.setSelectionRange(0, 99999);

            document.execCommand('copy');

            textarea.setSelectionRange(0, 0);

            alert('Text copied to clipboard!');
        }
    </script>
 -->
    </textarea>
                    <button @click="CopyD1"
                        class="relative rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        copy this code
                        <i v-if="isCopiedD1" class="fa-solid fa-check text-green-500"></i>
                        <i v-else class="fa-regular fa-copy fa-xl"></i>
                    </button>
                </div>
                <div class="p-2">
                    <p></p>
                </div>
            </div>
        </div>






        <div @mousemove="hover"
            class="button grid grid-col m-auto mb-5 p-2 w-2/3 backdrop-blur-3xl rounded-3xl border-white border-2">
            <p class="text-center border-b-2 font-bold">Maximum Input
                <ShortToggleSwitch @click="toggleDivE" class="float-right" />
            </p>
            <div :style="{ display: DivE ? 'inline-block' : 'none' }" id="a1">
                <maximum_inputs />
            </div>
            <div class="grid grid-cols-2 text-center" :style="{ display: !DivE ? '' : 'none' }" id="a2">
                <div class="p-2">
                    <p>Javascript</p>
                    <textarea id="CopyE1" readonly
                        class="relative resize-none h-40 w-full overflow rounded-lg px-2 text-xs outline-none">
<!-- 
<script>
        const myInput = document.getElementById('myInput');

        myInput.addEventListener('input', function () {
            if (myInput.value.length > 20) {
                myInput.classList.remove('success');
                myInput.classList.add('error');
            } else {
                myInput.classList.remove('error');
                myInput.classList.add('success');
            }
        });
    </script>
 -->
    </textarea>
                    <button @click="CopyE1"
                        class="relative rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        copy this code
                        <i v-if="isCopiedE1" class="fa-solid fa-check text-green-500"></i>
                        <i v-else class="fa-regular fa-copy fa-xl"></i>
                    </button>
                </div>
                <div class="p-2">
                    <p></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ShortToggleSwitch from '@/components/ShortToggleSwitch.vue';
import { ref } from 'vue';


import searchbar from '@/components/help/searchbar.vue'
// import fuzzysearch from '@/components/help/fuzzysearch.vue'
import toggledivs from '@/components/help/toggledivs.vue'
import CopyText from '@/components/help/CopyText.vue'
import maximum_inputs from '@/components/help/maximum_inputs.vue'
import mail_username from '@/components/help/mail_username.vue'
import stopwatch from '@/components/help/stopwatch.vue'



const hover = (e) => {
    const buttonRect = e.target.getBoundingClientRect();
    const x = e.pageX - buttonRect.left;
    const y = e.pageY - buttonRect.top;

    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);
};

const DivA = ref(true);

const toggleDivA = () => {
    DivA.value = !DivA.value;
};

const isCopiedA1 = ref(false);
const CopyA1 = () => {
    const copyInput = document.getElementById('CopyA1');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopiedA1.value = true;
    setTimeout(() => {
        isCopiedA1.value = false;
    }, 1000);
};

const isCopiedA2 = ref(false);
const CopyA2 = () => {
    const copyInput = document.getElementById('CopyA2');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopiedA2.value = true;
    setTimeout(() => {
        isCopiedA2.value = false;
    }, 1000);
};





const DivB = ref(true);

const toggleDivB = () => {
    DivB.value = !DivB.value;
};

const isCopiedB1 = ref(false);
const CopyB1 = () => {
    const copyInput = document.getElementById('CopyB1');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopiedB1.value = true;
    setTimeout(() => {
        isCopiedB1.value = false;
    }, 1000);
};

const isCopiedB2 = ref(false);
const CopyB2 = () => {
    const copyInput = document.getElementById('CopyB2');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopiedB2.value = true;
    setTimeout(() => {
        isCopiedB2.value = false;
    }, 1000);
};




const DivC = ref(true);

const toggleDivC = () => {
    DivC.value = !DivC.value;
};

const isCopiedC1 = ref(false);
const CopyC1 = () => {
    const copyInput = document.getElementById('CopyC1');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopiedC1.value = true;
    setTimeout(() => {
        isCopiedC1.value = false;
    }, 1000);
};

const isCopiedC2 = ref(false);
const CopyC2 = () => {
    const copyInput = document.getElementById('CopyC2');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopiedC2.value = true;
    setTimeout(() => {
        isCopiedC2.value = false;
    }, 1000);
};





const DivD = ref(true);

const toggleDivD = () => {
    DivD.value = !DivD.value;
};

const isCopiedD1 = ref(false);
const CopyD1 = () => {
    const copyInput = document.getElementById('CopyD1');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopiedD1.value = true;
    setTimeout(() => {
        isCopiedD1.value = false;
    }, 1000);
};

const isCopiedD2 = ref(false);
const CopyD2 = () => {
    const copyInput = document.getElementById('CopyD2');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopiedD2.value = true;
    setTimeout(() => {
        isCopiedD2.value = false;
    }, 1000);
};





const DivE = ref(true);

const toggleDivE = () => {
    DivE.value = !DivE.value;
};

const isCopiedE1 = ref(false);
const CopyE1 = () => {
    const copyInput = document.getElementById('CopyE1');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopiedE1.value = true;
    setTimeout(() => {
        isCopiedE1.value = false;
    }, 1000);
};

const isCopiedE2 = ref(false);
const CopyE2 = () => {
    const copyInput = document.getElementById('CopyE2');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopiedE2.value = true;
    setTimeout(() => {
        isCopiedE2.value = false;
    }, 1000);
};









const DivF = ref(true);

const toggleDivF = () => {
    DivF.value = !DivF.value;
};

const isCopiedF1 = ref(false);
const CopyF1 = () => {
    const copyInput = document.getElementById('CopyF1');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopiedF1.value = true;
    setTimeout(() => {
        isCopiedF1.value = false;
    }, 1000);
};

const isCopiedF2 = ref(false);
const CopyF2 = () => {
    const copyInput = document.getElementById('CopyF2');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopiedF2.value = true;
    setTimeout(() => {
        isCopiedF2.value = false;
    }, 1000);
};

</script>
<style lang="scss" scoped>
.button {
    overflow: hidden;
    cursor: cell;

    // span {
    //     position: relative;
    //     pointer-events: none;
    //     z-index: 8;
    // }

    &::before {
        --size: 0;

        content: '';
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(circle closest-side, blue, transparent);
        transform: translate(-50%, -50%);
        transition: width 0.2s ease, height 0.2s ease;
        z-index: 0;
        opacity: 60%;
    }

    &:hover::before {
        --size: 200px;
    }
}
</style>