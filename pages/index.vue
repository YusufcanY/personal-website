<template>
  <div class="flex items-center justify-center h-screen overflow-hidden bg-white">
    <div class="flex flex-row flex-wrap w-1/4">
      <div v-for="section in sections" :key="section.id" class="flex relative flex-col w-1/2 p-2">
        <a
          :class="section.box_round"
          class="p-2 py-20 focus:outline-none bg-black text-white font-semibold text-center text-4xl z-30 overflow-hidden"
          @click="handleSection(section.id)"
        >
          {{ section.title }}
          <div
            :id="`box-${section.id}`"
            class="section-box absolute bg-black top-0 right-0 w-full z-10 transition-all duration-500"
            :class="{ 'big-section': selectedId === section.id, 'left-0 w-full': !generateClass(section.id) }"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedId: 0,
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
  methods: {
    handleSection(sectionId) {
      this.selectedId = sectionId;
    },
    generateClass(sectionId) {
      return sectionId % 2;
    },
  },
};
</script>

<style lang="scss">
.big-section {
  width: 1000px;
  height: 100%;
}
</style>
