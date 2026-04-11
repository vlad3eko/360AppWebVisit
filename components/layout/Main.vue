<template>
  <section class="p-10 rounded-4xl bg">
  <SectionPlan/>
  <SectionHow/>
  <SectionWhy/>
  <SectionDonate/>
  </section>
</template>

<script setup>
import SectionHow from "~/components/sections/SectionHow.vue";
import SectionWhy from "~/components/sections/SectionWhy.vue";
import SectionPlan from "~/components/sections/SectionPlan.vue";
import SectionDonate from "~/components/sections/SectionDonate.vue";

const image = 'https://img.freepik.com/free-photo/brick-wall-background_23-2151919450.jpg?semt=ais_hybrid&w=740&q=80'

</script>

<style scoped>

</style>
