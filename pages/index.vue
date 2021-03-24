<template>
  <div class="body-container p-10">
    <div class="flex flex-col md:flex-row flex-1 justify-center items-center md:space-x-16">
      <menu-button v-for="(item,index) in navItems" :key="index" :item="item" />
    </div>
  </div>
</template>

<script>
import MenuButton from '~/components/MenuButton.vue';
/* eslint-disable global-require */
export default {
  components: { MenuButton },
  data() {
    return {
      navItems: [
        {
          title: 'Code',
          icon: require('~/assets/icons/home/apple.png'),
          to: '/code',
        },
        {
          title: 'Design',
          icon: require('~/assets/icons/home/orange.png'),
          to: '/design',
        },
        {
          title: 'About',
          icon: require('~/assets/icons/home/pineapple.png'),
          to: '/about',
        },
        {
          title: 'Contact',
          icon: require('~/assets/icons/home/watermelon.png'),
          to: '/contact',
        },
      ],
    };
  },
};
</script>

<style>

</style>
