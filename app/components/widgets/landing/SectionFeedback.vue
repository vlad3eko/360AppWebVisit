<template>
  <ClientOnly>
   <TitleSections title="Отзывы о TG360"/>
    <swiper-container ref="swiperRef" class="flex justify-between overflow-hidden relative">
      <swiper-slide class="rounded-2xl p-2 text-center min-h-[300px] m-5 ml-10">
        <Panel>
          <div class="mb-7 flex gap-5 w-full h-[50px]">
            <NuxtImg :src="image" class="w-full object-cover rounded-2xl bg-red-400 max-w-[50px] border"/>
            <span class="my-auto text-3xl">Типа монтажер</span>
          </div>
          <p class="text-left opacity-50 font-bold">
            Мы рады, что старты проектов проходят у нас настолько легко
            и оперативно. Спасибо всей вашей команде!
          </p>
        </Panel>
      </swiper-slide>
      <swiper-slide class="rounded-2xl p-2 text-center min-h-[300px] m-5 mb-10">
        <Panel>
          <div class="mb-7 flex gap-5 w-full h-[50px]">
            <NuxtImg :src="image" class="w-full object-cover rounded-2xl bg-red-400 max-w-[50px] border"/>
            <span class="my-auto text-3xl">PRO MMA | UFC НОВОСТИ 👊🏻</span>
          </div>
          <p class="text-left opacity-50 font-bold">
            Удобная система для просмотра своих старых запросов,
            возможность удобно и быстро создать запрос и огромный плюс -
            отредактировать, если нужно. Также подборки/категории
            каналов в общем доступе и можно заранее до запроса -
            просмотреть. Дашборд - удобен в использовании, можно следить
            за ходом рк и возвращаться к ним при реализации новых
            продуктов.
          </p>
        </Panel>
      </swiper-slide>
      <swiper-slide class="rounded-2xl p-2 text-center min-h-[300px] m-5 mr-10">
        <Panel class="">
          <div class="mb-7 flex gap-5 w-full h-[50px]">
            <NuxtImg :src="image" class="w-full object-cover rounded-2xl bg-red-400 max-w-[50px] border"/>
            <span class="my-auto text-3xl">Типа монтажер</span>
          </div>
          <p class="text-left opacity-50 font-bold">
            Мы рады, что старты проектов проходят у нас настолько легко
            и оперативно. Спасибо всей вашей команде!
          </p>
        </Panel>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script lang="ts" setup>

import Panel from "~/components/ui/panel/Panel.vue";
import TitleSections from "~/components/widgets/landing/Titles/TitleSections.vue";

const swiperRef = ref<any>(null)
const image = 'img/photo_2022-12-20_20-33-41.jpg'

const swiper = useSwiper(swiperRef, {
  effect: 'slide',
  loop: true,
  speed: 4000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  breakpoints: {
    200: {
      slidesPerView: 1.3,
      spaceBetween: 20
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.3,
      spaceBetween: 30
    },
    1020: {
      slidesPerView: 2.3,
      spaceBetween: 40
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3.3,
      spaceBetween: 40
    }
  }
})
</script>

<style scoped>

</style>
