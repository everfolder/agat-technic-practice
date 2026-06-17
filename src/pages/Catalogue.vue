<script setup>

import CatalogueFilter from "@/components/Catalogue/CatalogueFilter.vue";
import CatalogueList from "@/components/Catalogue/CatalogueList.vue";
</script>

<template>
  <div class="container catalogue-wrapper">
    <CatalogueFilter />
    <CatalogueList />
  </div>
</template>

<style
    scoped
    lang="scss"
>

.catalogue-wrapper {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}
</style>