<script setup lang="js">
import {Swiper, SwiperSlide} from "swiper/vue";
</script>
<template>
  <section class="brands">
    <div class="brand-content container">
      <h2>Бренды</h2>


<!--      СДЕЛАТЬ JSON-->


      <Swiper :loop="true" :modules="modules" navigation :pagination="{clickable: true}">
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
    </div>
  </section>
</template>
<style scoped lang="scss">

</style>