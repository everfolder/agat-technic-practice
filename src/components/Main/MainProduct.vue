<script setup lang="js">
import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/css';
import MainProductItem from "@/components/Main/MainProductItem.vue";
import product1 from '@/assets/main-day-product/products/kran.png'
import product2 from '@/assets/main-day-product/products/samosval.png'

const products = [
  {img: product1, actualPrice: '', isPrice: false},
  {img: product2, actualPrice: '6 239 000 Р', fullPrice: '7 239 000 Р', isPrice: true},
  {img: product1, actualPrice: '', isPrice: false},
  {img: product2, actualPrice: '6 239 000 Р', fullPrice: '7 239 000 Р', isPrice: true},
]
</script>
<template>
<section class="product-of-the-day">
  <div class="product-content container">
    <h2 class="title">Товар дня</h2>
    <Swiper :slides-per-view="'auto'" space-between="20" :grab-cursor="true" class="product-content__slider">
      <SwiperSlide v-for="product in products" class="p">
        <MainProductItem :product=product />
      </SwiperSlide>
    </Swiper>
    <div class="product-content__mobile-grid mobile-grid">
      <MainProductItem v-for="(product, index) in products" :key="index" :product="product"/>
    </div>
  </div>
</section>
</template>
<style scoped lang="scss">
@use '@/styles/helpers' as *;
.title{
  font-size: rem(28);
  color: var(--color-gray-dark);
}
.product-of-the-day{
  margin: 20px 0 20px 0;
}
.product-content{
  &__slider{
    margin-top: rem(20);
    height: rem(516);
  }
  &__mobile-grid {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: rem(20);
  }
}
.p{
  max-width: 293px;
  display: flex;
  align-items: flex-end;
}
@include mobile {
  .product-content {
    &__slider {
      display: none;
    }

    &__mobile-grid {
      display: flex;
    }
  }
  .mobile-grid > * {
    width: 100%;
    max-width: 400px;
  }
}
</style>