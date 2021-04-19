<template>
  <div class="body-container flex flex-col h-screen relative justify-center items-center">
    <div class="overflow-hidden flex flex-col justify-center items-center relative z-20">
      <div class="menu-button flex justify-center items-center rounded-full w-32 h-32 bg-black">
        <a class="cursor-pointer" @click="toggleBubbleMenu">
          <img :src="require('~/assets/icons/home/orange.png')" width="120px" alt="front">
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
        folder-name="design"
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
          name: 'photoshop',
        },
        {
          id: 2,
          name: 'illustrator',
        },
        {
          id: 3,
          name: 'xd',
        },
        {
          id: 4,
          name: 'figma',
        },
      ],
    };
  },
  methods: {
    toggleBubbleMenu() {
      this.bubbleMenuStat = !this.bubbleMenuStat;
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
.body-container {
  height: 100vh;
}
@media screen and (max-height: 950px) {
  .body-container {
    height: 953px;
  }
}
</style>
