<template>
  <div class="search-block pt-10 pb-8 flex">
    <div class="css-trzy6k relative" aria-expanded="false">
        <button class="css-hv6xwv w-[20px] h-[20px] absolute text-white" style="top: 11px; left: 12px"><span class="css-1s62n5m" aria-hidden="true" data-testid="icon"><svg xmlns="http://www.w3.org/2000/svg" class="svg css-uwwqev" viewBox="0 0 21 20" preserveAspectRatio="xMidYMid meet"><g transform="scale(1 -1) rotate(-45 -11.93502884 -2)" stroke="currentColor" stroke-width="1.65" fill="none" fill-rule="evenodd"><circle cx="7.70710678" cy="7.70710678" r="7"></circle><path d="M15.2071068 8.62132034h5.6923881" stroke-linecap="square"></path></g></svg></span></button>
        <input class="css-w7sedp font-sans h-[40px] w-[230px] pl-10 bg-[#202020] text-[#F5F5F5]" data-testid="input-input" placeholder="Search store" value="" style="font-size: 11px;border-radius: 27px">
    </div>
    <ul class="flex items-center">
        <li class="text-[#F5F5F5] ml-5">
            <a href="#"><span class="text-[16px] text-[#F5F5F5]">Discover</span></a>
        </li>
        <li class="text-[#F5F5F5] ml-5">
            <a href="#"><span class="text-[16px] text-[#F5F5F5]">News</span></a>
        </li>
    </ul>
  </div>
  <div id="default-carousel" class="relative h-[614px]" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-full">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <span
          class="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800"
          >First Slide</span
        >
        <img
          src="https://vcdn1-dulich.vnecdn.net/2022/09/14/4-1663171508.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=S06yaNXNAEw5yuUNPbsJYA"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://vcdn1-dulich.vnecdn.net/2022/09/14/7-1663171465.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=h8Le5dwLusXpKrmsp_op5A"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="https://images.pexels.com/photos/21787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
    >
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      ></button>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
  <h3 class="text-white">Game mới</h3>
  <div>
    <div class="item-game w-[203px] h-[381px]">
        <div class="picture">
            <img src="https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7?h=854&resize=1&w=640" alt="">
        </div>
        <div class="description">
            <div>
                <span>BASE GAME</span>
            </div>
            <h3>Game of war</h3>
            <div class="flex justify-between">
                <div class="w-[52px] h-[25px] bg-blue" style="border-radius: 6px"></div>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
.input-search {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgb(245, 245, 245);
    width: 100%;
}
input:focus{
    outline: none;
}
</style>