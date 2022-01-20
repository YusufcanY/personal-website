<template>
  <div class="container flex flex-col h-screen mx-auto">
    <div class="flex justify-center w-full">
      <img :src="require('~/assets/illustration-profile.png')" width="400px" alt="">
    </div>
    <div class="relative flex items-start text-white">
      <div class="absolute w-20 h-20 ml-2 bg-red-500 bg-opacity-50 rounded-full md:ml-0 md:w-32 md:h-32" />
      <p class="z-30 px-5 text-lg md:text-xl md:pl-10">
        &nbsp;&nbsp; Hello, My name is Yusufcan and I am Frontend Developer. If you wannna learn about my skills you can check <nuxt-link to="/code">
          Code
        </nuxt-link> page or <nuxt-link to="/design">
          Design
        </nuxt-link> page. I love skatebording in my freetimes. Also playing some video games, sometimes with my office mates. I pretty well with my office mates, after work or in work. I can speak English <br><br>&nbsp;&nbsp; About how i discovered web developing, i created my first website at 12 years old. After that i developed some C# programs in high school. I learned how to develop web frontend and now I striving to build upon what I know about Frontend.
      </p>
    </div>
    <div class="self-end px-5 pb-6 md:px-0">
      <nuxt-link tag="button" to="/leave-note" class="px-4 py-2 mt-4 font-black text-white transition-all duration-200 transform bg-gray-800 rounded-md focus:bg-opacity-75 hover:-translate-y-1 hover:shadow-lg">
        Leave a note to me
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
a{
  font-weight: bold!important;
  transition: 0.5s ease;
}
a:hover{
  color: red;
}
</style>
