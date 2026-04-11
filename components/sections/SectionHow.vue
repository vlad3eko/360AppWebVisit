<template>
  <SectionPosition>

    <div class="flex justify-between items-center w-full p-10 bg-[#A98DF0]/20  rounded-2xl">
      <div class="w-full p-15 ">
        <div v-for="item in data" :key="item.id" class=" border-b  border-b-gray-600">
          <div @click="toggle(item.id)" ref="block" class="py-3x flex gap-2 items-center cursor-pointer pb-3">
              <IconCircleNeon v-if="item.show"/>
              <IconCirclePink v-else/>
            <p class="text-3xl ">{{ item.title }}</p>
          </div>
          <div v-if="item.show">
            <p class="muted">{{ item.subtitle }}</p>
            <my-neon-text>
              <NuxtLink to="https://t.me/vlad3eko" target="_blank" class="cursor-pointer">
                <p class=" pt-2 pb-2"> {{ item.link }} ></p>
              </NuxtLink>
            </my-neon-text>
          </div>
        </div>
      </div>
      <div class="min-w-[55%] h-[80vh] relative">
        <div v-for="image in data">
          <NuxtImg v-if="image.show" :src="image.img" class="rounded-2xl p-2 w-full h-full absolute blur-2xl object-cover"/>
          <NuxtImg v-if="image.show" :src="image.img" class="rounded-2xl w-full h-full absolute object-cover"/>
        </div>
      </div>
    </div>
  </SectionPosition>
</template>

<script setup>
import SectionPosition from "~/components/sections/SectionPosition.vue";
import MyNeonText from "~/components/UI/text/MyNeonText.vue";
import IconCirclePink from "~/components/UI/icons/IconCirclePink.vue";
import IconCircleNeon from "~/components/UI/icons/IconCircleNeon.vue";

const {data: fetched} = await useFetch('/api/SectionHow')
const data = ref([])

onMounted(() => {
  if (fetched.value) {
    data.value = fetched.value.map(item => ({
      ...item,
    }))
  }
})

const toggle = (event) => {
  data.value.forEach(item => {
    item.show = item.id === event ? !item.show : false
  })
}

</script>

<style scoped>

</style>
