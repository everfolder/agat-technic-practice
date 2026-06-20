<script setup>
import {ref} from "vue";
import MainSlider from "@/components/Main/MainSlider.vue";
import MainTypes from "@/components/Main/MainTypes.vue";
import MainBrandSlider from "@/components/Main/MainBrandSlider.vue";
import MainAdvantages from "@/components/Main/MainAdvantages.vue";
import MainCertificates from "@/components/Main/MainCertificates.vue";
import MainMap from "@/components/Main/MainMap.vue";
import MainProduct from "@/components/Main/MainProduct.vue";
import MainNews from "@/components/Main/MainNews.vue";
import MainAbout from "@/components/Main/MainAbout.vue";

const name = ref('')
</script>

<template>
  <MainSlider />
  <MainTypes />
  <MainBrandSlider />
  <MainProduct />
  <MainNews />
  <MainAdvantages />
  <MainCertificates />
  <MainAbout />
  <MainMap />
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
</style>