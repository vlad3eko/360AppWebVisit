<template>
  <div class="dot"/>
</template>

<script lang="ts" setup>
interface IColor {
  color: 'red' | 'pink' | 'green' | 'neon'
}

const props = withDefaults(defineProps<IColor>(), {
  color: 'green'
})

const variant = {
  red: '#ff0000',
  pink: '#ff00d0',
  green: '#00ff00',
  neon: '#00e6ff',
}

// Вычисляем нужный цвет
const selectedColor = variant[props.color]
</script>

<style scoped>
.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 16px;
  background-color: v-bind(selectedColor);
  box-shadow: 0 0 8px v-bind(selectedColor), 0 0 28px v-bind(selectedColor);
}
</style>
