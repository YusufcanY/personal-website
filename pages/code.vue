<template>
  <div class="body-container flex flex-row flex-wrap justify-center items-start py-32">
    <skill-card v-for="(item, index) in skills" :key="index" :icon="item.name" icon-path="code">
      <template>
        <div>
          {{ item.content }}
        </div>
      </template>
    </skill-card>
  </div>
</template>

<script>
import SkillCard from '~/components/SkillCard.vue';

export default {
  components: { SkillCard },
  data() {
    return {
      skills: [
        {
          name: 'javascript',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa nesciunt cupiditate maiores!',
        },
        {
          name: 'vue',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa nesciunt cupiditate maiores!',
        },
        {
          name: 'nuxt',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa nesciunt cupiditate maiores!',
        },
        {
          name: 'react',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa nesciunt cupiditate maiores!',
        },
        {
          name: 'html-5',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa nesciunt cupiditate maiores!',
        },
        {
          name: 'css-3',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa nesciunt cupiditate maiores!',
        },
        {
          name: 'tailwind',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa nesciunt cupiditate maiores!',
        },
      ],
    };
  },
};
</script>

<style scoped>
.body-container > *{
  margin: 10px;
}
.border-primary{
  border: 1px solid rgba(0, 0, 0, 0.125)
}
</style>
