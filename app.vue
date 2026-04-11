<template>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</template>

<style scoped>
html, body {
  height: 100%;
}

* {
  background:
      radial-gradient(1200px 5600px at 120% 50%, rgba(100, 0, 100, 0.35), transparent),
      radial-gradient(600px 12600px at -15% 80%, rgb(0, 230, 255, 0.35), transparent),
      linear-gradient(180deg, var(--color-background) 0%, var(--color-panel-soft) 100%);
  font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  color: #e6f7ff;
}
</style>
<script setup lang="ts">
</script>
