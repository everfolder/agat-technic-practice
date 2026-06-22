<script setup lang="js">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const emit = defineEmits(['select-brand'])
const activeBrand = ref(null)
const brandLists = [
  {
    id: 3,
    name: 'Hino',
    img: new URL('@/assets/logos-color/hino.svg', import.meta.url).href,
  },
  {
    id: 1,
    name: 'Agromash',
    img: new URL('@/assets/logos-color/agromash.svg', import.meta.url).href,
  },
  {
    id: 2,
    name: 'Daewoo',
    img: new URL('@/assets/logos-color/daewoo.svg', import.meta.url).href,
  },
  {
    id: 4,
    name: 'Kamaz',
    img: new URL('@/assets/logos-color/kamaz.svg', import.meta.url).href,
  },
  {
    id: 5,
    name: 'Maz',
    img: new URL('@/assets/logos-color/maz.svg', import.meta.url).href,
  },
  {
    id: 6,
    name: 'Shacman',
    img: new URL('@/assets/logos-color/shacman.svg', import.meta.url).href,
  }
]
const selectBrand = (brand) => {
  activeBrand.value = brand.id
  emit('select-brand', brand)
}
</script>

<template>
  <section class="brands">
    <div class="brand-content container">
      <h2 class="title">Бренды</h2>
      <Swiper :slides-per-view="'auto'" :space-between="24" class="brands-swiper">
        <SwiperSlide v-for="brand in brandLists" :key="brand.id" class="brand-slide">
          <button  :class="{ active: activeBrand === brand.id }" @click="selectBrand(brand)">
            <img class="brand-item" :src="brand.img" :alt="brand.name">
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
.brands{
  margin-top: rem(20);
}
.brand-content {
  display: flex;
  flex-direction: column;
  gap: rem(32);
}

.title {
  font-size: rem(28);
  color: var(--color-gray-dark);
}

.brand-slide {
  width: auto;
}
.brands-swiper {
  width: 100%;

  :deep(.swiper-wrapper) {
    justify-content: flex-start;
  }
}
.brand-item {
  width: rem(120);
  height: rem(87);
  background: white;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover,
  &:focus,
  &.active {
    filter: brightness(0.9);
  }
}
</style>