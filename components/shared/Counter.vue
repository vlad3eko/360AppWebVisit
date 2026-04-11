<template>
  <div class="">
    <p>{{ tweened.number.toFixed(0) }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { toRaw } from 'vue'
import gsap from 'gsap'
const count = defineProps(['count'])

const number = ref(0)
const tweened = reactive({
  number: Math.floor(Math.random() * 20000)
})

const resetNumber = () => {
  return number.value = toRaw(count).count
}

watch(number, (n) => {
  gsap.to(tweened, { duration: 1.5, number: Number(n) || 0 })
})

onMounted((event) => {
  resetNumber()
})
</script>

<style scoped>

</style>
