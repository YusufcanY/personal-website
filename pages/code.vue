<template>
  <div class="relative flex flex-col items-center justify-center h-screen body-container">
    <div class="relative z-20 flex flex-col items-center justify-center overflow-hidden">
      <div class="flex items-center justify-center w-32 h-32 bg-gray-800 rounded-full menu-button">
        <a class="cursor-pointer" @click="toggleBubbleMenu">
          <img :src="require('~/assets/icons/home/apple.png')" width="120px" alt="front">
        </a>
      </div>
    </div>
    <div class="bubble-menu">
      <bubble-info
        v-for="item in bubbleItems"
        :key="item.id"
        :index="item.id"
        :item-name="item.name"
        :menu-stat="bubbleMenuStat"
        folder-name="code"
      />
    </div>
  </div>
</template>

<script>
import BubbleInfo from '~/components/BubbleInfo.vue';

export default {
  components: { BubbleInfo },
  data() {
    return {
      bubbleMenuStat: false,
      bubbleItems: [
        {
          id: 1,
          name: 'vue',
        },
        {
          id: 2,
          name: 'javascript',
        },
        {
          id: 3,
          name: 'php',
        },
        {
          id: 4,
          name: 'html-5',
        },
        {
          id: 5,
          name: 'nuxt',
        },
        {
          id: 6,
          name: 'react',
        },
        {
          id: 7,
          name: 'laravel',
        },
        {
          id: 8,
          name: 'css-3',
        },
        {
          id: 12,
          name: 'tailwind',
        },
      ],
    };
  },
  methods: {
    toggleBubbleMenu() {
      this.bubbleMenuStat = !this.bubbleMenuStat;
    },
  },
  head() {
    return {
      title: 'Code | Yusufcan Yılmaz',
    };
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
.body-container {
  height: 100vh;
}
@media screen and (max-height: 950px) {
  .body-container {
    height: 953px;
  }
}
</style>
