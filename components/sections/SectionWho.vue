<template>
  <SectionPosition class="flex flex-col">
    <section class="h-[50vh] flex flex-col justify-center items-center text-center px-5">
      <h1 class="text-4xl md:text-5xl font-bold mb-5 text-foreground">
        <span class="Text-primary">Зарабатывай больше</span> на своём Telegram-канале
      </h1>
      <p class="text-muted-foreground max-w-xl mb-8">
        Платформа, где ты находишь рекламу, автоматизируешь размещение и <span class="Text-primary">растёшь быстрее</span>
      </p>
      <NuxtLink to="https://t.me/TG360_app" target="_blank" class="bg-primary hover:bg-primary-foreground text-primary-foreground hover:text-foreground px-6 py-3 rounded-xl transition cursor-pointer">
        Присоединиться к комьюнити
      </NuxtLink>
    </section>

    <section class="flex-1">
      <my-card class="mb-2 flex items-center flex-wrap justify-between">
        <p class="">
          <IconCircle :color="'green'"/>
          Статистика сервиса
        </p>
        <p class="text-[13px] mt-1">Обновлено: <span class="muted">только что</span></p>
      </my-card>

      <div class="flex flex-wrap">
        <my-card v-for="prodStat in data" class="mr-2 mb-2 sm:min-w-[200px] outer">
          <div class="inner flex flex-col justify-between  h-[112px]">
            <span class="uppercase text-[12px] sm:text-[15px]">{{ prodStat.title }}</span>
            <my-neon-text class="text-3xl">
              <div class="text-3xl flex">
                <p v-show="prodStat.cost">~</p>
                <Counter :count="prodStat.count" class="text-primary text-4xl"/>
              </div>
              <p v-show="prodStat.cost" class="muted">({{ prodStat.cost }})</p>
            </my-neon-text>
          </div>
        </my-card>
      </div>
    </section>

  </SectionPosition>
</template>

<script setup>

import MyCard from "~/components/UI/card/MyCard.vue";
import MyNeonText from "~/components/UI/text/MyNeonText.vue";
import SectionPosition from "~/components/sections/SectionPosition.vue";
import Counter from "~/components/shared/Counter.vue";
import IconCircle from "~/components/UI/icons/IconCircle.vue";

const {data} = await useFetch('/api/ProdStat')

const {show} = defineProps(['show'])

const prevShortDescription = [
  {
    title: 'Точность',
    description: 'только ЦА'
  },
  {
    title: 'Автоматизация',
    description: 'планирование, реклама и продвижение экономят время и исключают ошибки'
  },
  {
    title: 'Экономия',
    description: 'работаем только за реальных подписчиков'
  },
  {
    title: 'всё в одном приложении.',
    description: 'новые подписчики, прозрачная аналитика и автоматические рекламные запуски'
  },
]

</script>

<style scoped>

</style>
