<template>
  <section class="py-20 px-5 text-center">
    <h2 class="text-5xl font-bold mb-5 Text-primary">Присоединяйся сейчас</h2>
    <p class="text-muted-foreground mb-8">
      Стань частью системы - <span class="Text-primary">зарабатывай больше</span>
    </p>
    <Button to="https://t.me/TG360_app" :target="true">
      Вступить в комьюнити
    </Button>

    <p class="text-muted-foreground/50 mt-6 text-sm">
      Участие: рекламный пост + ~299₽/мес
    </p>
  </section>
</template>

<script lang="ts" setup>

import Button from "~/components/ui/button/Button.vue";
</script>

<style scoped>

</style>
