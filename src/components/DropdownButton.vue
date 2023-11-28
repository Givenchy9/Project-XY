<template>
    <div>
        <div class="grid grid-rows-3 w-96 m-auto rounded-2xl border-2 backdrop-blur-3xl">
            <!-- Title -->
            <p class="text-2xl text-center font-bold">Links</p>
            <!-- Dropdown -->
            <div class="flex justify-center items-center mb-10 z-100 relative">
                <!--Jaar1-->
                <div class="dropdown relative inline-block">
                    <button type="button"
                        class="relative inline-block inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">Jaar1</button>
                    <!--Jaar1/Semester-->
                    <div
                        class="dropdown-content hidden absolute min-w-40 shadow-2xl px-3 z-10 text-center overflow-auto h-80 w-56 bg-white">
                        <!--Jaar1/Semester/1-->
                        <div class="dropdownA relative inline-block border-y-2 w-full">
                            <p class="py-2 font-bold">
                                <i class="folder-jaar1-a1 pr-2 text-blue-400 fa-solid fa-folder"></i>
                                <i class="folder-jaar1-a2 pr-2 hidden text-blue-400 fa-regular fa-folder-open"></i>
                                Semester 1
                            </p>
                            <!--Jaar1/Semester/1/semester1-->
                            <div class="dropdown-contentA hidden min-w-40 px-3 py-2 border-t">
                                <a target="blanc" href="website/Year1/Semester1/Semester1.php"
                                    class="hover:text-orange-500"><i
                                        class="fa-solid fa-code text-orange-400 pr-2"></i>Semester1</a>
                            </div>
                        </div>
                        <!--Jaar1/Semester/2-->
                        <div class="dropdownA relative inline-block border-b-2 w-full">
                            <p class="py-2 font-bold">
                                <i class="folder-jaar1-a3 pr-2 text-blue-400 fa-solid fa-folder"></i>
                                <i class="folder-jaar1-a4 pr-2 hidden text-blue-400 fa-regular fa-folder-open"></i>
                                Semester 2
                            </p>
                            <!--Jaar1/Semester/2/Basis-->
                            <div class="dropdown-contentA hidden min-w-40">
                                <div class="dropdownA2 relative inline-block min-w-40 py-2 border-t w-full">
                                    <a class="font-bold text-gray-500">Basis</a>
                                    <div class='dropdown-contentA2 hidden min-w-40 px-3 text-left'>
                                        <p class="py-2 ">
                                            <a target="blanc" href="website/Year1/Semester2/Basis/Array.php"
                                                class="hover:text-orange-400"><i
                                                    class="fa-solid fa-code text-orange-500 pr-2"></i>Array</a>
                                        </p>
                                        <p class="py-2 ">
                                            <a target="blanc" href="website/Year1/Semester2/Basis/Circle.html"
                                                class="hover:text-orange-400"><i
                                                    class="fa-solid fa-code text-orange-500 pr-2"></i>Circle</a>
                                        </p>
                                        <p class="py-2 ">
                                            <a target="blanc" href="website/Year1/Semester2/Basis/Hoofdletters.php"
                                                class="hover:text-orange-400"><i
                                                    class="fa-solid fa-code text-orange-500 pr-2"></i>Hoofdletters</a>
                                        </p>
                                        <p class="py-2 ">
                                            <a target="blanc" href="website/Year1/Semester2/Basis/leeftijd.html"
                                                class="hover:text-orange-400"><i
                                                    class="fa-solid fa-code text-orange-500 pr-2"></i>Leeftijd</a>
                                        </p>
                                        <p class="py-2 ">
                                            <a target="blanc" href="website/Year1/Semester2/Basis/leeftijdgrenzen.html"
                                                class="hover:text-orange-400"><i
                                                    class="fa-solid fa-code text-orange-500 pr-2"></i>Input to Output</a>
                                        </p>
                                        <p class="py-2 ">
                                            <a target="blanc" href="website/Year1/Semester2/Basis/Mail-Username.html"
                                                class="hover:text-orange-400"><i
                                                    class="fa-solid fa-code text-orange-500 pr-2"></i>Mail to Username</a>
                                        </p>
                                    </div>
                                </div><br>
                                <!--Jaar1/Semester/2/Frontend-->
                                <div class="dropdownA2 relative inline-block w-40 py-2 border w-full">
                                    <a class="font-bold text-gray-500">Frontend</a>
                                    <div class='dropdown-contentA2 hidden min-w-40 px-3 py-2 text-left'>
                                        <p class="py-2 ">
                                            <a target="blanc"
                                                href="website/Year1/Semester2/FRONTEND/Afbeeldingen/Afbeeldingen.html"
                                                class="hover:text-orange-400"><i
                                                    class="fa-solid fa-code text-orange-500 pr-2"></i>Afbeeldingen</a>
                                        </p>
                                        <p class="py-2 ">
                                            <a target="blanc"
                                                href="website/Year1/Semester2/FRONTEND/ColorGame/ColorGame.html"
                                                class="hover:text-orange-400"><i class="fa-solid fa-lock pr-2"></i>Color
                                                Game</a>
                                        </p>
                                        <p class="py-2 ">
                                            <a target="blanc"
                                                href="website/Year1/Semester2/FRONTEND/eerstewebsite/eerstewebsite1.html"
                                                class="hover:text-orange-400"><i
                                                    class="fa-solid fa-code text-orange-500 pr-2"></i>Eerste Website</a>
                                        </p>
                                        <p class="py-2 ">
                                            <a target="blanc"
                                                href="website/Year1/Semester2/FRONTEND/Stopwatch/Stopwatch.html"
                                                class="hover:text-orange-400"><i
                                                    class="fa-solid fa-code text-orange-500 pr-2"></i>Stopwatch (zie ook
                                                casino.html)</a>
                                        </p>
                                        <p class="py-2 ">
                                            <a target="blanc"
                                                href="website/Year1/Semester2/FRONTEND/Tabellen/TabellenRace.html"
                                                class="hover:text-orange-400"><i
                                                    class="fa-solid fa-code text-orange-500 pr-2"></i>Tabellen</a>
                                        </p>
                                        <p class="py-2 ">
                                            <a target="blanc" href="website/Year1/Semester2/FRONTEND/Tafels/Tafels.html"
                                                class="hover:text-orange-400"><i
                                                    class="fa-solid fa-code text-orange-500 pr-2"></i>Tafels</a>
                                        </p>
                                    </div>
                                </div><br>
                                <!--Jaar1/Semester/2/Games-->
                                <div class="dropdownA2 relative inline-block min-w-40 py-2 border-b w-full">
                                    <a class="font-bold text-gray-500">Games</a>
                                    <div class='dropdown-contentA2 hidden min-w-40 px-3 py-2'>
                                        <p class="py-2 ">
                                            <a target="blanc" href="website/Year1/Semester2/FRONTEND/Games/Game1.html"
                                                class="hover:text-orange-400"><i class="fa-solid fa-code pr-2"></i>Blok</a>
                                        </p>
                                        <p class="py-2 ">
                                            <a target="blanc" href="website/Year1/Semester2/FRONTEND/Games/interval.html"
                                                class="hover:text-orange-400"><i
                                                    class="fa-solid fa-code pr-2"></i>Intervall</a>
                                        </p>
                                    </div>
                                </div>
                                <!--Extra div anders werkt de map Games niet zo goed-->
                                <div class="dropdownA2 relative inline-block min-w-40 w-full">
                                    <a class="font-bold text-gray-500"></a>
                                    <div class='dropdown-contentA2 hidden min-w-40 px-3 py-2'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Jaar2-->
                <div class="dropdown relative inline-block">
                    <button type="button"
                        class="relative inline-block -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">Jaar2</button>
                    <!--Jaar2/Stage-->
                    <div
                        class="dropdown-content hidden absolute min-w-40 shadow-2xl px-3 z-10 text-center overflow-auto h-80 w-56 bg-white">
                        <div class="dropdownB relative inline-block border-y-2 w-full">
                            <p class="py-2 font-bold">
                                <i class="folder-jaar2-b1 pr-2 text-blue-400 fa-solid fa-folder"></i>
                                <i class="folder-jaar2-b2 pr-2 hidden text-blue-400 fa-regular fa-folder-open"></i>
                                Stage
                            </p>
                            <div class='dropdown-contentB hidden min-w-40 px-3 py-2 border-t text-left'>
                                <p class="py-2 ">
                                    <a href="website/Year2/Stage1/searchbar2.html" target="blanc"
                                        class="hover:text-orange-400"><i
                                            class="fa-solid fa-code text-orange-500 pr-2"></i>Searchbar</a>
                                </p>
                                <p class="py-2 ">
                                    <a href="website/Year2/Stage1/searchbar.html" target="blanc"
                                        class="hover:text-orange-400"><i class="fa-solid fa-lock pr-2"></i>Fuzzy search</a>
                                </p>
                                <p class="py-2 ">
                                    <a href="website/Year2/Stage1/toggledivs.html" target="blanc"
                                        class="hover:text-orange-400"><i
                                            class="fa-solid fa-code text-orange-500 pr-2"></i>ToggleDivs</a>
                                </p>
                                <p class="py-2 ">
                                    <a href="website/Year2/Stage1/copytext.html" target="blanc"
                                        class="hover:text-orange-400"><i
                                            class="fa-solid fa-code text-orange-500 pr-2"></i>Copy Text</a>
                                </p>
                                <p class="py-2 ">
                                    <a href="website/Year2/Stage1/maximum_inputs.html" target="blanc"
                                        class="hover:text-orange-400"><i
                                            class="fa-solid fa-code text-orange-500 pr-2"></i>Maximum Inputs</a>
                                </p>
                            </div>
                        </div>
                        <!--Jaar2/Semester2-->
                        <div class="dropdownB2 relative inline-block border-b-2 w-full opacity-40">
                            <p class="py-2 font-bold">
                                <i class="folder-jaar2-b3 pr-2 text-blue-400 fa-solid fa-folder"></i>
                                <i
                                    class="folder-jaar2-b4 pr-2 hidden text-blue-400 fa-solid fa-unlock-keyhole fa-bounce"></i>
                                Semester 2
                            </p>
                            <!-- <div class='dropdown-contentB2 hidden min-w-40 px-3 py-2 border-t'>
                                <p class="py-2 ">
                                    <a href="#" class="hover:text-orange-400"><i
                                            class="fa-solid fa-code text-orange-500 pr-2"></i>Array</a>
                                </p>
                                <p class="py-2 ">
                                    <a href="#" class="hover:text-orange-400"><i
                                            class="fa-solid fa-code text-orange-500 pr-2"></i>Circle</a>
                                </p>
                            </div> -->
                        </div>
                    </div>
                </div>
                <!-- <div class="dropdown relative inline-block"> -->
                <button type="button"
                    class="opacity-50 relative inline-block -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">Jaar3</button>
                <!-- <div class="dropdown-content none absolute min-w-40 shadow-2xl px-3 py-4 z-10 rounded-2xl rounded-tl text-center">
                <p>Jaar 3</p>
                </div>
                </div> -->
                <div class="dropdown relative inline-block">
                    <button type="button"
                        class=" relative inline-block -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">Extra</button>
                    <!--Extra/-->
                    <div
                        class="dropdown-content hidden absolute min-w-40 shadow-2xl px-3 z-10 text-center overflow-auto h-80 w-56 bg-white">
                        <!--Extra/Dropdown-->
                        <div class="dropdownA relative inline-block border-t-2 w-full">
                            <p class="py-2 font-bold">
                                <i class="folder-jaar1-a1 pr-2 text-blue-400 fa-solid fa-folder"></i>
                                <i class="folder-jaar1-a2 pr-2 hidden text-blue-400 fa-regular fa-folder-open"></i>
                                Javascript
                            </p>
                            <p class="dropdown-contentA hidden min-w-40 px-3 py-2 border-t text-left">
                                <a target="blanc" href="website/Extra/Javascript/Form/form1.html"
                                    class="hover:text-yellow-500"><i
                                        class="fa-brands fa-js text-yellow-500 pr-2"></i>Form</a>
                            </p>
                            <p class="dropdown-contentA hidden min-w-40 px-3 py-2 border-t text-left">
                                <a target="blanc" href="website/Extra/Javascript/Form Validate/FormZ.html"
                                    class="hover:text-yellow-500"><i
                                        class="fa-brands fa-js text-yellow-500 pr-2"></i>FormZ</a>
                            </p>
                            <p class="dropdown-contentA hidden min-w-40 px-3 py-2 border-t text-left">
                                <a target="blanc" href="website/Extra/Javascript/Input_value/input_value.html"
                                    class="hover:text-yellow-500"><i class="fa-brands fa-js text-yellow-500 pr-2"></i>Input
                                    Value</a>
                            </p>
                            <p class="dropdown-contentA hidden min-w-40 px-3 py-2 border-t text-left">
                                <a target="blanc" href="website/Extra/Javascript/Rekenmachiene/Rekenmachiene2.html"
                                    class="hover:text-yellow-500"><i
                                        class="fa-brands fa-js text-yellow-500 pr-2"></i>Rekenmachiene</a>
                            </p>
                        </div>
                        <div class="dropdownA relative inline-block border-y-2 w-full">
                            <p class="py-2 font-bold">
                                <i class="folder-jaar1-a1 pr-2 text-blue-400 fa-solid fa-folder"></i>
                                <i class="folder-jaar1-a2 pr-2 hidden text-blue-400 fa-regular fa-folder-open"></i>
                                PHP
                            </p>
                            <p class="dropdown-contentA hidden min-w-40 px-3 py-2 border-t text-left">
                                <a target="blanc" href="website/Extra/PHP/Login.php" class="hover:text-purple-500"><i
                                        class="fa-brands fa-php text-purple-500 pr-2"></i>Login</a>
                            </p>
                            <p class="dropdown-contentA hidden min-w-40 px-3 py-2 border-t text-left">
                                <a target="blanc" href="website/Extra/PHP/Logout.php" class="hover:text-purple-500"><i
                                        class="fa-brands fa-php text-purple-500 pr-2"></i>Logout</a>
                            </p>
                            <p class="dropdown-contentA hidden min-w-40 px-3 py-2 border-t text-left">
                                <a target="blanc" href="website/Extra/PHP/Signin.php" class="hover:text-purple-500"><i
                                        class="fa-brands fa-php text-purple-500 pr-2"></i>Signin</a>
                            </p>
                        </div>
                        <div class="dropdownA relative inline-block border-b-2 w-full">
                            <p class="py-2 font-bold">
                                <i class="folder-jaar1-a1 pr-2 text-blue-400 fa-solid fa-folder"></i>
                                <i class="folder-jaar1-a2 pr-2 hidden text-blue-400 fa-regular fa-folder-open"></i>
                                Vue
                            </p>
                            <p class="dropdown-contentA hidden min-w-40 px-3 py-2 border-t text-left">
                                <a target="blanc" href="website/Extra/VUE/VUE3.vue" class="hover:text-green-500"><i
                                        class="fa-brands fa-vuejs text-green-500 pr-2"></i>VUE3</a>
                            </p>
                        </div>
                        <div class="dropdownA relative inline-block border-b-2 w-full">
                            <p class="py-2 font-bold">
                                <i class="folder-jaar1-a1 pr-2 text-blue-400 fa-solid fa-folder"></i>
                                <i class="folder-jaar1-a2 pr-2 hidden text-blue-400 fa-regular fa-folder-open"></i>
                                Database
                            </p>
                            <p class="dropdown-contentA hidden min-w-40 px-3 py-2 border-t text-left">
                                <a target="blanc" href="website/Extra/VUE/VUE3.vue" class="hover:text-orange-500"><i
                                        class="fa-brands fa-vuejs text-orange-500 pr-2"></i>Firebase</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Sub Title -->
            <p class="text-xl text-center text-gray-600">see all my projects in a seperate page</p>
        </div>
    </div>
