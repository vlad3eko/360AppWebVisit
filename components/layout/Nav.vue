<template>
  <div class="flex justify-between pt-8 pb-8 pl-2 pr-2 rounded-2xl sticky top-0 backdrop-blur-sm z-10 border-b border-b-muted-foreground/20">
    <div class="flex items-center">
      <my-button class="mr-2">360</my-button>
      <div>
        <p class="font-bold">TG360</p>
        <p>Экосистема взаимного продвижения</p>
      </div>
    </div>
    <nav class="flex items-center">
      <ul v-for="item in data" class="mr-4">
        <li><NuxtLink :to="item.link">{{item.name}}</NuxtLink></li>
      </ul>
      <my-button>App</my-button>
      <ChangeTheme/>
    </nav>
  </div>
</template>

<script lang="ts" setup>

import MyButton from "~/components/UI/button/MyButton.vue";
import ChangeTheme from "~/components/shared/ChangeTheme.vue";

const {data} = await useFetch('/api/HeaderMenu')
</script>

<style scoped>

</style>
