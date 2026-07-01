<script setup lang="js">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getNews } from '@/services/storageServiceBrandsNews.js'

const route = useRoute()

const news = computed(() => {
  return getNews().find(
      item => item.slug === route.params.slug
  )
})

const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <div v-if="news" class="news-content container">
    <div class="news-page-navigation">
      <router-link class="news-link" to="/">Главная</router-link>
      <div>/</div>
      <router-link class="news-link" to="/news">Новости</router-link>
      <div>/</div>
      {{news.title}}
    </div>
    <h1 class="title">{{ news.title }}</h1>
    <img :src="`${baseUrl}${news.image_url}`" :alt="news.title" style="width: 100%; margin: 20px 0;">
    <p class="date">{{ news.date }}</p>
    <div class="full-text">
      {{ news.full_text }}
    </div>
  </div>
  <div v-else>
    Новость не найдена
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/helpers" as *;
.news-content{
  font-size: rem(14);
  box-sizing: border-box;
  padding-top: rem(32);
  padding-bottom: rem(72);
}
.news-page-navigation, .news-link{
  color: var(--color-gray);
}
.news-link:hover{
  text-decoration: underline;
}
.news-page-navigation{
  display: inline-flex;
  gap: rem(10);
  margin-bottom: rem(56);
}
.title{
  font-size: rem(30);
  color: var(--color-gray-dark);
  font-weight: 500;
}
.date{
  margin-bottom: rem(32);
}
.full-text{
  line-height: 2;
}
</style>