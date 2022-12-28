<template>
  <div class="bg-[#121212]">
    <NavBar />
    <div class="bg-[#121212]">
      <div class="content w-[75%] m-auto h-full bg-[#121212]">
      <slot />
    </div>
    </div>
    <Footer/>
  </div>
</template>
<script setup>
import NavBar from "~~/components/NavBar.vue";
import Footer from "~~/components/Footer.vue";
</script>
