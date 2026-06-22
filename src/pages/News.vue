<script setup lang="js">
import NewsBrands from '@/components/News/NewsBrands.vue'
import NewsList from '@/components/News/NewsList.vue'
import { computed, onMounted, ref } from 'vue'

const Data = ref([])
const selectedBrand = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('/news.json')
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`)
    }
    Data.value = await response.json()
  } catch (error) {
    console.error('Не удалось загрузить новости:', error)
  }
})
const handleSelectBrand = (brand) => {
  selectedBrand.value = brand.name
}
const filteredNews = computed(() => {
  if (!selectedBrand.value) {
    return Data.value
  }
  return Data.value.filter((item) => {
    return item.brand === selectedBrand.value
  })
})
</script>

<template>
  <NewsBrands @select-brand="handleSelectBrand" />
  <NewsList :news="filteredNews" />
</template>

<style scoped lang="scss">

</style>