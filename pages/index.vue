<template>
  <div class="flex items-center justify-center h-screen overflow-hidden bg-white">
    <div class="flex flex-row flex-wrap w-1/4">
      <div v-for="section in sections" :key="section.id" class="flex flex-col w-1/2 p-2">
        <button
          :class="
            `p-2 py-20 focus:outline-none bg-black text-white font-semibold text-center text-4xl ${section.box_round} overflow-hidden`
          "
        >
          {{ section.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          id: 1,
          box_round: 'rounded-tl-lg',
          title: 'Code',
        },
        {
          id: 2,
          box_round: 'rounded-tr-lg',
          title: 'Design',
        },
        {
          id: 3,
          box_round: 'rounded-bl-lg',
          title: 'About',
        },
        {
          id: 4,
          box_round: 'rounded-br-lg',
          title: 'Contact',
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
