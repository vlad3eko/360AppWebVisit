<template>
  <SectionPosition>
    <div>
      <h2 class="mb-10 text-4xl font-bold text-center">План проекта</h2>
      <div class="text-center">
        <div class="mb-5  w-max mx-auto flex items-center gap-2">
          <IconCircle color="green"/>
          <p class=" uppercase font-bold text-red-300 italic border-b">Реклама проекта</p>
        </div>
        <div class="mb-10 bg-panel-soft  p-10 rounded-xl">
          <p>
            ⤷ Постепенно набираем аудиторию в Telegram-канале
          </p>
          <p>
            ⤷
            <NuxtLink to="https://t.me/Zerno_Kopeica" target="_blank" class="text-blue-500 border-b cursor-pointer">
              Подписывайся на канал
            </NuxtLink>
            — там можно задать вопросы или просто следить за новостями
          </p>
          <p>
            ⤷ Когда всё будет готово, выйдет пост с ссылкой на бота
          </p>
        </div>
        <div class="mb-5  w-max mx-auto flex items-center gap-2">
          <IconCircle color="red"/>
          <p class=" uppercase font-bold text-red-300 italic border-b">Подключение</p>
        </div>
        <div class="mb-10 bg-[#7A6DB3]/20  p-10 rounded-xl">
          <p>
            ⤷ Добавляем каналы в каталог и распределяем по категориям
          </p>
          <p>
            ⤷ На старте всё просто: рекламодатель сам связывается с владельцем канала и договаривается
          </p>
        </div>
        <div class="mb-5  w-max mx-auto flex items-center gap-2">
          <IconCircle color="red"/>
          <p class=" uppercase font-bold text-red-300 italic border-b">Автоматизация</p>
        </div>
        <div class="mb-10 bg-[#7A6DB3]/20 p-10 rounded-xl">
          <p>
            ⤷ Выдача прав боту в своём канале
          </p>
          <p>
            ⤷ Рекламодатель:
            <span class="block text-gray-400">-- выбирает дату и время</span>
            <span class="block text-gray-400">-- прикладывает пост</span>
            <span class="block text-gray-400">-- отправляет заявку</span>
          </p>
          <p>
            ⤷ Вы подтверждаете → оплата → автопубликация
          </p>
        </div>
        <div class="mb-5  w-max mx-auto flex items-center gap-2">
          <IconCircle color="red"/>
          <p class=" uppercase font-bold text-red-300 italic border-b">Бартер</p>
        </div>
        <div class="bg-[#7A6DB3]/20 p-10 rounded-xl">
          <p>
            ⤷ Каналы с похожими показателями могут рекламировать друг друга
          </p>
          <p>
            ⤷ При необходимости — с доплатой
          </p>
          <p>
            ⤷ Бот следит:
            <span class="block text-gray-400">-- чтобы реклама вышла вовремя</span>
            <span class="block text-gray-400">-- чтобы её не удалили раньше времени</span>
          </p>
          <p>
            ⤷ В итоге:
            <span class="block text-gray-400">-- вы помогаете друг другу расти и набирать подписчиков</span>
          </p>
        </div>
      </div>
    </div>
  </SectionPosition>
</template>

<script lang="ts" setup>

import SectionPosition from "~/components/sections/SectionPosition.vue";
import IconCircle from "~/components/UI/icons/IconCircle.vue";
</script>

<style scoped>

</style>
