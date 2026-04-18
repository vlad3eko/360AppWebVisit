<template>
  <div class="flex justify-between pt-8 pb-8 pl-2 pr-2 rounded-2xl sticky top-0 backdrop-blur-sm z-10 border-b border-b-muted-foreground/20">
    <div class="flex items-center">
      <Button class="mr-2">360</Button>
      <div>
        <p class="font-bold">TG360</p>
        <p>Экосистема взаимного продвижения</p>
      </div>
    </div>
    <nav class="flex items-center">
      <ul v-for="item in data" class="mr-4">
        <li><NuxtLink :to="item.link">{{item.name}}</NuxtLink></li>
      </ul>
      <Button>App</Button>
      <ThemeSelect/>
    </nav>
  </div>
</template>

<script lang="ts" setup>

import ThemeSelect from "~/components/composables/ThemeSelect.vue";

const {data} = await useFetch('/api/HeaderMenu')
</script>

<style scoped>

</style>
