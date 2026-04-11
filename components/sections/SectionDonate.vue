<template>
  <SectionPosition>
    <div>
      <h2 class="mb-10 text-4xl font-bold text-center">Поддержать проект</h2>
      <div class="flex justify-between items-center gap-20 text-center">
        <ParallaxCard
            title="Типа Монтажер"
            :image="image"
            description="⚡️Видеомонтаж, материалы, эффекты, переходы, оверлеи..."
            :statistics="-121"
            :subscribers="7731"
            class="w-full"
        />
        Тут форма для оплаты
      </div>
    </div>
  </SectionPosition>
</template>

<script lang="ts" setup>

import SectionPosition from "~/components/sections/SectionPosition.vue";
import ParallaxCard from "~/components/UI/card/ParallaxCard.vue";

const image = '/img/noBody.png'
</script>

<style scoped>

</style>
