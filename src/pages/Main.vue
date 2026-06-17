<script setup>
import {ref} from "vue";
import MainSlider from "@/components/Main/MainSlider.vue";
import MainTypes from "@/components/Main/MainTypes.vue";
import MainBrandSlider from "@/components/Main/MainBrandSlider.vue";
import MainAdvantages from "@/components/Main/MainAdvantages.vue";
import MainCertificates from "@/components/Main/MainCertificates.vue";

const name = ref('')
</script>

<template>
  <MainSlider />
  <MainTypes />
  <MainBrandSlider />
  <MainAdvantages />
  <MainCertificates />
  <input type="text" v-model="name" placeholder="Введите ваше имя...">

<h1>Hello, {{name}}</h1>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
</style>