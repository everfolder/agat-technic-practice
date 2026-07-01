<script setup lang="js">
import { ref, computed } from 'vue'
import NewsListItem from '@/components/News/NewsListItem.vue'

const props = defineProps({
  news: {
    type: Array,
    required: true,
    default: () => []
  }
})

const currentPage = ref(1)
const itemsPerPage = 12
const totalPages = computed(() => {
  return Math.ceil(props.news.length / itemsPerPage)
})
const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return props.news.slice(start, end)
})
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

</script>

<template>
  <section class="news">
    <div class="news-content container">
      <div class="news-content__list">
        <NewsListItem v-for="singleNews in paginatedNews" :key="singleNews.id" :news=singleNews />
      </div>
      <div v-if="totalPages > 1" class="pagination">
        <button v-if="currentPage > 1" class="pagination-btn pagination-arrow" @click="goToPage(currentPage - 1)">←</button>
        <button v-for="page in totalPages" :key="page" class="pagination-btn" :class="{ active: currentPage === page }" @click="goToPage(page)">{{ page }}</button>
        <button> <router-link to="/admin-news">...</router-link></button>
        <button v-if="currentPage < totalPages" class="pagination-btn pagination-arrow" @click="goToPage(currentPage + 1)">→</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.news {
  padding-block: rem(20);

  @include mobile {
    padding-block: rem(12);
  }
}

.news-content {
  display: flex;
  flex-direction: column;
  gap: rem(40);

  @include mobile {
    gap: rem(20);
  }
}

.news-content__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: rem(32);

  @include laptop {
    grid-template-columns: repeat(2, 1fr);
    gap: rem(24);
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: rem(16);
  }
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: rem(10);
  margin-top: rem(20);
  flex-wrap: wrap;

  @include mobile {
    justify-content: center;
    gap: rem(6);
  }
}

.pagination-btn {
  width: 44px;
  height: 44px;
  border: 1px solid #d9d9d9;
  background: white;
  color: #2b2b2b;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.25s ease;

  &.active {
    background: #2d2d2d;
    color: white;
    border-color: #2d2d2d;
  }
}

.pagination-arrow {
  font-size: 22px;
}
</style>