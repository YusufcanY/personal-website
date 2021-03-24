<template>
  <div class="body-container relative h-screen flex flex-col justify-center items-center">
    <div class="overflow-hidden flex flex-col justify-center items-center relative z-20">
      <div class="menu-button flex justify-center items-center rounded-full w-32 h-32 bg-black">
        <a class="cursor-pointer" @click="toggleFrontMenu">
          <img :src="require('~/assets/icons/home/apple.png')" width="120px" alt="code">
        </a>
      </div>
    </div>
    <!-- <transition name="slide-menu"> -->
    <div class="front-menu">
      <transition name="slide-menu">
        <div v-if="frontMenuStat" class="front-menu-item-1 flex justify-center absolute items-center rounded-full w-16 h-16 bg-black">
          <a class="cursor-pointer" @click="toggleFrontMenu">
            <img :src="require('~/assets/icons/home/apple.png')" width="120px" alt="code">
          </a>
        </div>
      </transition>
      <transition name="slide-menu">
        <div v-if="frontMenuStat" class="front-menu-item-2 flex justify-center absolute items-center rounded-full w-16 h-16 bg-black">
          <a class="cursor-pointer" @click="toggleFrontMenu">
            <img :src="require('~/assets/icons/home/apple.png')" width="120px" alt="code">
          </a>
        </div>
      </transition>
      <transition name="slide-menu">
        <div v-if="frontMenuStat" class="front-menu-item-3 flex justify-center absolute items-center rounded-full w-16 h-16 bg-black">
          <a class="cursor-pointer" @click="toggleFrontMenu">
            <img :src="require('~/assets/icons/home/apple.png')" width="120px" alt="code">
          </a>
        </div>
      </transition>
      <transition name="slide-menu">
        <div v-if="frontMenuStat" class="front-menu-item-4 flex justify-center absolute items-center rounded-full w-16 h-16 bg-black">
          <a class="cursor-pointer" @click="toggleFrontMenu">
            <img :src="require('~/assets/icons/home/apple.png')" width="120px" alt="code">
          </a>
        </div>
      </transition>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      frontMenuStat: false,
    };
  },
  methods: {
    toggleFrontMenu() {
      this.frontMenuStat = !this.frontMenuStat;
    },
  },
};
</script>

<style>
.menu-button img{
  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.menu-button:hover img{
  transform: scale(1.4);
}
.front-menu-item-1{
  top: 50%;
  left: 43%;
  transform: translate(-50%,-50%);
}
.front-menu-item-2{
  top: 37%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.front-menu-item-3{
  top: 50%;
  left: 57%;
  transform: translate(-50%,-50%);
}
.front-menu-item-4{
  top: 63%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.slide-menu-enter-active, .slide-menu-leave-active {
  transition: .3s cubic-bezier(0.455, 0.03, 0.515, 0.955) ;
}
.slide-menu-enter, .slide-menu-leave-to{
  top: 50%;
  left: 50%;
  opacity: 0;
}
</style>
