<template>
  <div class="body-container p-10">
    <div class="flex flex-col md:flex-row flex-1 md:h-screen justify-center items-center md:space-x-16">
      <div class="menu-container overflow-hidden flex flex-col justify-center items-center relative pb-8">
        <div class="menu-button flex justify-center items-center rounded-full w-32 h-32 border-2 border-black hover:border-opacity-0 transition-all duration-300">
          <a href="https://github.com/YusufcanY">
            <img :src="require('~/assets/icons/contact/github.svg')" width="120px" alt="github">
          </a>
        </div>
        <p class="menu-title md:absolute text-xl font-bold">
          Github
        </p>
      </div>
      <div class="menu-container overflow-hidden flex flex-col justify-center items-center relative pb-8">
        <div class="menu-button flex justify-center items-center rounded-full w-32 h-32 border-2 border-black hover:border-opacity-0 transition-all duration-300">
          <a href="https://www.instagram.com/yusufcan.n">
            <img :src="require('~/assets/icons/contact/instagram.svg')" width="120px" alt="instagram">
          </a>
        </div>
        <p class="menu-title md:absolute text-xl font-bold">
          Instagram
        </p>
      </div>
      <div class="menu-container overflow-hidden flex flex-col justify-center items-center relative pb-8">
        <div class="menu-button flex justify-center items-center rounded-full w-32 h-32 border-2 border-black hover:border-opacity-0 transition-all duration-300">
          <a href="mailto:ycanny1@gmail.com">
            <img :src="require('~/assets/icons/contact/mail.svg')" width="120px" alt="mail">
          </a>
        </div>
        <p class="menu-title md:absolute text-xl font-bold">
          Mail
        </p>
      </div>
      <div class="menu-container overflow-hidden flex flex-col justify-center items-center relative pb-8">
        <div class="menu-button flex justify-center items-center rounded-full w-32 h-32 border-2 border-black hover:border-opacity-0 transition-all duration-300">
          <a href="https://www.linkedin.com/in/yusufcan-yilmaz/">
            <img :src="require('~/assets/icons/contact/linkedin.svg')" width="120px" alt="linkedin">
          </a>
        </div>
        <p class="menu-title md:absolute text-xl font-bold">
          Linkedin
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.menu-button img{
  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.menu-button:hover img{
  transform: scale(1.4);
}
.menu-title{
  transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  bottom: -18%;
}
.menu-button:hover + .menu-title{
  bottom: 0%;
}
</style>
