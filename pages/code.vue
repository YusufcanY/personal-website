<template>
  <div class="body-container relative h-screen flex flex-col justify-center items-center">
    <div class="overflow-hidden flex flex-col justify-center items-center relative z-20">
      <div class="menu-button flex justify-center items-center rounded-full w-32 h-32 bg-black">
        <a class="cursor-pointer" @click="toggleFrontMenu">
          <img :src="require('~/assets/icons/home/apple.png')" width="120px" alt="front">
        </a>
      </div>
    </div>
    <div class="bubble-menu">
      <bubble-info v-for="item in frontItems" :key="item.id" :index="item.id" :item-name="item.name" :menu-stat="frontMenuStat" />
    </div>
  </div>
</template>

<script>
import BubbleInfo from '~/components/BubbleInfo.vue';

export default {
  components: { BubbleInfo },
  data() {
    return {
      frontMenuStat: false,
      frontItems: [
        {
          id: 1,
          name: 'vue',
        },
        {
          id: 2,
          name: 'react',
        },
        {
          id: 3,
          name: 'javascript',
        },
        {
          id: 4,
          name: 'html-5',
        },
        {
          id: 5,
          name: 'css-3',
        },
        {
          id: 6,
          name: 'nuxt',
        },
        {
          id: 7,
          name: 'tailwind',
        },
        {
          id: 8,
          name: 'php',
        },
        {
          id: 9,
          name: 'laravel',
        },
      ],
    };
  },
  methods: {
    toggleFrontMenu() {
      this.frontMenuStat = !this.frontMenuStat;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-button img {
  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.menu-button:hover img {
  transform: scale(1.4);
}
</style>
