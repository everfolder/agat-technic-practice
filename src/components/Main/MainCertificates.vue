<template>
  <section class="cert-slider">
    <div class="certificate container">
      <h2 class="certificate-title">Сертификаты</h2>
      <div class="certificate__wrap">
        <div class="certificate-slider">
          <Swiper class="my-swiper" @swiper="setSwiper" :slides-per-view="3" :space-between="0" :modules="[]" :breakpoints="{0: {slidesPerView: 1,}, 421: {   slidesPerView: 3, } }">
            <SwiperSlide v-for="(item, index) in certificates" :key="index">
              <div class="certificate__item">
                <img :src="item.img" :alt="'Сертификат ' + (index + 1)" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <button class="certificate-slider__prev" @click="slidePrev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button class="certificate-slider__next" @click="slideNext">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import cert1 from '@/assets/certificates/certificate1.jpg'
import cert2 from '@/assets/certificates/certificate2.png'
import cert3 from '@/assets/certificates/certificate3.png'
import cert4 from '@/assets/certificates/certificate4.png'
import cert5 from '@/assets/certificates/certificate5.png'
import cert6 from '@/assets/certificates/certificate6.png'

const swiperInstance = ref(null)
const setSwiper = (swiper) => { swiperInstance.value = swiper }
const slidePrev = () => { if (swiperInstance.value) swiperInstance.value.slidePrev() }
const slideNext = () => { if (swiperInstance.value) swiperInstance.value.slideNext() }

const certificates = [
  { img: cert1 },
  { img: cert2 },
  { img: cert3 },
  { img: cert4 },
  { img: cert5 },
  { img: cert6 },
]
</script>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
.cert-slider{
  background: #F6F6F6;
}
.certificate {
  position: relative;
  &-title{
    color: var(--color-gray-dark);
    padding: 1rem 0 1rem 0;
  }
}
.certificate__wrap {
  position: relative;
  width: 100%;
}
.certificate-slider {
  max-width: 858px;
  margin: 0 auto;
}
.my-swiper {
  width: 100%;
  padding: 0 !important;
  :deep(.swiper-slide) {
    margin: 0 !important;
    padding: 0 !important;
  }
}
.certificate__item {
  width: 100%;
  height: 406px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  img {
    object-fit: contain;
    object-position: top;
    display: block;
  }
}

.certificate-slider,
.my-swiper {
  min-width: 0;
}

.certificate-slider__prev,
.certificate-slider__next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  transition: color 0.2s;
  pointer-events: auto;

  &:hover {
    color: #fab72a;
  }

  svg {
    display: block;
    width: 24px;
    height: 24px;
  }
}

.certificate-slider__prev {
  left: 0;

  @include laptop {
    left: 0;
  }
}

.certificate-slider__next {
  right: 0;

  @include laptop {
    right: 0;
  }
}

@include tablet {
  .certificate-slider {
    width: calc(100% - #{rem(120)});
  }

  .certificate__item {
    height: rem(260);

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  .certificate-slider__prev {
    left: rem(-10);
  }

  .certificate-slider__next {
    right: rem(-10);
  }
}

@include mobile {
  .certificate-slider {
    width: 100%;
  }

  .certificate__item {
    height: rem(180);

    img {
      max-width: rem(140);
      max-height: rem(180);
    }
  }
}
@media (width <= 420px) {
  .certificate-slider {
    max-width: 123px;
    width: 100%;
  }

  .certificate__item {
    height: 173px;

    img {
      width: 123px;
      height: 173px;
    }
  }
}
</style>