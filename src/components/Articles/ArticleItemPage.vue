<script setup lang="js">
import { useRoute } from 'vue-router'

const route = useRoute()
const article = JSON.parse(
    localStorage.getItem('currentArticle')
)
</script>

<template>
  <div class="news-content container">
    <div class="news-page-navigation">
      <router-link class="news-link" to="/">Главная</router-link>
      <div>/</div>
      <router-link class="news-link" to="/articles">Статьи</router-link>
      <div>/</div>
      {{article.title}}
    </div>
    <h1 class="title">{{ article.title }}</h1>
    <img :src="article.img_url" :alt="article.title" style="width: 100%; margin: 20px 0;">
    <p class="date">{{ article.date }}</p>
    <div class="full-text">
      {{ article.full_text }}
    </div>
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