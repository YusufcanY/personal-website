<template>
  <div>
    <div class="px-6 py-4">
      <span class="badge mr-2">{{ msg }}</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'nuxt-composition-api';

export default {
  setup() {
    const msg = ref('여보세요!');
    return { msg };
  },
};
</script>

<style scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>
