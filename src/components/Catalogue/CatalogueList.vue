<script setup>
import CatalogueCard from "@/components/Catalogue/CatalogueCard.vue";
import { onMounted, ref, computed, watch } from "vue";

const props = defineProps({
  filterBrand: {
    type: String,
    required: false,
    default: ''
  },
  filterTransmission: {
    type: String,
    required: false,
    default: ''
  },
  sort: {
    type: String,
    required: false,
    default: ''
  }
})

const cars = ref([]);

const currentPage = ref(1);
const itemsPerPage = 9;


onMounted(async () => {
  const storedCars = localStorage.getItem('cars');
  cars.value = storedCars ? JSON.parse(storedCars) : [];
});

const brandFilteredCars = computed(() => {
  if (props.filterBrand === '') {
    return cars.value;
  } else {
    return cars.value.filter(c => c.brand === props.filterBrand);
  }
});

const transmissionFilteredCars = computed(() => {
  if (props.filterTransmission === '') {
    return brandFilteredCars.value;
  } else {
    return brandFilteredCars.value.filter(c => c.propertyValues?.transmission === props.filterTransmission);
  }
});

const allFilteredCars = computed(() => {
  let carsToSort = [...transmissionFilteredCars.value];
  if (props.sort === 'inc') {
    return carsToSort.sort((a, b) => a.price - b.price);
  } else if (props.sort === 'dec') {
    return carsToSort.sort((a, b) => b.price - a.price);
  } else {
    return carsToSort;
  }
});

const totalPages = computed(() =>
    Math.ceil(allFilteredCars.value.length / itemsPerPage)
);

const paginatedCars = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return allFilteredCars.value.slice(start, end);
});

const goToPage = (page) => {
  currentPage.value = page;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const visiblePages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;

  const delta = 2;
  const maxVisible = 3;

  if (total <= maxVisible) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = [];
  const leftBound = Math.max(1, current - delta);
  const rightBound = Math.min(total, current + delta);

  if (leftBound > 1) {
    pages.push(1);
    if (leftBound > 2) pages.push('...');
  }

  for (let i = leftBound; i <= rightBound; i++) {
    pages.push(i);
  }

  if (rightBound < total) {
    if (rightBound < total - 1) pages.push('...');
    pages.push(total);
  }

  return pages;
});

const isEllipsis = (page) => page === '...';

watch([() => props.filterBrand, () => props.filterTransmission, () => props.sort], () => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = Math.max(1, totalPages.value);
  } else {
    currentPage.value = 1;
  }
});

// Дополнительная проверка: если страница стала больше общего количества страниц
watch(totalPages, (newTotalPages) => {
  if (currentPage.value > newTotalPages && newTotalPages > 0) {
    currentPage.value = newTotalPages;
  } else if (newTotalPages === 0) {
    currentPage.value = 1;
  }
});
</script>

<template>
  <div class="wrapper">
    <div v-if="allFilteredCars.length === 0" class="no-results">
      <p>Автомобили не найдены</p>
    </div>

    <div v-else class="catalogue-list">
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

      <template v-for="page in visiblePages" :key="page">
        <button
            v-if="!isEllipsis(page)"
            @click="goToPage(page)"
            :class="{ active: page === currentPage }"
        >
          {{ page }}
        </button>
        <span
            v-else
            class="ellipsis"
        >
          …
        </span>
      </template>


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

.no-results {
  text-align: center;
  padding: 3rem 1rem;
  color: #666;
  font-size: 1.125rem;
}

.catalogue-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mobile {
    grid-template-columns: repeat(1, rem(330));
    margin-inline: auto;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  align-self: start;
  flex-wrap: wrap;

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

  .ellipsis {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    height: 40px;
    color: #999;
    user-select: none;
  }

  @include mobile {
    gap: 0.3rem;
    align-self: center;

    button {
      min-width: 32px;
      height: 32px;
      font-size: 13px;
    }

    .ellipsis {
      min-width: 32px;
      height: 32px;
      font-size: 14px;
    }
  }

  @media (max-width: 400px) {
    gap: 0.2rem;

    button {
      min-width: 28px;
      height: 28px;
      font-size: 11px;
    }

    .ellipsis {
      min-width: 28px;
      height: 28px;
      font-size: 12px;
    }
  }
}
</style>