<template>
    <div class="overflow-auto h-screen">
        <div @mousemove="hover"
            class="button grid grid-col m-auto mb-5 p-2 w-2/3 backdrop-blur-3xl rounded-3xl border-white border-2">
            <p class="text-center border-b-2 font-bold">Array
                <ShortToggleSwitch @click="toggleDivA" class="float-right" />
            </p>
            <div :style="{ display: DivA ? 'inline-block' : 'none' }" id="a1">
                <array />
            </div>
            <div class="grid grid-cols-2 text-center" :style="{ display: !DivA ? '' : 'none' }" id="a2">
                <div class="p-2">
                    <p>Javascript</p>
                    <textarea id="CopyA1" readonly
                        class="relative resize-none h-40 w-full overflow rounded-lg px-2 text-xs outline-none">
<!-- 
<body>
    <p id="demo2">Rood is Javacript: </p><p id="demo1"></p>
</body>

<script>
    console.log("werkt")
    const talen =["Dit is JavaScript", "PHP", "C#", "HTML", "JavaScript", "Java", "C++", "C"]
    document.getElementById("demo1").innerHTML = talen
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
                    <textarea id="CopyA2" readonly
                        class="relative resize-none h-40 w-full rounded-lg px-2 text-xs outline-none">
<!-- 
<?php
$talen = array("PHP", "C#", "HTML", "JavaScript", "Java", "C++", "C");

echo "I like " .$talen[3] . ", " . $talen[2] . " and " . $talen[6] . ".<br><br>";

foreach ($talen as $value) {
echo "$value <br>";
    }
?>
 -->
    </textarea>
                    <button @click="CopyA2"
                        class="relative rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        copy this code
                        <i v-if="isCopiedA2" class="fa-solid fa-check text-green-500"></i>
                        <i v-else class="fa-regular fa-copy fa-xl"></i>
                    </button>
                </div>
            </div>
        </div>



        <div @mousemove="hover"
            class="button grid grid-col m-auto mb-5 p-2 w-2/3 backdrop-blur-3xl rounded-3xl border-white border-2">
            <p class="text-center border-b-2 font-bold">Circle
                <ShortToggleSwitch @click="toggleDivB" class="float-right" />
            </p>
            <div :style="{ display: DivB ? 'inline-block' : 'none' }" id="a1">
                <CircleCss />
            </div>
            <div class="grid grid-cols-2 text-center" :style="{ display: !DivB ? '' : 'none' }" id="a2">
                <div class="p-2">
                    <p>Javascript</p>
                    <textarea id="CopyB1" readonly
                        class="relative resize-none h-40 w-full overflow rounded-lg px-2 text-xs outline-none">
<!-- 
<script>
    function myFunction() {
        const circle = document.getElementById("circle");
        const input = document.getElementById("input").value;

        circle.style.height = input + "px";
        circle.style.width = input + "px";
        circle.style.borderRadius = input + "px";
    }
    function myFunction1() {
        const circle = document.getElementById("circle");
        circle.style.height = "100px";
        circle.style.width = "100px";
        circle.style.borderRadius = "100px";
        circle.style.backgroundColor = "blue";
    }
    function myFunction2() {
        const circle = document.getElementById("circle");
        circle.style.height = "200px";
        circle.style.width = "200px";
        circle.style.borderRadius = "200px";
        circle.style.backgroundColor = "red";
    }
    function myFunction3() {
        const circle = document.getElementById("circle");
        circle.style.height = "300px";
        circle.style.width = "300px";
        circle.style.borderRadius = "300px";
        circle.style.backgroundColor = "green";
    }
    function myFunction4() {
        const circle = document.getElementById("circle");
        circle.style.height = "400px";
        circle.style.width = "400px";
        circle.style.borderRadius = "400px";
        circle.style.backgroundColor = "purple";
    }
    function myFunctionR() {
        const circle = document.getElementById("circle");
        circle.style.height = "50px";
        circle.style.width = "50px";
        circle.style.borderRadius = "50px";
        circle.style.backgroundColor = "black";
    }
