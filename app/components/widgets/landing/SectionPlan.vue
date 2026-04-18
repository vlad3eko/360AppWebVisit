<template>
  <SectionPosition>
    <div class="flex flex-wrap gap-5">

      <Panel
          v-for="item in items"
          :key="item.id"
          class="scale rotate-359 hover:rotate-360"
      >
        <!-- HEADER -->
        <div class="flex items-center gap-4 relative">
          <IconCircle :color="item.color" />
          <p class="uppercase font-bold text-red-300 italic">
            {{ item.title }}
          </p>
        </div>

        <!-- CONTENT -->
        <transition name="accordion">
          <div class="mt-4 space-y-4 text-left">

            <div v-for="(block, index) in item.content" :key="index">

              <!-- обычный текст -->
              <p v-if="isString(block)">
                {{ block }}
              </p>

              <!-- список -->
              <div v-else-if="isList(block)">
                <p v-if="block.before">
                  {{ block.before }}
                </p>

                <p
                    v-for="(point, i) in block.list"
                    :key="i"
                    class="text-gray-400"
                >
                  ⤷ {{ point }}
                </p>
              </div>

              <!-- highlight -->
              <p
                  v-else-if="isHighlight(block)"
                  class="text-red-400"
              >
                {{ block.highlight }}
              </p>

            </div>

          </div>
        </transition>
      </Panel>

    </div>
  </SectionPosition>
</template>

<script setup lang="ts">
import SectionPosition from "~/components/widgets/landing/SectionPosition.vue";
import IconCircle, {type IColorType} from "~/components/ui/icons/IconCircle.vue";
import Panel from "~/components/ui/panel/Panel.vue";
import {useAccordion} from "~/components/composables/useAccordion";

type Block =
    | string
    | { before?: string; list: string[] }
    | { highlight: string }

const isString = (block: Block): block is string => {
  return typeof block === 'string'
}

const isList = (block: Block): block is { before?: string; list: string[] } => {
  return typeof block === 'object' && 'list' in block
}

const isHighlight = (block: Block): block is { highlight: string } => {
  return typeof block === 'object' && 'highlight' in block
}

const items = ref<{
  id: number
  title: string
  color: IColorType
  content: Block[]
}[]>([
  {
    id: 1,
    title: "Реклама проекта",
    color: "green",
    content: [
      "На старте — закрытый чат и канал с новостями о развитии проекта. Параллельно с ростом комьюнити создаётся основной продукт — каталог каналов и инструменты для работы с рекламой.",
      {
        before: "Постепенно формируется сильное сообщество, в котором:",
        list: [
          "опытные администраторы",
          "активные и растущие каналы",
          "реальные рекламодатели"
        ]
      },
      "Всё в одном месте — без лишнего шума и случайных людей."
    ]
  },
  {
    id: 2,
    title: "Автоматизация",
    color: "red",
    content: [
      "Появится система, которая упростит работу с рекламой и рост канала.",
      {
        list: [
          "Покупка и продажа рекламы в несколько кликов",
          "Автоматическое размещение постов",
          "Бартер между каналами без переписок"
        ]
      },
      {
        before: "Бот контролирует процесс:",
        list: [
          "публикация в нужное время",
          "защита от раннего удаления"
        ]
      },
      "В результате — меньше рутины, больше роста и новых подписчиков."
    ]
  },
  {
    id: 3,
    title: "Доступ",
    color: "red",
    content: [
      "Доступ в сообщество платный — чтобы внутри были только заинтересованные и активные участники.",
      "Это отсекает случайных людей где каждый заинтересован в росте.",
      {
        highlight:
            "Поддержка участников напрямую влияет на развитие проекта — сервис создаётся для своих, а не как массовый продукт."
      }
    ]
  }
])


const { openIds, toggle} = useAccordion()
</script>

<style scoped>

</style>
