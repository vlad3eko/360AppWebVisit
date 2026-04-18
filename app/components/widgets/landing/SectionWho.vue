<template>
  <SectionPosition class="flex flex-col">
    <section class="h-[50vh] flex flex-col justify-center items-center text-center px-5">
      <h1 class="text-4xl md:text-5xl font-bold mb-5 text-foreground">
        <span class="Text-primary">Зарабатывай больше</span> на вашем Telegram-канала
      </h1>

      <p class="text-muted-foreground max-w-xl mb-8">
        <span class="Text-primary">Закрытое сообщество</span>, где каналы обмениваются аудиторией
        и привлекают рекламодателей в одной системе
      </p>

      <Button to="https://t.me/TG360_app" :target="true">
        Присоединиться к сообществу
      </Button>
    </section>
    <section class="flex-1">
      <Panel class="mb-2 flex items-center flex-wrap justify-between">
        <p class="">
          <IconCircle :color="'green'"/>
          Статистика сервиса
        </p>
        <p class="text-[13px] mt-1">Обновлено: <span class="muted">только что</span></p>
      </Panel>

      <div class="flex flex-wrap">
        <Panel v-for="prodStat in data" class="mr-2 mb-2 sm:min-w-[200px] outer">
          <div class="inner flex flex-col justify-between  h-[112px]">
            <span class="uppercase text-[12px] sm:text-[15px]">{{ prodStat.title }}</span>
            <neon-text class="text-3xl">
              <div class="text-3xl flex">
                <p v-show="prodStat.cost">~</p>
                <Counter :count="prodStat.count" class="text-primary text-4xl"/>
              </div>
              <p v-show="prodStat.cost" class="muted">({{ prodStat.cost }})</p>
            </neon-text>
          </div>
        </Panel>
      </div>
    </section>

  </SectionPosition>
</template>

<script setup>

import NeonText from "~/components/ui/text/NeonText.vue";
import SectionPosition from "~/components/widgets/landing/SectionPosition.vue";
import Counter from "~/components/features/counter/Counter.vue";
import IconCircle from "~/components/ui/icons/IconCircle.vue";
import Panel from "~/components/ui/panel/Panel.vue";
import Button from "~/components/ui/button/Button.vue";

const {data} = await useFetch('/api/ProdStat')

const {show} = defineProps(['show'])

</script>

<style scoped>

</style>
