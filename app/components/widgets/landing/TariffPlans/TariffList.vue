<template>
  <SectionPosition>
    <panel class="flex flex-wrap">
      <TariffItem
          v-for="plan in plans"
          :key="plan.title"
          :plan="plan"
      />
    </panel>
  </SectionPosition>
</template>

<script setup>
import SectionPosition from "~/components/widgets/landing/SectionPosition.vue";
import TariffItem from "~/components/widgets/landing/TariffPlans/TariffItem.vue";
import Panel from "~/components/ui/panel/Panel.vue";

const plans = [
  {
    title: "Участник",
    badge: "Популярный",
    conditions: 'Участие: рекламный пост +',
    popular: true,
    price: "149",
    oldPrice: "299",
    subtitle: "Базовый доступ",
    button: "Выбрать",
    year: {
      old: "3588",
      new: "1788"
    },
    features: [
      {icon: "mdi:check", text: "Доступ к закрытому чату"},
      {icon: "mdi:check", text: "Размещение в каталоге"},
      {icon: "mdi:check", text: "Роль в группе «Участник»", class: "text-primary"},
      {icon: "streamline-block:basic-ui-lock", text: "Роль в каталоге «Участник»", class: "text-muted-foreground"},
      {icon: "streamline-block:basic-ui-lock", text: "Приоритет в выдаче", class: 'text-muted-foreground'},
      {icon: "streamline-block:basic-ui-lock", text: "Рекомендация проекта", class: 'text-muted-foreground'},
      {icon: "streamline-block:basic-ui-lock", text: "Решающий голос в развитии проекта", class: 'text-muted-foreground'},
      {icon: "streamline-block:basic-ui-lock", text: "Уникальная карточка", class: 'text-muted-foreground'}
    ]
  },

  {
    title: "Спонсор",
    badge: "Спонсор",
    conditions: 'Участие: рекламный пост +',
    premium: true,
    price: "499",
    oldPrice: "999",
    subtitle: "Максимальный эффект",
    button: "Выбрать",
    year: {
      old: "11988",
      new: "5988"
    },
    features: [
      {icon: "mdi:check", text: "Доступ к закрытому чату"},
      {icon: "mdi:check", text: "Размещение в каталоге"},
      {icon: "mdi:check", text: "Роль в группе «Спонсор»", class: "text-secondary"},
      {icon: "mdi:check", text: "Роль в каталоге «Спонсор»", class: "text-secondary"},
      {icon: "mdi:check", text: "Приоритет в выдаче"},
      {icon: "mdi:check", text: "Рекомендация проекта"},
      {icon: "mdi:check", text: "Решающий голос в развитии проекта"},
      {icon: "mdi:check", text: "Уникальная карточка"}
    ],
    card: {
      title: "Ваш канал",
      image: "/img/noBody.png",
      role: "Спонсор",
      description: "⚡️Карточка с приоритетом",
      statistics: 120,
      subscribers: 10000
    }
  }
]
</script>

<style scoped>

</style>
