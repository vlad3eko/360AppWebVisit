<template>
  <div ref="cardElement" class="card rgb">
    <!-- Изображение вынесено в динамический стиль -->
    <div class="card-image relative"
         :style="{ backgroundImage: `url(${image})` }">
      <div v-if="props.role">
        <span class="absolute top-5 right-5 premium premium-badge font-bold">{{props.role}}</span>
      </div>

      <div v-if="subscribers">
        <span class="absolute bottom-5 left-5 rounded-xl p-1">{{ subscribers }}</span>
        <span class="absolute bottom-1 left-5 rounded-xl p-1 text-[12px] text-gray-400">участников</span>
      </div>

      <div v-if="statistics">
        <span class="absolute bottom-1 right-5 rounded-xl p-1 text-[12px] text-gray-400">за месяц</span>
        <span :class="statisticColor"
              class="absolute bottom-5 right-5 rounded-xl p-1">{{ statistics }}</span>
      </div>
    </div>

    <div class="card-text w-full mx-auto">
      <span class="date">{{ title }}</span>
      <p v-if="description">{{ description }}</p>
      <slot></slot> <!-- Слот для доп. контента (например, кнопок) -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {VanillaTilt} from '~/utils/vanilla-tilt';

interface IProps {
  image: string;
  subscribers?: number
  statistics?: number
  role?: string
  title: string;
  description?: string;
}

const props = defineProps<IProps>();
const statisticColor = computed(() => {
  if (props.statistics) {
    return props.statistics > 0 ? 'text-green-500' : 'text-red-500'
  }
})
const cardElement = ref<HTMLElement | null>(null);

onMounted(() => {
  if (cardElement.value) {
    (VanillaTilt as any).init(cardElement.value, {
      max: 20,
      speed: 400,
      glare: true,
      "max-glare": .4,
      scale: 1.05, // Управляем увеличением через JS для плавности
    });
  }
});
</script>

<style scoped>

.premium {
  border: 1px solid #ff00d0;
  box-shadow: 0 0 50px rgba(255, 0, 208, 0.25);
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
}

.premium-badge {
  background: rgba(255, 0, 208, 0.2);
  color: #ff00d0;
}
</style>