</template>
  
<script>
</script>
<style>
.dropdown:hover {
    border: none;
}

.dropdown:hover .dropdown-content {
    display: block;
    padding: 0;
    margin-top: 0;
}





/* .dropdownA:hover {
    border: none;
} */

.dropdownA:hover .dropdown-contentA {
    display: block;
}

.dropdownA:hover .folder-jaar1-a1 {
    display: none;
}

.dropdownA:hover .folder-jaar1-a2 {
    display: inline-block;
}






/* .dropdownA2:hover {
    border: none;
} */

.dropdownA2:hover .dropdown-contentA2 {
    display: block;
}

.dropdownA:hover .folder-jaar1-a3 {
    display: none;
}

.dropdownA:hover .folder-jaar1-a4 {
    display: inline-block;
}




/* .dropdownB:hover {
    border: none;
} */

.dropdownB:hover .dropdown-contentB {
    display: block;
}

.dropdownB:hover .folder-jaar2-b1 {
    display: none;
}

.dropdownB:hover .folder-jaar2-b2 {
    display: inline-block;
}




/* .dropdownB2:hover {
    border: none;
} */

.dropdownB2:hover .dropdown-contentB2 {
    display: block;
}

.dropdownB2:hover .folder-jaar2-b3 {
    display: none;
}

.dropdownB2:hover .folder-jaar2-b4 {
    display: inline-block;
}
</style>