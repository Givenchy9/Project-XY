<template>
    <div>
        <div class="grid grid-rows-3 w-96 m-auto rounded-2xl border-2 backdrop-blur-3xl">
            <!-- Title -->
            <p class="text-2xl text-center font-bold">Links</p>
            <!-- Sub Title -->
            <p class="text-xl text-center text-gray-600">see all my projects in a seperate page</p>
            <!-- Dropdown -->
            <div class="flex justify-center items-center mb-10">
                <!--Jaar1-->
                <div class="dropdown relative inline-block">
                    <button type="button"
                        class="jaar1 relative inline-block inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">Jaar1</button>
                    <!--Jaar1/Semester-->
                    <div class="dropdown-content hidden absolute min-w-40 shadow-2xl px-3 z-10 text-center">
                        <!--Jaar1/Semester/1-->
                        <div class="dropdownA relative inline-block border-y w-40">
                            <p class="py-2 font-bold">
                                <i class="folder-jaar1-a1 pr-2 text-blue-400 fa-solid fa-folder"></i>
                                <i class="folder-jaar1-a2 pr-2 hidden text-blue-400 fa-regular fa-folder-open"></i>
                                Semester 1
                            </p>
                            <div class="dropdown-contentA hidden min-w-40 px-3 py-2 border-t">
                                <a>Semester1</a>
                            </div>
                        </div>
                        <!--Jaar1/Semester/1-->
                        <div class="dropdownA relative inline-block border-b w-full">
                            <p class="py-2 font-bold">
                                <i class="folder-jaar1-a3 pr-2 text-blue-400 fa-solid fa-folder"></i>
                                <i class="folder-jaar1-a4 pr-2 hidden text-blue-400 fa-regular fa-folder-open"></i>
                                Semester 2
                            </p>
                            <div class="dropdown-contentA dropdown-contentA hidden min-w-40 overflow-auto">
                                <div class="dropdownA2 relative inline-block min-w-40 py-2 border-t w-full">
                                    <a class="font-bold text-gray-500">Basis</a>
                                    <div class='dropdown-contentA2 hidden min-w-40 px-3 py-2'>
                                        <a href="#" class="hover:text-blue-400">Array</a><br>
                                        <a href="#" class="hover:text-blue-400">Circle</a><br>
                                        <a href="#" class="hover:text-blue-400">Deelbaar</a><br>
                                        <a href="#" class="hover:text-blue-400">GeheimSchrijver</a><br>
                                        <a href="#" class="hover:text-blue-400">Hoofdletters</a><br>
                                        <a href="#" class="hover:text-blue-400">Leeftijd</a><br>
                                        <a href="#" class="hover:text-blue-400">Leeftijds Grens</a><br>
                                        <a href="#" class="hover:text-blue-400">Mail to Username</a><br>
                                    </div>
                                </div><br>
                                <div class="dropdownA2 relative inline-block w-40 py-2 border-y w-full">
                                    <a class="font-bold text-gray-500">Frontend</a>
                                    <div class='dropdown-contentA2 hidden min-w-40 px-3 py-2'>
                                        <a href="#" class="hover:text-blue-400">Afbeeldingen</a><br>
                                        <a href="#" class="hover:text-blue-400">Casino</a><br>
                                        <a href="#" class="hover:text-blue-400">Color Game</a><br>
                                        <a href="#" class="hover:text-blue-400">Eerste Website</a><br>
                                        <a href="#" class="hover:text-blue-400">Events</a><br>
                                        <a href="#" class="hover:text-blue-400">Input value</a><br>
                                        <a href="#" class="hover:text-blue-400">Tabellen</a><br>
                                        <a href="#" class="hover:text-blue-400">Tafels</a><br>
                                    </div>
                                </div><br>
                                <div class="dropdownA2 relative inline-block min-w-40 py-2 border-b w-full">
                                    <a class="font-bold text-gray-500">Games</a>
                                    <div class='dropdown-contentA2 hidden min-w-40 px-3 py-2'>
                                        <a href="#" class="hover:text-blue-400">Blok</a><br>
                                        <a href="#" class="hover:text-blue-400">Intervall</a>
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
                    <div
                        class="dropdown-content none absolute min-w-40 shadow-2xl px-3 py-4 z-10 rounded-2xl rounded-tl text-center">
                        <div class="dropdownB relative inline-block">
                            <p class="font-bold">Stage</p>
                            <div class='dropdown-contentB hidden min-w-40 px-3 py-2'>
                                <a href="#" class="hover:text-blue-400">Array</a><br>
                                <a href="#" class="hover:text-blue-400">Circle</a><br>
                            </div>
                        </div>
                        <p class="font-bold text-gray-200">Semester 2</p>
                    </div>
                </div>
                <!-- <div class="dropdown relative inline-block"> -->
                <button type="button"
                    class="opacity-80 relative inline-block -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">Jaar3</button>
                <!-- <div class="dropdown-content none absolute min-w-40 shadow-2xl px-3 py-4 z-10 rounded-2xl rounded-tl text-center">
                <p>Jaar 3</p>
                </div>
                </div> -->
                <div class="dropdown relative inline-block">
                    <button type="button"
                        class=" relative inline-block -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">Extra</button>
                    <div
                        class="dropdown-content none absolute min-w-40 shadow-2xl px-3 py-4 z-10 rounded-2xl rounded-tl text-center">
                        <p>Cartergories</p>
                    </div>
                </div>
            </div>
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






.dropdownA2:hover {
    border: none;
}

.dropdownA2:hover .dropdown-contentA2 {
    display: block;
}

.dropdownA:hover .folder-jaar1-a3 {
    display: none;
}

.dropdownA:hover .folder-jaar1-a4 {
    display: inline-block;
}




.dropdownB:hover {
    border: none;
}

.dropdownB:hover .dropdown-contentB {
    display: block;
}
</style>