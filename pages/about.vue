<template>
  <div class="container mx-auto flex flex-col justify-center items-start h-screen">
    <div class="pb-16">
      <nuxt-link to="/">
        <img :src="require('~/assets/icons/arrow.svg')" width="50px" alt="back" class="back-button">
      </nuxt-link>
    </div>
    <div class="flex items-start md:items-center relative">
      <div class="w-40 h-40 bg-red-200 rounded-full absolute" />
      <p class="text-xl z-30 pl-10">
        Hello, i am Yusufcan. I created my first website at 12 years old. After that i developed some C# programs in high school. I learned how to develop web fronted and now i striving to build upon what I know about Frontend. I want to be Fullstack Developer one day.
      </p>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
