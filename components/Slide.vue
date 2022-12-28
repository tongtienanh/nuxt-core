<template>
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
  <div class="new game my-4 mb-4">
    <div class="flex justify-between items-center mt-4">
        <h2 class="text-white font-inter">Game mới</h2>
        <span class="font-inter font-[12px] text-sky-500 cursor-pointer hover:underline" style="font-size: 13px">Hiện tất cả</span>
    </div>
  <div class="mt-1 grid gird-container">
    <div class="item-moi bg-[#282828] p-4" style="border-radius: 6px; transition: background-color .3s ease;">
      <div>
          <div class="mb-4 relative">
            <div class="container-picture relative">
              <div>
                <img src="https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7?h=854&resize=1&w=640" alt="">
              </div>
              <div class="button-down h-[32px] w-[32px] rounded-full bg-[#082032] flex justify-center items-center absolute hidden" style="bottom: 8px; right: 10px;">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="" style="color: #FF4C29; width:20px;height: 20px">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                </span>
              </div>
            </div>
          </div>
          <div>
            <a href="#" class="game-name text-white font-[16px]" style="font-weight: 700">God of war</a>
            <div class="flex flex-wrap">
                <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                <span class="mt-1.5 bg-[#712B75] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 font-inter">Giải đố</span>
                <span class="mt-1.5 bg-[#46244C] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 font-inter">Phiêu lưu</span>
            </div>
          </div>
      </div>
    </div>
    <div class="item-moi bg-[#282828] p-4" style="border-radius: 6px; transition: background-color .3s ease;">
      <div>
          <div class="mb-4 relative">
            <div class="container-picture relative">
              <div>
                <img src="https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7?h=854&resize=1&w=640" alt="">
              </div>
              <div class="button-down h-[32px] w-[32px] rounded-full bg-[#082032] flex justify-center items-center absolute hidden" style="bottom: 8px; right: 10px;">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="" style="color: #FF4C29; width:20px;height: 20px">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                </span>
              </div>
            </div>
          </div>
          <div>
            <a href="#" class="game-name text-white font-[16px]" style="font-weight: 700">God of war</a>
            <div class="flex flex-wrap">
                <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                <span class="mt-1.5 bg-[#712B75] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 font-inter">Giải đố</span>
                <span class="mt-1.5 bg-[#46244C] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 font-inter">Phiêu lưu</span>
            </div>
          </div>
      </div>
    </div>
    <div class="item-moi bg-[#282828] p-4" style="border-radius: 6px; transition: background-color .3s ease;">
      <div>
          <div class="mb-4 relative">
            <div class="container-picture relative">
              <div>
                <img src="https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7?h=854&resize=1&w=640" alt="">
              </div>
              <div class="button-down h-[32px] w-[32px] rounded-full bg-[#082032] flex justify-center items-center absolute hidden" style="bottom: 8px; right: 10px;">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="" style="color: #FF4C29; width:20px;height: 20px">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                </span>
              </div>
            </div>
          </div>
          <div>
            <a href="#" class="game-name text-white font-[16px]" style="font-weight: 700">God of war</a>
            <div class="flex flex-wrap">
                <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                <span class="mt-1.5 bg-[#712B75] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 font-inter">Giải đố</span>
                <span class="mt-1.5 bg-[#46244C] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 font-inter">Phiêu lưu</span>
            </div>
          </div>
      </div>
    </div>
    <div class="item-moi bg-[#282828] p-4" style="border-radius: 6px; transition: background-color .3s ease;">
      <div>
          <div class="mb-4 relative">
            <div class="container-picture relative">
              <div>
                <img src="https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7?h=854&resize=1&w=640" alt="">
              </div>
              <div class="button-down h-[32px] w-[32px] rounded-full bg-[#082032] flex justify-center items-center absolute hidden" style="bottom: 8px; right: 10px;">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="" style="color: #FF4C29; width:20px;height: 20px">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                </span>
              </div>
            </div>
          </div>
          <div>
            <a href="#" class="game-name text-white font-[16px]" style="font-weight: 700">God of war</a>
            <div class="flex flex-wrap">
                <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                <span class="mt-1.5 bg-[#712B75] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 font-inter">Giải đố</span>
                <span class="mt-1.5 bg-[#46244C] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 font-inter">Phiêu lưu</span>
            </div>
          </div>
      </div>
    </div>
    <div class="item-moi bg-[#282828] p-4" style="border-radius: 6px; transition: background-color .3s ease;">
      <div>
          <div class="mb-4 relative">
            <div class="container-picture relative">
              <div>
                <img src="https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7?h=854&resize=1&w=640" alt="">
              </div>
              <div class="button-down h-[32px] w-[32px] rounded-full bg-[#082032] flex justify-center items-center absolute hidden" style="bottom: 8px; right: 10px;">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="" style="color: #FF4C29; width:20px;height: 20px">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                </span>
              </div>
            </div>
          </div>
          <div>
            <a href="#" class="game-name text-white font-[16px]" style="font-weight: 700">God of war</a>
            <div class="flex flex-wrap">
                <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                <span class="mt-1.5 bg-[#712B75] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 font-inter">Giải đố</span>
                <span class="mt-1.5 bg-[#46244C] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900 font-inter">Phiêu lưu</span>
            </div>
          </div>
      </div>
    </div>
  </div>
  <ul class="flex mt-4 update-game">
    <li class="update-game_item px-3">
        <div>
            <div class="flex justify-between items-center mb-[10px]">
                <h2 class="font-inter">Game update</h2>
                <a href="">
                    <span class="font-inter hover:underline text-sky-500 cursor-pointer" style="font-size: 13px">Hiển thị thêm</span>
                </a>
            </div>
            <ul class="flex flex-col ">
                <li class="mt-4" style="width: 100%">
                    <div>
                        <a href="">
                            <div class="flex items-center hover:bg-[#2C394B]  hover:rounded-2xl">
                                <div class="w-[96px] h-auto mr-[15px]">
                                    <img class="css-1jk123r" alt="Fortnite" src="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-animated="animated" data-image="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-testid="lazy-image-observer">
                                </div>
                                <div>
                                    <span class="font-inter">EA SPORTS™ FIFA 23 Standard Edition</span>
                                  <div class="text-[#ccc] mt-2" style="font-size: 13px;">Phát hành: 22/08/2013</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="mt-4" style="width: 100%">
                <div>
                  <a href="">
                    <div class="flex items-center hover:bg-[#2C394B]  hover:rounded-2xl">
                      <div class="w-[96px] h-auto mr-[15px]">
                        <img class="css-1jk123r" alt="Fortnite" src="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-animated="animated" data-image="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-testid="lazy-image-observer">
                      </div>
                      <div>
                        <span class="font-inter">EA SPORTS™ FIFA 23 Standard Edition</span>
                        <div class="text-[#ccc] mt-2" style="font-size: 13px;">Phát hành: 22/08/2013</div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
                <li class="mt-4" style="width: 100%">
                <div>
                  <a href="">
                    <div class="flex items-center hover:bg-[#2C394B]  hover:rounded-2xl">
                      <div class="w-[96px] h-auto mr-[15px]">
                        <img class="css-1jk123r" alt="Fortnite" src="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-animated="animated" data-image="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-testid="lazy-image-observer">
                      </div>
                      <div>
                        <span class="font-inter">EA SPORTS™ FIFA 23 Standard Edition</span>
                        <div class="text-[#ccc] mt-2" style="font-size: 13px;">Phát hành: 22/08/2013</div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
        </div>
    </li>
    <li class="update-game_item px-3">
      <div>
        <div class="flex justify-between items-center mb-[10px]">
          <h2 class="font-inter">Game update</h2>
          <a href="">
            <span class="font-inter hover:underline text-sky-500 cursor-pointer" style="font-size: 13px">Hiển thị thêm</span>
          </a>
        </div>
        <ul class="flex flex-col ">
          <li class="mt-4" style="width: 100%">
            <div>
              <a href="">
                <div class="flex items-center hover:bg-[#2C394B]  hover:rounded-2xl">
                  <div class="w-[96px] h-auto mr-[15px]">
                    <img class="css-1jk123r" alt="Fortnite" src="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-animated="animated" data-image="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-testid="lazy-image-observer">
                  </div>
                  <div>
                    <span class="font-inter">EA SPORTS™ FIFA 23 Standard Edition</span>
                    <div class="text-[#ccc] mt-2" style="font-size: 13px;">Phát hành: 22/08/2013</div>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li class="mt-4" style="width: 100%">
            <div>
              <a href="">
                <div class="flex items-center hover:bg-[#2C394B]  hover:rounded-2xl">
                  <div class="w-[96px] h-auto mr-[15px]">
                    <img class="css-1jk123r" alt="Fortnite" src="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-animated="animated" data-image="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-testid="lazy-image-observer">
                  </div>
                  <div>
                    <span class="font-inter">EA SPORTS™ FIFA 23 Standard Edition</span>
                    <div class="text-[#ccc] mt-2" style="font-size: 13px;">Phát hành: 22/08/2013</div>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li class="mt-4" style="width: 100%">
            <div>
              <a href="">
                <div class="flex items-center hover:bg-[#2C394B]  hover:rounded-2xl">
                  <div class="w-[96px] h-auto mr-[15px]">
                    <img class="css-1jk123r" alt="Fortnite" src="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-animated="animated" data-image="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-testid="lazy-image-observer">
                  </div>
                  <div>
                    <span class="font-inter">EA SPORTS™ FIFA 23 Standard Edition</span>
                    <div class="text-[#ccc] mt-2" style="font-size: 13px;">Phát hành: 22/08/2013</div>
                  </div>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </li>
    <li class="update-game_item px-3">
      <div>
        <div class="flex justify-between items-center mb-[10px]">
          <h2 class="font-inter">Game update</h2>
          <a href="">
            <span class="font-inter hover:underline text-sky-500 cursor-pointer" style="font-size: 13px">Hiển thị thêm</span>
          </a>
        </div>
        <ul class="flex flex-col ">
          <li class="mt-4" style="width: 100%">
            <div>
              <a href="">
                <div class="flex items-center hover:bg-[#2C394B]  hover:rounded-2xl">
                  <div class="w-[96px] h-auto mr-[15px]">
                    <img class="css-1jk123r" alt="Fortnite" src="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-animated="animated" data-image="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-testid="lazy-image-observer">
                  </div>
                  <div>
                    <span class="font-inter">EA SPORTS™ FIFA 23 Standard Edition</span>
                    <div class="text-[#ccc] mt-2" style="font-size: 13px;">Phát hành: 22/08/2013</div>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li class="mt-4" style="width: 100%">
            <div>
              <a href="">
                <div class="flex items-center hover:bg-[#2C394B]  hover:rounded-2xl">
                  <div class="w-[96px] h-auto mr-[15px]">
                    <img class="css-1jk123r" alt="Fortnite" src="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-animated="animated" data-image="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-testid="lazy-image-observer">
                  </div>
                  <div>
                    <span class="font-inter">EA SPORTS™ FIFA 23 Standard Edition</span>
                    <div class="text-[#ccc] mt-2" style="font-size: 13px;">Phát hành: 22/08/2013</div>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li class="mt-4" style="width: 100%">
            <div>
              <a href="">
                <div class="flex items-center hover:bg-[#2C394B]  hover:rounded-2xl">
                  <div class="w-[96px] h-auto mr-[15px]">
                    <img class="css-1jk123r" alt="Fortnite" src="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-animated="animated" data-image="https://cdn1.epicgames.com/offer/fn/23BR_C4S1_EGS_Launcher_Blade_1200x1600_1200x1600-708ad0c7e0813b60cb2fda3e24e39401?h=480&amp;resize=1&amp;w=360" data-testid="lazy-image-observer">
                  </div>
                  <div>
                    <span class="font-inter">EA SPORTS™ FIFA 23 Standard Edition</span>
                    <div class="text-[#ccc] mt-2" style="font-size: 13px;">Phát hành: 22/08/2013</div>
                  </div>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </li>
  </ul>
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
.container-picture {
    border-radius: 6px;
    -webkit-box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
    box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
    position: relative;
    width: 100%;
}
.item-moi {
    height: fit-content;
}
item-moi .img {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
.item-moi:hover {
    background: #2C394B;
}
.game-name {
  display: inline-block;
  max-width: 100%;
  vertical-align: middle;
}
.gird-container {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 17px;
}
.container-picture:hover .button-down {
    display: flex;
}
.update-game li {
    width: calc(100% / 3);
}
.update-game .update-game_item {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
