<template>
  <footer
    class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900"
  >
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >© {{ getYear }}
      <a href="#" class="hover:underline">Gamechua</a>. Game free for you
    </span>
  </footer>
</template>

<script>
export default {
    setup() {
        const getYear = new Date().getFullYear()
        return {getYear}
    }
}
</script>
