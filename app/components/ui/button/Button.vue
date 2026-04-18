<template>
  <NuxtLink
      :to="props.to" :target="props.target ? '_blank' : ''"
      :class="props.full ? 'flex justify-center' : ''"
      class="px-6 py-3 rounded-xl cursor-pointer
      bg-primary hover:bg-primary/90
      text-primary-foreground">
    <slot/>
  </NuxtLink>
</template>

<script lang="ts" setup>

interface IProps {
  to: string
  target?: boolean
  full?: boolean
}

const props = defineProps<IProps>()

</script>

<style scoped>

</style>
