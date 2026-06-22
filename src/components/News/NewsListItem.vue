<script setup lang="js">
const props = defineProps({
  news: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <div class="news-item">
    <div class="news-item__image">
      <img :src="news.image_url" alt="">
    </div>

    <div class="news-item__text-info">
      <div class="news-item__text-info__date">
        {{ news.date }}
      </div>

      <div class="news-item__text-info__title">
        {{ news.title }}
      </div>

      <div class="news-item__text-info__desc">
        {{ news.preview_text }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
.news-item {
  color: var(--color-gray-dark);
  display: flex;
  flex-direction: column;
  background-color: var(--color-light-gray);
  transition: 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);

    img {
      transform: scale(1.03);
    }

    .news-item__image::after {
      opacity: 1;
    }
  }

  &__image {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgb(51, 51, 51, 0.25);
      opacity: 0;
      transition: 0.3s ease;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.3s ease;
      display: block;
    }
  }

  &__text-info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    &__date {
      font-size: 13px;
    }

    &__title {
      font-size: rem(14);
      font-weight: 600;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    &__desc {
      font-size: 15px;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>