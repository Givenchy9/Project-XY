<template>
  <main class="grid-rows-3 w-fit">
    <div class="grid-rows-3 h-40">
      <div class="flex justify-end h-1/5 bg-gray-300 grid grid-cols-2 border-b-2 border-red-500 position-absolute">
        <router-link to="homez"
          class="bg-gray-300 text-center w-32 m-auto hover:text-red-500 hover:border-t-2 border-red-500">Mijn
          site</router-link>
        <router-link to="homez"
          class="bg-gray-300 text-center w-32 m-auto hover:text-red-500 hover:border-t-2 border-red-500">Hardware
          Shop</router-link>
      </div>

      <div class="h-3/5 grid gap-8 grid-cols-3 bg-white w-full max-[750px]:grid-cols-3">
        <div><img class="h-24" src="src/components/img/logo.svg"></div>
        <div></div>
        <div class="grid grid-cols-3 pt-10">
          <div><i class="fa-solid fa-user fa-2xl hover:text-red-400"></i></div>
          <div><i class="fa-solid fa-star fa-2xl hover:text-red-400"></i></div>
          <div><i class="fa-solid fa-cart-shopping fa-2xl hover:text-red-400"></i></div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-gray-300 mx-auto px-4 sm:px-12 lg:px-96 relative">
        <div class="dropdown">
          <div class="border-red-500 text-center">Kleding</div>
          <div class="dropdown-content w-full">
            <div>
              <a href="#">Hello World!</a>
            </div>
            <div>
              <a href="#">Hello World!</a>
            </div>
            <div>
              <a href="#">Hello World!</a>
            </div>
            <div>
              <a href="#">Hello World!</a>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <div class="border-red-500 text-center">broeken</div>
          <div class="dropdown-content w-full">
            <div>
              <a href="#">Hello World!</a>
            </div>
            <div>
              <a href="#">Hello World!</a>
            </div>
            <div>
              <a href="#">Hello World!</a>
            </div>
            <div>
              <a href="#">Hello World!</a>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <div class="border-red-500 text-center">Accessories</div>
          <div class="dropdown-content w-full">
            <div>
              <a href="#">Hello World!</a>
            </div>
            <div>
              <a href="#">Hello World!</a>
            </div>
            <div>
              <a href="#">Hello World!</a>
            </div>
            <div>
              <a href="#">Hello World!</a>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <div class="border-red-500 text-center">World Cup</div>
          <div class="dropdown-content w-full">
            <div>
              <a href="#">Hello World!</a>
            </div>
            <div>
              <a href="#">Hello World!</a>
            </div>
            <div>
              <a href="#">Hello World!</a>
            </div>
            <div>
              <a href="#">Hello World!</a>
            </div>
          </div>
        </div>
        <!-- <div class="hover:border-t-2 border-red-500 hover:text-red-500 text-center">Broeken</div>
        <div class="hover:border-t-2 border-red-500 hover:text-red-500 text-center">Accessories</div>
        <div class="hover:border-t-2 border-red-500 hover:text-red-500 text-center">World cup</div> -->
        <div href="javascript:void(0);" class="hidden absolute" onclick="myFunction()">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>


    <div class="mb-20">
      <img class="m-auto h-100 w-3/4" src="src/components/img/worldcupwinners.png">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-300 mx-auto mt-20 w-full p-4">
        <a target="blank" href="https://www.ea.com/nl-nl/games/ea-sports-fc"
          class="text-blue-400 hover:border-b-2 border-blue-400 text-center p-2">
          <img class="mx-auto h-32 md:h-40 lg:h-80 hover:opacity-40" src="src/components/img/fifa24.avif" alt="EAFC24">
          <p class="font-bold">Win the EAFC24</p>
        </a>

        <a target="blank" href="https://www.instagram.com/erling.haaland/"
          class="text-blue-400 hover:border-b-2 border-blue-400 text-center p-2">
          <img class="mx-auto h-32 md:h-40 lg:h-80 hover:opacity-40" src="src/components/img/haaland.webp" alt="Haaland">
          <p class="font-bold">Meet and greet with Haaland</p>
        </a>

        <a target="blank"
          href="https://www.playstation.com/nl-nl/?emcid=pa-co-422294&gad=1&gclid=CjwKCAjw6p-oBhAYEiwAgg2PgtCOp0vukUqzfr-H0me7YYL0REY7Tu2YYXo0RSVYPtayB3LCxrPIuBoC2GMQAvD_BwE&gclsrc=aw.ds"
          class="text-blue-400 hover:border-b-2 border-blue-400 text-center p-2">
          <img class="mx-auto h-32 md:h-40 lg:h-80 hover:opacity-40" src="src/components/img/ps5.jpg" alt="Playstation">
          <p class="font-bold">Buy the new PlayStation</p>
        </a>

        <a target="blank" href="https://earlygame.com/fifa/ea-sports-fc-new-icons-3"
          class="text-blue-400 hover:border-b-2 border-blue-400 text-center p-2">
          <img class="mx-auto h-32 md:h-40 lg:h-80 hover:opacity-40" src="src/components/img/icons.png"
            alt="New Icons EAFC24">
          <p class="font-bold">New Icons EAFC24</p>
        </a>
      </div>


      <div class="grid gap-6 grid-cols-2 grid-flow-col bg-gray-300 m-auto mt-20">
        <a target="blanc" href="https://www.cristianoronaldo.com/#cr7"
          class="font-bold text-center duration-75 hover:opacity-40 hover:border-b-4 border-red-500"><img
            src="src/components/img/ronaldo.jpg">Ronaldo.com</a>
        <a target="blanc" href="https://www.neymarjr.com/en"
          class="font-bold text-center duration-75 hover:opacity-40 hover:border-b-4 border-red-500"><img
            src="src/components/img/neymar.jpg">Neymar.com</a>
      </div>
    </div>
    <div class="bg-black h-80">Footer</div>
  </main>
</template>

<script>

</script>

<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  margin-top: 2px;
  z-index: 1;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover {
  border-top: solid red 2px;
  color: red;
}
</style>