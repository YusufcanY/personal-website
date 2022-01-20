<template>
  <div class="p-10">
    <div class="flex flex-col items-center justify-center flex-1 md:flex-row md:h-screen md:space-x-16">
      <div class="relative flex flex-col items-center justify-center pb-8 overflow-hidden menu-container">
        <div class="flex items-center justify-center w-32 h-32 transition-all duration-300 border-2 border-white rounded-full menu-button hover:border-opacity-0">
          <a href="https://github.com/YusufcanY">
            <img :src="require('~/assets/icons/contact/github.svg')" width="120px" alt="github">
          </a>
        </div>
        <p class="text-xl font-bold menu-title md:absolute">
          Github
        </p>
      </div>
      <div class="relative flex flex-col items-center justify-center pb-8 overflow-hidden menu-container">
        <div class="flex items-center justify-center w-32 h-32 transition-all duration-300 border-2 border-white rounded-full menu-button hover:border-opacity-0">
          <a href="https://www.instagram.com/yusufcan.n">
            <img :src="require('~/assets/icons/contact/instagram.svg')" width="120px" alt="instagram">
          </a>
        </div>
        <p class="text-xl font-bold menu-title md:absolute">
          Instagram
        </p>
      </div>
      <div class="relative flex flex-col items-center justify-center pb-8 overflow-hidden menu-container">
        <div class="flex items-center justify-center w-32 h-32 transition-all duration-300 border-2 border-white rounded-full menu-button hover:border-opacity-0">
          <a href="mailto:info@yusufcanyilmaz.com">
            <img :src="require('~/assets/icons/contact/mail.svg')" width="120px" alt="mail">
          </a>
        </div>
        <p class="text-xl font-bold menu-title md:absolute">
          Mail
        </p>
      </div>
      <div class="relative flex flex-col items-center justify-center pb-8 overflow-hidden menu-container">
        <div class="flex items-center justify-center w-32 h-32 transition-all duration-300 border-2 border-white rounded-full menu-button hover:border-opacity-0">
          <a href="https://www.linkedin.com/in/yusufcan-yilmaz/">
            <img :src="require('~/assets/icons/contact/linkedin.svg')" width="120px" alt="linkedin">
          </a>
        </div>
        <p class="text-xl font-bold menu-title md:absolute">
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
