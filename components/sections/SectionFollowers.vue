<template>
    <ClientOnly>
          <h2 class="mb-10 text-4xl font-bold text-center">
            {{props.title}}
          </h2>
        <div class="flex justify-center">
          <swiper-container ref="swiperRef" :init="false" class="overflow-hidden relative">
            <swiper-slide class=" border border-red-500/20 bg-amber-500/10 rounded-2xl p-2 text-center  max-w-[250px]">
              <div class="mb-7">
                <NuxtImg :src="image" class="w-full object-cover rounded-2xl h-[200px]"/>
              </div>
              <p>Типа Монтажер</p>
            </swiper-slide>
            <swiper-slide class="border border-red-500/20 card rounded-2xl p-2 text-center  max-w-[250px]">
              <div class="h-[200px]">
                <NuxtImg :src="image" class="w-full h-full object-cover rounded-2xl"/>
              </div>
              <p>Ваш канал</p>
            </swiper-slide>
            <swiper-slide class="border border-red-500/20 bg-amber-500/10 rounded-2xl p-2 text-center  max-w-[250px]">
              <div class="h-[200px]">
                <NuxtImg :src="image" class="w-full h-full object-cover rounded-2xl"/>
              </div>
              <p>Ваш канал</p>
            </swiper-slide>
            <swiper-slide class="border border-red-500/20 bg-amber-500/10 rounded-2xl p-2 text-center  max-w-[250px]">
              <ParallaxCard
                  title="Типа Монтажер"
                  :image="image"
                  :statistics="121"
                  :subscribers="7731"
                  class="w-full"
              />
            </swiper-slide>
            <swiper-slide class="border border-red-500/20 bg-amber-500/10 rounded-2xl p-2 text-center  max-w-[250px]">
              <div class="h-[200px]">
                <NuxtImg :src="image" class="w-full h-full object-cover rounded-2xl"/>
              </div>
              <p>Ваш канал</p>
            </swiper-slide>
            <swiper-slide class="border border-red-500/20 bg-amber-500/10 rounded-2xl p-2 text-center  max-w-[250px]">
              <div class="h-[200px]">
                <NuxtImg :src="image" class="w-full h-full object-cover rounded-2xl"/>
              </div>
              <p>Ваш канал</p>
            </swiper-slide>
            <swiper-slide class="border border-red-500/20 bg-amber-500/10 rounded-2xl p-2 text-center  max-w-[250px]">
              <ParallaxCard
                  title="Типа Монтажер"
                  :image="image"
                  :statistics="121"
                  :subscribers="7731"
                  class="w-full"
              />
            </swiper-slide>
            <swiper-slide class="border border-red-500/20 bg-amber-500/10 rounded-2xl p-2 text-center  max-w-[250px]">
              <div class="h-[200px]">
                <NuxtImg :src="image" class="w-full h-full object-cover rounded-2xl"/>
              </div>
              <p>Ваш канал</p>
            </swiper-slide>
            <swiper-slide class="border border-red-500/20 bg-amber-500/10 rounded-2xl p-2 text-center  max-w-[250px]">
              <div class="h-[200px]">
                <NuxtImg :src="image" class="w-full h-full object-cover rounded-2xl"/>
              </div>
              <p>Ваш канал</p>
            </swiper-slide>
            <swiper-slide class="border border-red-500/20 bg-amber-500/10 rounded-2xl p-2 text-center max-w-[250px]">
              <div class="h-[200px]">
                <NuxtImg :src="image" class="w-full h-full object-cover rounded-2xl"/>
              </div>
              <p>Ваш канал</p>
            </swiper-slide>
            <swiper-slide class="border border-red-500/20 bg-amber-500/10 rounded-2xl p-2 text-center  max-w-[250px]">
              <ParallaxCard
                  title="Типа Монтажер"
                  :image="image"
                  :statistics="121"
                  :subscribers="7731"
                  class="w-full"
              />
            </swiper-slide>
          </swiper-container>
        </div>
    </ClientOnly>
      <div class="p-10">
          <MyButton v-if="props.hook" class="w-full mx-auto">Поддержать проект</MyButton>
      </div>
</template>

<script lang="ts" setup>

import MyButton from "~/components/UI/button/MyButton.vue";
import ParallaxCard from "~/components/UI/card/ParallaxCard.vue";

interface IProp {
  title?: string
  hook?: boolean
}

const props = withDefaults(defineProps<IProp>(), {
  hook: false
})

const image = '/img/noBody.png'
const swiperRef = ref<any>(null)

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
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1020: {
      slidesPerView: 5,
      spaceBetween: 40
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 7,
      spaceBetween: 40
    }
  }
})
</script>

<style scoped>

</style>
