<template>
  <div class="neonText rounded">
    <slot/>
  </div>
</template>

<script setup>

</script>

<style scoped>

.neonText {
  color: rgb(0, 230, 255);
  text-shadow: 0 0 8px rgba(0, 230, 255, 0.18), 0 0 28px rgba(0, 230, 255, .5);
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  font-family: 'Orbitron', serif;
}
</style>
