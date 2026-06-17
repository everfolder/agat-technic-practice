<script setup>

import CatalogueCard from "@/components/Catalogue/CatalogueCard.vue";
import {onMounted, ref} from "vue";

const cars = ref([])
onMounted(async ()=> {
  const res = await fetch('src/cars.json')
  cars.value = await res.json()
})

console.log(cars)

</script>

<template>
<div class="catalogue-list">
  <CatalogueCard v-for="c in cars" :car="c" />
</div>
</template>

<style
    scoped
    lang="scss"
>

</style>