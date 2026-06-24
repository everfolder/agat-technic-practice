<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";

import {ref} from "vue";

const brands = ref([
  {imgWhite: new URL('@/assets/logos-white/kamaz.svg', import.meta.url).href, imgColor: new URL('@/assets/logos-color/kamaz.svg', import.meta.url).href, path: '#', name: 'kamaz'},
  {imgWhite: new URL('@/assets/logos-white/hino.svg', import.meta.url).href, imgColor: new URL('@/assets/logos-color/hino.svg', import.meta.url).href, path: '#', name: 'hino'},
  {imgWhite: new URL('@/assets/logos-white/maz.svg', import.meta.url).href, imgColor: new URL('@/assets/logos-color/maz.svg', import.meta.url).href, path: '#', name: 'maz'},
  {imgWhite: new URL('@/assets/logos-white/daewoo.svg', import.meta.url).href, imgColor: new URL('@/assets/logos-color/daewoo.svg', import.meta.url).href, path: '#', name: 'daewoo'},
  {imgWhite: new URL('@/assets/logos-white/shacman.svg', import.meta.url).href, imgColor: new URL('@/assets/logos-color/shacman.svg', import.meta.url).href, path: '#', name: 'shacman'},
  {imgWhite: new URL('@/assets/logos-white/agromash.svg', import.meta.url).href, imgColor: new URL('@/assets/logos-color/agromash.svg', import.meta.url).href, path: '#', name: 'agromash'},
])

const activeBrand = ref('')

const setBrand = b => {
  if (b === activeBrand.value) {
    activeBrand.value = ''
  } else {
    activeBrand.value = b
  }
}
</script>

<template>
  <section class="mbslider">
    <div class="mbslider__inner container">
      <Swiper :slides-per-view="'auto'" space-between="20" :grab-cursor="true" class="mbslider__slider">
        <SwiperSlide v-for="(brand, index) in brands" :key="index" @click="setBrand(brand)" :class="{'active-brand': activeBrand === brand}">
          <router-link :to="brand.path">
            <img class="mbslider__img-color" :src="brand.imgColor" alt="#">
          </router-link>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;


.swiper {
  justify-content: space-between;
  margin-top: 1rem;
}
.swiper-slide {
  // min-width: fluid(190, 87);
  // min-height: fluid(138, 64);
  position: relative;
  max-width: 190px;
  max-height: 138px;
  @include mobile {
    max-width: 123px;
    max-height: 89px;
  }
  width: auto;
  flex-grow: 0;

  @include hover {
    background-color: var(--color-gray-lite);
  }
}

.active-brand {
  background-color: var(--color-gray-lite) !important;
}
</style>