<template>
  <div class="flex">
    <div class="left w-[80%] pr-[15px]">
      <div class="mb-4">
        <div @click="showFilter" class="font-inter text-[#F5F5F5] cursor-pointer inline-block flex items-center w-fit relative" style="font-size: 14px;">
          Show: New Release
          <span class="ml-1">
            <svg :class="{rotate: isShoFilter}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>

          </span>
        </div>
        <div v-if="isShoFilter" class="mt-[5p] py-[10px] absolute z-10 bg-[#202020]"
             style="border-radius: 3px;box-shadow: rgb(0 0 0 / 50%) 0px 2px 35px 0px; min-width: 150px; width: max-content;">
          <button class="filter-button text-zinc-500 font-inter action_filter" style="font-size: 13px">New Release
          </button>
          <button class="filter-button font-inter text-[#F5F5F599] action_filter" style="font-size: 13px;">New Release
          </button>
          <button class="filter-button font-inter text-[#F5F5F599] action_filter" style="font-size: 13px;">New Release
          </button>
          <button class="filter-button font-inter text-[#F5F5F599] action_filter" style="font-size: 13px;">New Release
          </button>
        </div>
      </div>
      <div class="">
        <ul class="grid list-items mb-8">
          <li class="items">
            <a href="" class="block">
              <div class="mb-[10px]">
                <div class="" style="border-radius: 4px">
                  <div>
                    <img src="https://cdn1.epicgames.com/spt-assets/f54480bb1c01475c9ca9319be920902f/sentinel-3-homeworld-l4zft.png?h=854&resize=1&w=640" alt="">
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-2">
                <h1 class="font-inter text-[#F5F5F5]" style="font-size: 18px;">Sentinel 3 - Homeworld</h1>
                <span class="font-inter" style="font-size: 13px;">Phát hành: 22/12/2077</span>
                  <div class="flex flex-wrap mb-2">
                    <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                    <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                </div>
              </div>
            </a>
          </li>
          <li class="items">
            <a href="" class="block">
              <div class="mb-[10px]">
                <div class="" style="border-radius: 4px">
                  <div>
                    <img src="https://cdn1.epicgames.com/spt-assets/f54480bb1c01475c9ca9319be920902f/sentinel-3-homeworld-l4zft.png?h=854&resize=1&w=640" alt="">
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-2">
                <h1 class="font-inter text-[#F5F5F5]" style="font-size: 18px;">Sentinel 3 - Homeworld</h1>
                <span class="font-inter" style="font-size: 13px;">Phát hành: 22/12/2077</span>
                <div class="flex flex-wrap mb-2">
                  <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                  <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                </div>
              </div>
            </a>
          </li>
          <li class="items">
            <a href="" class="block">
              <div class="mb-[10px]">
                <div class="" style="border-radius: 4px">
                  <div>
                    <img src="https://cdn1.epicgames.com/spt-assets/f54480bb1c01475c9ca9319be920902f/sentinel-3-homeworld-l4zft.png?h=854&resize=1&w=640" alt="">
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-2">
                <h1 class="font-inter text-[#F5F5F5]" style="font-size: 18px;">Sentinel 3 - Homeworld</h1>
                <span class="font-inter" style="font-size: 13px;">Phát hành: 22/12/2077</span>
                <div class="flex flex-wrap mb-2">
                  <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                  <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                </div>
              </div>
            </a>
          </li>
          <li class="items">
            <a href="" class="block">
              <div class="mb-[10px]">
                <div class="" style="border-radius: 4px">
                  <div>
                    <img src="https://cdn1.epicgames.com/spt-assets/f54480bb1c01475c9ca9319be920902f/sentinel-3-homeworld-l4zft.png?h=854&resize=1&w=640" alt="">
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-2">
                <h1 class="font-inter text-[#F5F5F5]" style="font-size: 18px;">Sentinel 3 - Homeworld</h1>
                <span class="font-inter" style="font-size: 13px;">Phát hành: 22/12/2077</span>
                <div class="flex flex-wrap mb-2">
                  <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                  <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                </div>
              </div>
            </a>
          </li>
          <li class="items">
            <a href="" class="block">
              <div class="mb-[10px]">
                <div class="" style="border-radius: 4px">
                  <div>
                    <img src="https://cdn1.epicgames.com/spt-assets/f54480bb1c01475c9ca9319be920902f/sentinel-3-homeworld-l4zft.png?h=854&resize=1&w=640" alt="">
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-2">
                <h1 class="font-inter text-[#F5F5F5]" style="font-size: 18px;">Sentinel 3 - Homeworld</h1>
                <span class="font-inter" style="font-size: 13px;">Phát hành: 22/12/2077</span>
                <div class="flex flex-wrap mb-2">
                  <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                  <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                </div>
              </div>
            </a>
          </li>
          <li class="items">
            <a href="" class="block">
              <div class="mb-[10px]">
                <div class="" style="border-radius: 4px">
                  <div>
                    <img src="https://cdn1.epicgames.com/spt-assets/f54480bb1c01475c9ca9319be920902f/sentinel-3-homeworld-l4zft.png?h=854&resize=1&w=640" alt="">
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-2">
                <h1 class="font-inter text-[#F5F5F5]" style="font-size: 18px;">Sentinel 3 - Homeworld</h1>
                <span class="font-inter" style="font-size: 13px;">Phát hành: 22/12/2077</span>
                <div class="flex flex-wrap mb-2">
                  <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                  <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                </div>
              </div>
            </a>
          </li>
          <li class="items">
            <a href="" class="block">
              <div class="mb-[10px]">
                <div class="" style="border-radius: 4px">
                  <div>
                    <img src="https://cdn1.epicgames.com/spt-assets/f54480bb1c01475c9ca9319be920902f/sentinel-3-homeworld-l4zft.png?h=854&resize=1&w=640" alt="">
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-2">
                <h1 class="font-inter text-[#F5F5F5]" style="font-size: 18px;">Sentinel 3 - Homeworld</h1>
                <span class="font-inter" style="font-size: 13px;">Phát hành: 22/12/2077</span>
                <div class="flex flex-wrap mb-2">
                  <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                  <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                </div>
              </div>
            </a>
          </li>
          <li class="items">
            <a href="" class="block">
              <div class="mb-[10px]">
                <div class="" style="border-radius: 4px">
                  <div>
                    <img src="https://cdn1.epicgames.com/spt-assets/f54480bb1c01475c9ca9319be920902f/sentinel-3-homeworld-l4zft.png?h=854&resize=1&w=640" alt="">
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-2">
                <h1 class="font-inter text-[#F5F5F5]" style="font-size: 18px;">Sentinel 3 - Homeworld</h1>
                <span class="font-inter" style="font-size: 13px;">Phát hành: 22/12/2077</span>
                <div class="flex flex-wrap mb-2">
                  <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                  <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                </div>
              </div>
            </a>
          </li>
          <li class="items">
            <a href="" class="block">
              <div class="mb-[10px]">
                <div class="" style="border-radius: 4px">
                  <div>
                    <img src="https://cdn1.epicgames.com/spt-assets/f54480bb1c01475c9ca9319be920902f/sentinel-3-homeworld-l4zft.png?h=854&resize=1&w=640" alt="">
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-2">
                <h1 class="font-inter text-[#F5F5F5]" style="font-size: 18px;">Sentinel 3 - Homeworld</h1>
                <span class="font-inter" style="font-size: 13px;">Phát hành: 22/12/2077</span>
                <div class="flex flex-wrap mb-2">
                  <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                  <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                </div>
              </div>
            </a>
          </li>
          <li class="items">
            <a href="" class="block">
              <div class="mb-[10px]">
                <div class="" style="border-radius: 4px">
                  <div>
                    <img src="https://cdn1.epicgames.com/spt-assets/f54480bb1c01475c9ca9319be920902f/sentinel-3-homeworld-l4zft.png?h=854&resize=1&w=640" alt="">
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-2">
                <h1 class="font-inter text-[#F5F5F5]" style="font-size: 18px;">Sentinel 3 - Homeworld</h1>
                <span class="font-inter" style="font-size: 13px;">Phát hành: 22/12/2077</span>
                <div class="flex flex-wrap mb-2">
                  <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                  <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                </div>
              </div>
            </a>
          </li>
          <li class="items">
            <a href="" class="block">
              <div class="mb-[10px]">
                <div class="" style="border-radius: 4px">
                  <div>
                    <img src="https://cdn1.epicgames.com/spt-assets/f54480bb1c01475c9ca9319be920902f/sentinel-3-homeworld-l4zft.png?h=854&resize=1&w=640" alt="">
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-2">
                <h1 class="font-inter text-[#F5F5F5]" style="font-size: 18px;">Sentinel 3 - Homeworld</h1>
                <span class="font-inter" style="font-size: 13px;">Phát hành: 22/12/2077</span>
                <div class="flex flex-wrap mb-2">
                  <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                  <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                </div>
              </div>
            </a>
          </li>
          <li class="items">
            <a href="" class="block">
              <div class="mb-[10px]">
                <div class="" style="border-radius: 4px">
                  <div>
                    <img src="https://cdn1.epicgames.com/spt-assets/f54480bb1c01475c9ca9319be920902f/sentinel-3-homeworld-l4zft.png?h=854&resize=1&w=640" alt="">
                  </div>
                </div>
              </div>
              <div class="flex flex-col px-2">
                <h1 class="font-inter text-[#F5F5F5]" style="font-size: 18px;">Sentinel 3 - Homeworld</h1>
                <span class="font-inter" style="font-size: 13px;">Phát hành: 22/12/2077</span>
                <div class="flex flex-wrap mb-2">
                  <span class="mt-1.5 bg-[#D49B54] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 font-inter">Hành động</span>
                  <span class="mt-1.5 bg-[#C74B50] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900 font-inter">Nhập vai</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div class="m-auto pagination">
          <ul class="flex font-inter list-pagination justify-center">
            <li class="list-pagination_item">
              <a class="flex justify-center items-center font-inter text-[#F5F5F599] w-full" href="" style="border: 1px solid transparent;">1</a>
            </li>
            <li class="list-pagination_item">
              <a class="flex justify-center items-center font-inter text-[#F5F5F599] w-full" href="" style="border: 1px solid transparent;">2</a>
            </li>
            <li class="list-pagination_item">
              <a class="flex justify-center items-center font-inter text-[#F5F5F599] w-full" href="" style="border: 1px solid transparent;">3</a>
            </li>
            <li class="list-pagination_item">
              <a class="flex justify-center items-center font-inter text-[#F5F5F599] w-full" href="" style="border: 1px solid transparent;">4</a>
            </li>
            <li class="list-pagination_item">
              <a class="flex justify-center items-center font-inter text-[#F5F5F599] w-full" href="" style="border: 1px solid transparent;">5</a>
            </li>
            <li class="list-pagination_item flex items-center">
              <a class="flex justify-center items-center font-inter text-[#F5F5F599] w-full" href="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="right w-[20%]">
      <div class="filter-search">
        <div class="flex justify-between items-center">
          <span class="font-inter" style="font-size: 14px;">Filter</span>
          <button class="text-white text-center flex items-center justify-center py-[13px] px-[11px]">
            <div class="font-inter" style="font-size: 11px;">RESET</div>
          </button>
        </div>
        <div>
          <div class="relative">
            <span class="absolute top-2 left-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </span>
            <input type="text" class="pr-[30px] pl-[40px] h-10 w-full bg-[#202020] font-inter" style="border-color: rgba(0, 0, 0, 0);border-radius: 4px; font-size: 13px;" placeholder="Keywords" value="">
          </div>
        </div>
      </div>
      <div>
        <div>
          <button @click="showOption" class="option-button uppercase font-inter flex justify-between items-center" style="font-size: 13px;">
            <div class="text-option">Thể loại</div>
            <span>
              <svg :class="{rotate: isShow}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>
            </span>
          </button>
          <div v-if="isShow">
            <div>
              <div class="flex p-3 justify-between items-center">
                <div class="text-white font-inter opacity-50 hover:opacity-100 cursor-pointer" style="font-size: 14px;">Hành động</div>
              </div>
            </div>
            <div>
              <div class="flex p-3 justify-between items-center">
                <div class="text-white font-inter opacity-50 hover:opacity-100 cursor-pointer" style="font-size: 14px;">Phiêu lưu</div>
              </div>
            </div>
            <div>
              <div class="flex p-3 justify-between items-center">
                <div class="text-white font-inter opacity-50 hover:opacity-100 cursor-pointer" style="font-size: 14px;">Nhập vai</div>
              </div>
            </div>
            <div>
              <div class="flex p-3 justify-between items-center">
                <div class="text-white font-inter opacity-50 hover:opacity-100 cursor-pointer" style="font-size: 14px;">Giải đố</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const isShoFilter = ref(false);
const isShow = ref(false);
const showFilter = () => {
  isShoFilter.value = !isShoFilter.value;
}
const showOption = () => {
  isShow.value = !isShow.value;
}
</script>

<style scoped>
.filter-button {
  transition: opacity 125ms ease-in-out 0s;
  width: 100%;
  display: block;
  padding: 8px 20px;
  position: relative;
}

.action_filter:hover {
  color: #fff !important;
  text-decoration: underline;
}
.rotate {
  transform: rotate(180deg);
}
.list-items {
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 17px;
}
.items:hover {
  border: 1px solid #9F9FA3FF;
}
.list-pagination_item {
  width: 30px;
}
.list-pagination_item:hover a {
  color: #fff!important;
}
.filter-search::after {
  content: "";
  background-color: rgb(245, 245, 245);
  display: block;
  height: 1px;
  opacity: 0.1;
  margin: 14px 0;
}
.option-button {
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 3px;
  color: rgb(245, 245, 245);
  display: flex;
  font-weight: 500;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 20px 14px;
  width: 100%;
}
.option-button:hover .text-option svg{
  color: #fff!important;
}
</style>
