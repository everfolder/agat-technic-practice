<script setup>
import { onMounted, ref, computed } from "vue";
import AdminTrucksCard from "@/components/AdminTrucksCard.vue";

const cars = ref([]);

const currentPage = ref(1);
const itemsPerPage = 9;

onMounted(async () => {
  cars.value = JSON.parse(localStorage.getItem('cars'))
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

const removeTruck = id => {
  let carsL = JSON.parse(localStorage.getItem('cars'))
  carsL = carsL.filter(car => car.id !== id)
  cars.value = cars.value.filter(car => car.id !== id)
  localStorage.setItem('cars', JSON.stringify(carsL))
}
</script>

<template>
  <div class="wrapper container">
    <router-link to="/admin-trucks-add-panel">Добавить КАМАААААААААААЗ</router-link>
    <div class="catalogue-list">
      <AdminTrucksCard
          @delete="removeTruck"
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
    <router-link to="/admin-trucks">АДМИНКА</router-link>

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