<template>
  <div class="container mx-auto flex flex-col h-screen">
    <div class="flex justify-center item w-full">
      <img :src="require('~/assets/illustration-profile.png')" width="400px" alt="">
    </div>
    <div class="flex items-start md:items-center relative">
      <div class="w-20 h-20 md:w-40 md:h-40 bg-red-200 rounded-full absolute" />
      <p class="text-xl z-30 px-5 md:pl-10">
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
