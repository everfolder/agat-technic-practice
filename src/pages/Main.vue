<script setup>
import {ref} from "vue";
import MainSlider from "@/components/Main/MainSlider.vue";
import MainTypes from "@/components/Main/MainTypes.vue";
import MainBrandSlider from "@/components/Main/MainBrandSlider.vue";
import MainAdvantages from "@/components/Main/MainAdvantages.vue";
import MainCertificates from "@/components/Main/MainCertificates.vue";
import MainMap from "@/components/Main/MainMap.vue";

const name = ref('')
</script>

<template>
  <MainSlider />
  <MainTypes />
  <MainBrandSlider />
  <MainAdvantages />
  <MainCertificates />
  <MainMap />
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
</style>