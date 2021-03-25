<template>
  <transition name="bubble-menu">
    <div
      v-if="menuStat"
      :class="`bubble-menu-item-${index}`"
      class="flex justify-center absolute items-center rounded-full w-16 h-16 bg-black"
    >
      <a class="cursor-pointer">
        <img :src="require(`~/assets/icons/code/${itemName}.svg`)" width="120px" :alt="itemName">
      </a>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    menuStat: {
      type: Boolean,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.bubble-menu {
  .bubble-menu-item-1,
  .bubble-menu-item-2,
  .bubble-menu-item-3,
  .bubble-menu-item-4,
  .bubble-menu-item-5,
  .bubble-menu-item-6,
  .bubble-menu-item-7,
  .bubble-menu-item-8,
  .bubble-menu-item-9 {
    transform: translate(-50%, -50%);
  }
}
  /* vue */
  .bubble-menu-item-1 {
    top: 50%;
    left: 43%;
  }
  /* react */
  .bubble-menu-item-2 {
    top: 29%;
    left: 50%;
  }
  /* js */
  .bubble-menu-item-3 {
    top: 37%;
    left: 50%;
  }
  /* html */
  .bubble-menu-item-4 {
    top: 63%;
    left: 50%;
  }
  /* css */
  .bubble-menu-item-5 {
    top: 71%;
    left: 50%;
  }
  /* tailwind */
  .bubble-menu-item-7 {
    top: 79%;
    left: 50%;
  }
  /* nuxt */
  .bubble-menu-item-6 {
    top: 50%;
    left: 39%;
  }
  /* php */
  .bubble-menu-item-8 {
    top: 50%;
    left: 57%;
  }
  /* laravel */
  .bubble-menu-item-9 {
    top: 50%;
    left: 61%;
  }
.bubble-menu-enter-active,
.bubble-menu-leave-active {
  transition: 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.bubble-menu-enter,
.bubble-menu-leave-to {
  top: 50%;
  left: 50%;
  opacity: 0;
}
</style>
