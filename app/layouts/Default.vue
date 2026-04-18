<template>
  <div class="w-full mx-auto text-accent-foreground bg-accent">
    <Header/>
    <slot/>
    <Footer/>
  </div>
</template>

<script setup>

import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
</script>

<style scoped>
* {
  background: radial-gradient(1200px 5600px at 150% 50%, rgba(100, 0, 100, 2.35), transparent),
  radial-gradient(600px 12600px at -15% 80%, rgb(0, 230, 255, 0.35), transparent),
  linear-gradient(180deg, var(--color-background) 0%, var(--color-panel-soft) 100%);
  font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  color: var(--color-foreground);
}
</style>
