<template>
  <section class="p-10 rounded-4xl bg">
    <TitleSections title="План проекта"/>
    <SectionPlan/>
    <TitleSections title="Идея"/>
    <SectionHow/>
    <TitleSections title="Преимущества"/>
    <SectionWhy/>
    <TitleSections title="Тарифы"
                   subtitle="Скидка действует пока продукт находится в разработке..."/>
    <TariffList/>
  </section>
</template>

<script setup>
import SectionHow from "~/components/widgets/landing/SectionHow.vue";
import SectionWhy from "~/components/widgets/landing/SectionWhy.vue";
import SectionPlan from "~/components/widgets/landing/SectionPlan.vue";
import TariffList from "~/components/widgets/landing/TariffPlans/TariffList.vue";
import TitleSections from "~/components/composables/TitleSections.vue";

</script>

<style scoped>

</style>
