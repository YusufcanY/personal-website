<template>
  <div class="body-container p-10">
    <div class="flex flex-col md:flex-row flex-1 justify-center items-center md:space-x-16">
      <div class="menu-container overflow-hidden flex flex-col justify-center items-center relative pb-8">
        <div class="menu-button flex justify-center items-center rounded-full w-32 h-32 bg-black">
          <nuxt-link to="/code">
            <img :src="require('~/assets/icons/apple.png')" width="120px" alt="">
          </nuxt-link>
        </div>
        <p class="menu-title md:absolute text-xl font-bold">
          Code
        </p>
      </div>
      <div class="menu-container overflow-hidden flex flex-col justify-center items-center relative pb-8">
        <div class="menu-button flex justify-center items-center rounded-full w-32 h-32 bg-black">
          <nuxt-link to="/design">
            <img :src="require('~/assets/icons/orange.png')" width="120px" alt="">
          </nuxt-link>
        </div>
        <p class="menu-title md:absolute text-xl font-bold">
          Design
        </p>
      </div>
      <div class="menu-container overflow-hidden flex flex-col justify-center items-center relative pb-8">
        <div class="menu-button flex justify-center items-center rounded-full w-32 h-32 bg-black">
          <nuxt-link to="/about">
            <img :src="require('~/assets/icons/pineapple.png')" width="120px" alt="">
          </nuxt-link>
        </div>
        <p class="menu-title md:absolute text-xl font-bold">
          About
        </p>
      </div>
      <div class="menu-container overflow-hidden flex flex-col justify-center items-center relative pb-8">
        <div class="menu-button flex justify-center items-center rounded-full w-32 h-32 bg-black">
          <nuxt-link to="/contact">
            <img :src="require('~/assets/icons/watermelon.png')" width="120px" alt="">
          </nuxt-link>
        </div>
        <p class="menu-title md:absolute text-xl font-bold">
          Contact
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
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
