<script setup>
import {ref} from "vue";
import Header from "@/components/Header.vue";
import MainSlider from "@/components/MainSlider.vue";
import MainTypes from "@/components/MainTypes.vue";
import MainBrandSlider from "@/components/MainBrandSlider.vue";

const name = ref('')
</script>

<template>
  <Header />
  <MainSlider />
  <MainTypes />
  <MainBrandSlider />
  <input type="text" v-model="name" placeholder="Введите ваше имя...">

<h1>Hello, {{name}}</h1>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
</style>