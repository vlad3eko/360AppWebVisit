<template>
    <Panel :class="['relative', plan.premium && 'premium', plan.popular && 'popular', plan.basic && 'basic']"
    class="rotate-358 hover:rotate-360 transition-all hover:z-1 scale">
      <div v-if="plan.badge" class="badge premium-badge">
        {{ plan.badge }}
      </div>

      <h3 class="font-bold text-accent-foreground/80 mb-5">{{ plan.title }}</h3>

      <div class="price">
        <p class="amount">
        <span v-if="plan.oldPrice" class="old-price">
          ₽{{ plan.oldPrice }}
        </span>
          ₽{{ plan.price }}
        </p>

        <p v-if="plan.year" class="period">
          /мес.
        </p>
      </div>

      <p v-if="plan.year" class="period mb-5">Оплата раз в год
        <span class="amount text-xl">{{ plan.year.new }}</span>
      </p>

      <p v-else class="period mb-5">Без оплаты</p>

      <p class="w-full border my-5 border-muted-foreground/10 bg-cyan-500/10"></p>

      <Button to="" :full="true" class="w-full mb-2">{{ plan.button }}</Button>
      <p class="text-xs text-muted-foreground text-center italic">{{plan.conditions}} {{plan.year.new}}₽</p>

      <ul class="list pt-5 mb-6">
        <li v-for="item in plan.features" :key="item.text" class="flex items-center gap-2 text-accent-foreground scale hover:ml-10 transition-all" :class="item.class">
          <Icon :name="item.icon"/>
          {{ item.text }}
        </li>
      </ul>

      <div v-if="plan.card" class="flex justify-center">
        <ParallaxCard class="w-full"
                      :image="plan.card.image"
                      :subscribers="plan.card.subscribers"
                      :statistics="plan.card.statistics"
                      :role="plan.card.role"
                      :title="plan.card.title"
                      :description="plan.card.description"/>
      </div>
    </Panel>
</template>

<script setup>
import Panel from "~/components/ui/panel/Panel.vue";
import Button from "~/components/ui/button/Button.vue";
import ParallaxCard from "~/components/ui/card/ParallaxCard.vue";

defineProps({
  plan: {}
})
</script>

<style scoped>

@reference "tailwindcss"

.active {
  border: 1px solid var(--color-primary);
  box-shadow: 0 0 40px var(--color-neon);
}


.price {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  font-size: 40px;
}

.amount {
  font-weight: bold;
  color: var(--color-price);
  @apply italic
}

.old-price {
  color: var(--color-price-old);
  @apply opacity-20
}

.period {
  color: var(--color-muted-foreground);
  @apply text-xs
}

.subtitle {
  color: var(--color-muted-foreground);
  font-size: 14px;
}

.btn {
  margin-top: 10px;
  padding: 12px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background: var(--color-accent);
  color: var(--color-foreground);
}

.list {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--color-muted-foreground);
}

.badge {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 0, 208, 0.15);
  color: #ff00d0;
}

.basic {
  border: 3px solid rgba(37, 35, 35, 0.25);
  box-shadow: 0 0 50px rgb(26, 37, 39);
}

.popular {
  border: 3px solid #00B7D8;
  box-shadow: 0 0 50px rgba(0, 183, 216, 1.25);
}

.premium {
  border: 1px solid #ff00d0;
  box-shadow: 0 0 50px rgba(255, 0, 208, .25);
}


.premium-badge {
  background: rgba(255, 0, 208, 0.2);
  color: #ff00d0;
}

</style>
