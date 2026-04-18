<template>
  <div class="relative">
    <h2 class="absolute left-60 top-0 rotate-340 border-l border-r px-5
              text-6xl md:text-8xl font-bold bg-clip-text text-transparent opacity-20
              tracking-wide select-none pointer-events-none italic">{{ props.title }}</h2>
    <p class="text-muted-foreground italic border-l border-r px-5
               absolute left-120 top-0
               rotate-0 text-3xl md:text-3xl font-bold opacity-20 select-none pointer-events-none">{{ props.subtitle }}</p>
  </div>
</template>

<script lang="ts" setup>

interface IProps {
  title: string,
  subtitle?: string
}

const props = defineProps<IProps>()

</script>

<style scoped>

</style>
