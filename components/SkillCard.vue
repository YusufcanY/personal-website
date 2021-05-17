<template>
  <a class="card-container flex flex-col w-full md:w-1/3 xl:w-1/5 justify-center items-center bg-white border-primary rounded-md py-6 px-12 cursor-pointer" @click="toggleCard">
    <img :src="require(`~/assets/icons/${iconPath}/${icon}.svg`)" width="200px" alt="javascript">
    <div v-if="active">
      <slot />
    </div>
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    iconPath: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleCard() {
      this.active = !this.active;
    },
  },

};
</script>

<style scoped>

</style>
