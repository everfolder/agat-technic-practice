<script setup>
import CatalogueCard from "@/components/Catalogue/CatalogueCard.vue";
import { onMounted, ref, computed } from "vue";

const cars = ref([]);

const currentPage = ref(1);
const itemsPerPage = 9;

onMounted(async () => {
  const res = await fetch("src/cars.json");
  cars.value = await res.json();
});

const totalPages = computed(() =>
    Math.ceil(cars.value.length / itemsPerPage)
);

const paginatedCars = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return cars.value.slice(start, end);
});

const goToPage = (page) => {
  currentPage.value = page;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <div class="wrapper">
    <div class="catalogue-list">
      <CatalogueCard
          v-for="c in paginatedCars"
          :key="c.id"
          :car="c"
      />
    </div>

    <div
        v-if="totalPages > 1"
        class="pagination"
    >
      <button
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
      >
        ←
      </button>

      <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>

      <button
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
      >
        →
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.catalogue-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  align-self: start;

  button {
    min-width: 40px;
    height: 40px;
    border: 1px solid #ddd;
    background: white;
    cursor: pointer;
    transition: 0.2s;

    &:hover:not(:disabled) {
      border-color: #000;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.active {
      background: #000;
      color: #fff;
      border-color: #000;
    }
  }
}
</style>