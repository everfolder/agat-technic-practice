<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import {initStorage} from '@/services/storageServiceBrandsNews.js'
import {onMounted, ref} from "vue";

const carsLocal = ref([])
onMounted(async () => {
  try {
    await initStorage()

    if (!localStorage.getItem('cars')) {
      const res = await fetch("src/cars.json");
      carsLocal.value = await res.json();
      localStorage.setItem('cars', JSON.stringify(carsLocal.value))
    }

  } catch (error) {
    console.error("Ошибка при инициализации:", error)
  }
})
</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style scoped>

</style>