</script>
 -->
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
                    <textarea id="CopyB2" readonly
                        class="relative resize-none h-40 w-full rounded-lg px-2 text-xs outline-none">
<!-- 
<body>
<button onclick="myFunction1()">100px</button>
<button onclick="myFunction2()">200px</button>
<button onclick="myFunction3()">300px</button>
<button onclick="myFunction4()">400px</button>
<button onclick="myFunctionR()">Reset</button>
<input type="number" value="50" id="input" onchange="myFunction()">
<div id="circle"></div>
</body>
 -->
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
            <p class="text-center border-b-2 font-bold">Hoofdletters
                <ShortToggleSwitch @click="toggleDivC" class="float-right" />
            </p>
            <div :style="{ display: DivC ? 'inline-block' : 'none' }" id="a1">
                <Hoofdletters />
            </div>
            <div class="grid grid-cols-2 text-center" :style="{ display: !DivC ? '' : 'none' }" id="a2">
                <div class="p-2">
                    <p>Javascript</p>
                    <textarea id="CopyC1" readonly
                        class="relative resize-none h-40 w-full overflow rounded-lg px-2 text-xs outline-none">
<!-- 
<script>
            function myFunction1() {
                console.log("het werkt1")
                let a = document.getElementById("input1").value
                let result = a.toUpperCase();     
                document.getElementById("output1").innerHTML = result; 
            }
            function myFunction2() {
                console.log("het werkt2")
                let b = document.getElementById("input2").value
                let result = b.toLowerCase();     
                document.getElementById("output2").innerHTML = result; 
            }
            function myFunction3() {
                console.log("het werkt3")
                let c = document.getElementById("input3").value
                let result = c.charAt(0).toUpperCase() + c.slice(1);
                document.getElementById("output3").innerHTML = result;
            }
            const input4 = document.getElementById('input4');
        const output4 = document.getElementById('output4');

        const myFunction4 = () => {
            const a = input4.value;
            let result = "";
            const words = a.split(" ");

            for (let i = 0; i < words.length; i++) {
                result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
                result += " ";
            }

            output4.textContent = result.trim(); 
        };
            function myFunction5() {
                console.log("het werkt5")
                let e = document.getElementById("input5").value
                let result = e;
                document.getElementById("output5").innerHTML = result;
            }
            
        const input6 = document.getElementById('input6');
        const output6 = document.getElementById('output6');
        let selectedOption = 'myFunction1'; // Initial default value

        const updateSelectedOption = () => {
            selectedOption = document.getElementById('selectOption').value;
        };

        const myFunction6 = () => {
            const inputValue = input6.value;
            let result = '';

            switch (selectedOption) {
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

            output6.textContent = result;
        };
            function myFunctionz() {
                console.log("het werktz")
                document.getElementById("button").innerHTML = myFunction1(),myFunction2(),myFunction3(),myFunction4(),myFunction5();
            }
        </script>
 -->
    </textarea>
                    <button @click="CopyC1"
                        class="button relative rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        copy this code
                        <i v-if="isCopiedC1" class="fa-solid fa-check text-green-500"></i>
                        <i v-else class="fa-regular fa-copy fa-xl"></i>
                    </button>
                </div>
                <div class="p-2">
                    <p>HTML</p>
                    <textarea id="CopyC2" readonly
                        class="relative resize-none h-40 w-full rounded-lg px-2 text-xs outline-none">
<!-- 
<body>
        <div id="container">
        <div id="intro">
            <p id="rood">red: Alles Hoofdletter</p>
            <p id="blauw">blue: Alles kleine letters</p>
            <p id="groen">green: Eerste letter Hoofdletter</p>
            <p id="paars">purple: Alle worden</p>
            <p id="orange">orange: Geen Function/Standaart function</p>
            <p id="salmon">Knop: Om alles tergelijk in de inputs te krijgen</p>
        </div>
        <div id="div1">
            <input id="input1" type="text">
            <button onclick="myFunction1()">text1</button>
            <p id="output1"></p>
        </div>

        <div id="div2">
            <input id="input2" type="text">
            <button onclick="myFunction2()">text2</button>
            <p id="output2"></p>
        </div>

        <div id="div3">
            <input id="input3" type="text">
            <button onclick="myFunction3()">text3</button>
            <p id="output3"></p>
        </div>

        <div id="div4">
            <input id="input4" type="text">
            <button onclick="myFunction4()">text4</button>
            <p id="output4"></p>
        </div>

        <div id="div5">
            <input id="input5" type="text">
            <button onclick="myFunction5()">text5</button>
        <p id="output5"></p>
        </div>

        <div id="divy">
            <input id="inputy" type="text">
            <select id="select" name="select">
                <option value="myFunction1" id="option1" onclick="myFunction1()">Red</option>
                <option value="myFunction2" id="option2" onclick="myFunction2()">Blue</option>
                <option value="myFunction3" id="option3" onclick="myFunction3()">Green</option>
                <option value="myFunction4" id="option4" onclick="myFunction4()">Purple</option>
                <option value="myFunction5" id="option5" onclick="myFunction5()">Orange</option>
            </select>
            <button onclick="myFunctiony()">texty</button>
        <p id="outputy"></p>
        </div>

        <div id="divz">
            <button id="button" onclick="myFunctionz()">textz</button>
        </div>
        </div>
    </body>
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
            <p class="text-center border-b-2 font-bold">Leeftijd
                <ShortToggleSwitch @click="toggleDivD" class="float-right" />
            </p>
            <div :style="{ display: DivD ? 'inline-block' : 'none' }" id="a1">
                <Jaartal />
            </div>
            <div class="grid grid-cols-2 text-center" :style="{ display: !DivD ? '' : 'none' }" id="a2">
                <div class="p-2">
                    <p>Javascript</p>
                    <textarea id="CopyD1" readonly
                        class="relative resize-none h-40 w-full overflow rounded-lg px-2 text-xs outline-none">
<!-- 
<script>
            function myFunction() {
                let leeftijd = document.getElementById("input").value*1
                let resulta = leeftijd
                let naam = document.getElementById("input1").value
                let resultb = naam
                // let select = document.getElementById("select").value
                // let resultc = select
                let zestien = 16
                let vijftig = 50
                let zevenenzestig = 67
                let hondert = 100
                let z16 = leeftijd - zestien
                let z50 = vijftig -  leeftijd
                let z67 = zevenenzestig - leeftijd
                let z100 = hondert - leeftijd
                document.getElementById("output").innerHTML = "Mijn naam is: " + naam + " en ik ben " + leeftijd + " jaar. Jij bent " + z16 + " jaar ouder dan " + zestien;
                document.getElementById("output1").innerHTML = "Mijn naam is: " + naam + " en ik ben " + leeftijd + " jaar. Jij bent " + z50 + " jaar jonger dan " + vijftig;
                document.getElementById("output2").innerHTML = "Mijn naam is: " + naam + " en ik ben " + leeftijd + " jaar. Nog " + z67 + " jaar dan ben je " + zevenenzestig;
                document.getElementById("output3").innerHTML = "Mijn naam is: " + naam + " en ik ben " + leeftijd + " jaar. Nog " + z100 + " jaar dan ben je " + hondert;
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
            <p class="text-center border-b-2 font-bold">Input-Output
                <ShortToggleSwitch @click="toggleDivE" class="float-right" />
            </p>
            <div :style="{ display: DivE ? 'inline-block' : 'none' }" id="a1">
                <Input_Output />
            </div>
            <div class="grid grid-cols-2 text-center" :style="{ display: !DivE ? '' : 'none' }" id="a2">
                <div class="p-2">
                    <p>Javascript</p>
                    <textarea id="CopyE1" readonly
                        class="relative resize-none h-40 w-full overflow rounded-lg px-2 text-xs outline-none">
<!-- 
<script>
    function myFunction() {
        let a = document.getElementById("input").value 
        document.getElementById("output").innerHTML = a 
        }
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











        <div @mousemove="hover"
            class="button grid grid-col m-auto mb-5 p-2 w-2/3 backdrop-blur-3xl rounded-3xl border-white border-2">
            <p class="text-center border-b-2 font-bold">Mail_Username
                <ShortToggleSwitch @click="toggleDivF" class="float-right" />
            </p>
            <div :style="{ display: DivF ? 'inline-block' : 'none' }" id="a1">
                <mail_username />
            </div>
            <div class="grid grid-cols-2 text-center" :style="{ display: !DivF ? '' : 'none' }" id="a2">
                <div class="p-2">
                    <p>Javascript</p>
                    <textarea id="CopyF1" readonly
                        class="relative resize-none h-40 w-full overflow rounded-lg px-2 text-xs outline-none">
<!-- 
<script>

        function myFunctionKnop() {
            let email = document.getElementById("email1").value;

            let parts = email.split("@");
            let beforeDot = parts[0].split(".")[0];
            let betweenDotAndAt = parts[0].split(".")[1];
            let afterAt = parts[1];

            document.getElementById("output1").innerHTML = beforeDot;
            document.getElementById("output2").innerHTML = betweenDotAndAt;
            document.getElementById("output3").innerHTML = afterAt;
        }
    </script>
 -->
    </textarea>
                    <button @click="CopyF1"
                        class="relative rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        copy this code
                        <i v-if="isCopiedF1" class="fa-solid fa-check text-green-500"></i>
                        <i v-else class="fa-regular fa-copy fa-xl"></i>
                    </button>
                </div>
                <div class="p-2">
                    <p>HTML</p>
                    <textarea id="CopyF2" readonly
                        class="relative resize-none h-40 w-full rounded-lg px-2 text-xs outline-none">
<!-- 
<body>
    <div id="container">
        <label id="label">Email:</label>
        <input onfocus="myFunctionOnFucus()" onblur="myFunctionOnBlur()" placeholder="name.backname@gmail.com"
            id="email1" type="email">
        <button onclick="myFunctionKnop()" id="submit" type="submit">knop</button>
        <label>Voornaam</label>
        <p id="output1"></p>
        <label>Achternaam</label>
        <p id="output2"></p>
        <label>Provider</label>
        <p id="output3"></p>
    </div>

    <div id="message">
        <p id="punt">De Email moet een "punt" bevatten, tussen je voornaam en achternaam</p>
        <p id="letter">De Email moet een "@" bevatten, en een provider</p>
    </div>
</body>
 -->
    </textarea>
                    <button @click="CopyF2"
                        class="relative rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        copy this code
                        <i v-if="isCopiedF2" class="fa-solid fa-check text-green-500"></i>
                        <i v-else class="fa-regular fa-copy fa-xl"></i>
                    </button>
                </div>
            </div>
        </div>





        <div @mousemove="hover"
            class="button grid grid-col m-auto mb-5 p-2 w-2/3 backdrop-blur-3xl rounded-3xl border-white border-2">
            <p class="text-center border-b-2 font-bold">Tafels
                <ShortToggleSwitch @click="toggleDivG" class="float-right" />
            </p>
            <div :style="{ display: DivG ? 'inline-block' : 'none' }" id="a1">
                <Tafels />
            </div>
            <div class="grid grid-cols-2 text-center" :style="{ display: !DivG ? '' : 'none' }" id="a2">
                <div class="p-2">
                    <p>Javascript</p>
                    <textarea id="CopyG1" readonly
                        class="relative resize-none h-40 w-full overflow rounded-lg px-2 text-xs outline-none">
<!-- 
<script>
    function myFunctionTest(){
        var table = document.getElementById("table");
        var number = document.getElementById("input").value;

        if(number == null || number == "");
            for(i=1; i<=10; i++){
                table += '<tr><td>' + number + '*' + i + '=' + number*i +"<hr>"+"<br>";
            }


        number1 = document.getElementById("input").value;
        document.getElementById("demo").innerHTML = table;
    }
</script>
 -->
    </textarea>
                    <button @click="CopyG1"
                        class="relative rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        copy this code
                        <i v-if="isCopiedG1" class="fa-solid fa-check text-green-500"></i>
                        <i v-else class="fa-regular fa-copy fa-xl"></i>
                    </button>
                </div>
                <div class="p-2">
                    <p>HTML</p>
                    <textarea id="CopyG2" readonly
                        class="relative resize-none h-40 w-full rounded-lg px-2 text-xs outline-none">
<!-- 
<div id="container">
    <h1>Tafels</h1>
    <label>Voer een Nummer in: <input id="input" type="number"></label>
    <button onclick="myFunctionTest()">Andwoord</button>
    <div id="demo"></div>
</div>
 -->
    </textarea>
                    <button @click="CopyG2"
                        class="relative rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        copy this code
                        <i v-if="isCopiedG2" class="fa-solid fa-check text-green-500"></i>
                        <i v-else class="fa-regular fa-copy fa-xl"></i>
                    </button>
                </div>
            </div>
        </div>







        <div @mousemove="hover"
            class="button grid grid-col m-auto mb-5 p-2 w-2/3 backdrop-blur-3xl rounded-3xl border-white border-2">
            <p class="text-center border-b-2 font-bold">Stopwatch
                <ShortToggleSwitch disabled @click="toggleDivG" class="float-right opacity-50" />
            </p>
            <div :style="{ display: DivH ? 'inline-block' : 'none' }" id="a1">
                <stopwatch />
            </div>
            <div class="grid grid-cols-2 text-center" :style="{ display: !DivH ? '' : 'none' }" id="a2">
                <div class="p-2">
                    <p>Javascript</p>
                    <textarea id="CopyH1" readonly
                        class="relative resize-none h-40 w-full overflow rounded-lg px-2 text-xs outline-none">
<!-- 

 -->
    </textarea>
                    <button @click="CopyH1">
                        copy this code
                        <i v-if="isCopiedH1" class="fa-solid fa-check text-green-500"></i>
                        <i v-else class="fa-regular fa-copy fa-xl"></i>
                    </button>
                </div>
                <div class="p-2">
                    <p>HTML</p>
                    <textarea id="CopyH2" readonly
                        class="relative resize-none h-40 w-full rounded-lg px-2 text-xs outline-none">
<!-- 

 -->
    </textarea>
                    <button @click="CopyH2"
                        class="relative rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        copy this code
                        <i v-if="isCopiedH2" class="fa-solid fa-check text-green-500"></i>
                        <i v-else class="fa-regular fa-copy fa-xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ShortToggleSwitch from '@/components/ShortToggleSwitch.vue';
import { ref } from 'vue';


import array from '@/components/help/array.vue'
import CircleCss from '@/components/help/CircleCss.vue'
import Hoofdletters from '@/components/help/Hoofdletters.vue'
import Jaartal from '@/components/help/Jaartal.vue'
import Input_Output from '@/components/help/Input_Output.vue'
import Tafels from '@/components/help/Tafels.vue'
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







const DivG = ref(true);

const toggleDivG = () => {
    DivG.value = !DivG.value;
};

const isCopiedG1 = ref(false);
const CopyG1 = () => {
    const copyInput = document.getElementById('CopyG1');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopiedG1.value = true;
    setTimeout(() => {
        isCopiedG1.value = false;
    }, 1000);
};

const isCopiedG2 = ref(false);
const CopyG2 = () => {
    const copyInput = document.getElementById('CopyG2');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopiedG2.value = true;
    setTimeout(() => {
        isCopiedG2.value = false;
    }, 1000);
};




const DivH = ref(true);

const toggleDivH = () => {
    DivG.value = !DivG.value;
};

const isCopiedH1 = ref(false);
const CopyH1 = () => {
    const copyInput = document.getElementById('CopyG1');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopiedH1.value = true;
    setTimeout(() => {
        isCopiedH1.value = false;
    }, 1000);
};

const isCopiedH2 = ref(false);
const CopyH2 = () => {
    const copyInput = document.getElementById('CopyG2');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    isCopiedH2.value = true;
    setTimeout(() => {
        isCopiedH2.value = false;
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
        opacity: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.2s ease, height 0.2s ease;
        z-index: 0;
    }

    &:hover::before {
        --size: 200px;
    }
}
</style>