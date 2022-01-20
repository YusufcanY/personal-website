<template>
  <div class="container flex flex-col h-screen mx-auto">
    <div class="flex justify-center w-full">
      <img :src="require('~/assets/illustration-profile.png')" width="400px" alt="">
    </div>
    <div class="relative flex items-start text-white">
      <div class="absolute w-20 h-20 bg-red-500 bg-opacity-50 rounded-full md:w-32 md:h-32" />
      <p class="z-30 px-5 text-xl md:pl-10">
        &nbsp;&nbsp; Hello, i am Yusufcan. I am Fronend Developer and thats my website. If you wannna learn about my skills you can check <nuxt-link to="/code">
          Code
        </nuxt-link> page or <nuxt-link to="/design">
          Design
        </nuxt-link> page. I doing skatebording in my freetimes. Also playing some video games. Sometimes with my office mates. I pretty well with my office mates, after work or in work. I speak English but I can not practice my accent because I live in Turkey. <br><br>&nbsp;&nbsp; About how i discovered web developing, i created my first website at 12 years old. After that i developed some C# programs in high school. I learned how to develop web fronted and now i striving to build upon what I know about Frontend.
      </p>
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
