<script setup lang="js">
import PromoBrands from '@/components/Promo/PromoBrands.vue'
import PromoList from '@/components/Promo/PromoList.vue'
import PromoFilter from '@/components/Promo/PromoFilter.vue'
import { ref, computed } from 'vue'

const selectedFilter = ref('Все')
const handleFilter = (filter) => {
  selectedFilter.value = filter
}
const filter = [
  'Все',
  'Продажи',
  'Сервис',
  'Лизинг',
]
const promo = [
  {
    id: 1,
    slug: "proverka-tormoznoy-sistemy-i-podveski-1000-rubley",
    title: "Проверка тормозной системы и подвески - 1000 ₽",
    date: "01.11.2025",
    preview: "Сервис \"Агат/Техника для бизнеса\" объявляет о специальном предложении по проверке подвески и тормозной системы автомобиля",
    full_text: "",
    img_url: new URL('@/assets/promo/1promo.jpg', import.meta.url).href,
    flag: "Сервис"
  },
  {
    id: 2,
    slug: "ekspress-lizing-v-agat",
    title: "Экспресс-лизинг в Агат!",
    date: "01.11.2025",
    preview: "Проблемы с лизингом? Только не в Агат!",
    full_text: "",
    img_url: new URL('@/assets/promo/2promo.jpg', import.meta.url).href,
    flag: "Лизинг"
  },
  {
    id: 3,
    slug: "subsidiya-na-priobretenie-kommercheskoy-tehniki-v-lizing",
    title: "Субсидия на приобретение коммерческой техники в лизинг в Агат!",
    date: "01.11.2025",
    preview: "Агат техника для бизнеса готовы предложить удобное и выгодное финансовое решение для любых целей вашей деятельности.",
    full_text: "",
    img_url: new URL('@/assets/promo/3promo.png', import.meta.url).href,
    flag: "Продажи"
  },
  {
    id: 4,
    slug: "zamorozili-tseny-na-100-a-m-v-nalichii",
    title: "ЗАМОРОЗИЛИ ЦЕНЫ НА 100 А/М В НАЛИЧИИ",
    date: "01.11.2025",
    preview: "Утиль сбор повысился, а мы заморозили цены на 100 а/м в наличии!",
    full_text: "",
    img_url: new URL('@/assets/promo/4promo.jpg', import.meta.url).href,
    flag: "Продажи"
  }
];
const filteredPromo = computed(() => {
  if (selectedFilter.value === 'Все') {
    return promo
  }

  return promo.filter(item =>
      item.flag === selectedFilter.value
  )
})
</script>

<template>
    <PromoBrands />
    <PromoFilter :filter="filter" @chosenFilter="handleFilter" />
    <PromoList :promo="filteredPromo"/>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
.p{
  width: auto !important;
}
.button-filter{
  box-sizing: border-box;
  padding: rem(7) rem(10) rem(7) rem(10);
  background-color: var(--color-light-gray);
  color: var(--color-gray-dark);
}
</style>