<script setup>
import {ref} from "vue";
import Header from "@/components/Header.vue";

const name = ref('')
</script>

<template>
  <Header />
  <input type="text" v-model="name" placeholder="Введите ваше имя...">
<h1>Hello, {{name}}</h1>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
</style>