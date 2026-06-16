<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination, Autoplay} from "swiper/modules";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {ref} from "vue";
import BannerImg1 from '@/assets/main-slider/slide1.jpg'
import BannerImg2 from '@/assets/main-slider/slide2.jpg'
import BannerImg3 from '@/assets/main-slider/slide3.jpg'
import BannerImg4 from '@/assets/main-slider/slide4.jpg'

const modules = [Pagination, Autoplay]

const bannerLists = ref([
  {img: BannerImg1, path: '#'},
  {img: BannerImg2, path: '#'},
  {img: BannerImg3, path: '#'},
  {img: BannerImg4, path: '#'},
])
</script>

<template>
  <section class="mslider">
    <Swiper :loop="true" :autoplay="{delay: 3000, disableOnInteraction: false}" :modules="modules" navigation :pagination="{clickable: true}">
      <SwiperSlide v-for="(list, index) in bannerLists" :key="index">
        <div class="mslider__list">
          <router-link :to="list.path">
            <img
                :src="list.img"
                alt="bannerList"
            >
          </router-link>
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="swiper-pagination"></div>
  </section>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.mslider {
  @media (max-width: 650px) {
    display: none;
  }
}

:deep(.swiper-pagination-bullet) {
  background: #fff;
}
</style>