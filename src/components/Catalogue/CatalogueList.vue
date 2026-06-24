<script setup>
import CatalogueCard from "@/components/Catalogue/CatalogueCard.vue";
import { onMounted, ref, computed, onUnmounted } from "vue";

const cars = ref([]);

const currentPage = ref(1);
const itemsPerPage = 9;

// Добавляем реактивную переменную для определения мобильного устройства
const isMobile = ref(window.innerWidth < 768);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(async () => {
  cars.value = JSON.parse(localStorage.getItem('cars'));
  window.addEventListener('resize', updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
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

// Вычисляем, какие страницы показывать
const visiblePages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;

  // На мобильных показываем меньше страниц
  const delta = isMobile.value ? 1 : 2;
  const maxVisible = isMobile.value ? 3 : 5;

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

      <router-link to="/admin-trucks">АДМИНКА</router-link>

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

  // Адаптив для мобильных устройств
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

    a {
      font-size: 11px;
      padding: 0 8px;
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

    a {
      font-size: 10px;
      padding: 0 6px;
    }
  }
}
</style>