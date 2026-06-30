<script setup lang="js">
import PromoListItem from '@/components/Promo/PromoListItem.vue'
const props = defineProps({
  promo: {
    type: Array,
    required: true
  }
})
</script>

<template>
<section class="news">
  <div class="news-content container">
    <div class="news-content__list">
      <PromoListItem v-for="promo in promo" :key="promo.id" :promo="promo" />
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.news {
  padding-block: rem(20);
}

.news-content {
  display: flex;
  flex-direction: column;
  gap: rem(40);
}
.news-content__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: rem(32);
}
.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 20px;
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