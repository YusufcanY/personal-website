<template>
  <div class="relative flex flex-col items-center justify-center pb-8 overflow-hidden" @click.prevent.stop="onClickEvent">
    <div class="flex items-center justify-center w-32 h-32 bg-gray-800 rounded-full menu-button">
      <nuxt-link :to="item.to">
        <img :src="item.icon" width="120px" alt="design">
      </nuxt-link>
    </div>
    <p class="text-xl font-bold text-white menu-title md:absolute">
      {{ item.title }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onClickEvent() {
      this.$emit('click');
    }, // TODO:click emit
  },

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
