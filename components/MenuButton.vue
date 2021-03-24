<template>
  <div class="overflow-hidden flex flex-col justify-center items-center relative pb-8">
    <div class="menu-button flex justify-center items-center rounded-full w-32 h-32 bg-black">
      <nuxt-link :to="item.to">
        <img :src="item.icon" width="120px" alt="design">
      </nuxt-link>
    </div>
    <p class="menu-title md:absolute text-xl font-bold">
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
