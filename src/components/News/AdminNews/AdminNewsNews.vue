<script setup>
import { ref, computed, onMounted } from 'vue'
import AdminSettingsIcon from '@/assets/admin-news/admin-settings.svg'
import Search from '@/assets/admin-news/Search.svg'
import Edit from '@/assets/admin-news/Edit.svg'
import Delete from '@/assets/admin-news/Delete.svg'
import {getNews, createNews, updateNews, deleteNews} from '@/services/storageServiceBrandsNews.js'

const news = ref([])
const userRequest = ref('')
const loadNews = () => {
  news.value = getNews()
}

const addNews = () => {
  const title = prompt('Введите заголовок новости:')
  if (!title || !title.trim()) return
  createNews({
    date: new Date().toLocaleDateString('ru-RU'),
    title: title.trim(),
    preview_text: '',
    full_text: '',
    image_url: '/news-page/default.jpg',
    brand: null
  })
  loadNews()
}

const editNewsItem = (item) => {
  const newTitle = prompt(`Редактировать новость "${item.title}"`, item.title)
  if (!newTitle || !newTitle.trim()) return
  updateNews(item.id, {
    title: newTitle.trim()
  })
  loadNews()
}

const removeNews = (id, title) => {
  if (confirm(`Удалить новость "${title}"?`)) {
    deleteNews(id)
    loadNews()
  }
}

const filteredNews = computed(() => {
  if (!userRequest.value) return news.value
  const query = userRequest.value.toLowerCase()
  return news.value.filter(item =>
      item.title.toLowerCase().includes(query)
  )
})

onMounted(() => {
  loadNews()
})
</script>

<template>
  <section class="admin-news">
    <div class="admin-news__content container">
      <div class="admin-news__content__title">
        <h2 class="title">НОВОСТИ</h2>
        <div>
          <button class="admin-add-btn" @click="addNews"><AdminSettingsIcon />Добавить новость</button>
        </div>
      </div>
      <div class="admin-news__search">
        <input type="text" class="admin-news__search-input" id="news-search" v-model="userRequest" placeholder="Найти новость по заголовку">
        <button class="admin-news__search-btn" id="news-search-btn"><Search /></button>
      </div>
      <div class="admin-news__list">
        <table class="news-table">
          <thead>
          <tr>
            <th>ID</th>
            <th style="text-align:center">
              Изображение
            </th>
            <th>Заголовок</th>
            <th>Бренд</th>
            <th style="text-align:center">
              Действия
            </th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="item in filteredNews" :key="item.id">
            <td>{{ item.id }}</td>
            <td style="text-align:center">
              <img :src="item.image_url" :alt="item.title" class="news-image">
            </td>
            <td>
              {{ item.title }}
            </td>
            <td>
              {{ item.brand || 'null' }}
            </td>
            <td>
              <div class="actions" style="display:flex; justify-content:center;">
                <button class="edit-btn" @click="editNewsItem(item)">
                  <Edit />
                </button>

                <button class="delete-btn" @click="removeNews(item.id, item.title)">
                  <Delete />
                </button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.title {
  color: var(--color-gray-dark);
  font-size: rem(28);
}

.admin-add-btn {
  display: flex;
  align-items: center;
  gap: rem(10);
  padding: rem(15) rem(48);
  border-radius: rem(5);
  background: var(--color-yellow);
  color: var(--color-gray);
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.admin-add-btn:hover {
  filter: brightness(0.95);
}

.admin-news {
  margin-top: rem(30);

  &__content {
    &__title {
      width: 100%;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: rem(20);
    }
  }

  &__list {
    width: 100%;
    overflow-x: auto;
    background: var(--color-white);
    border-radius: rem(8);
  }

  &__search {
    display: flex;
    align-items: center;

    &-input {
      border-radius: rem(5) 0 0 rem(5);
      width: rem(350);
      background: var(--color-light-gray);
      padding: rem(14) rem(13);
      border: none;
      outline: none;
    }

    &-btn {
      border-radius: 0 rem(5) rem(5) 0;
      padding: rem(11) rem(15);
      background: var(--color-light-gray);
      border: none;
      cursor: pointer;
      transition: 0.2s;
    }

    &-btn:hover {
      background: #e0e0e0;
    }
  }
}

.news-table {
  margin-top: rem(20);
  width: 100%;
  border-collapse: collapse;
  color: var(--color-gray-dark);
}

.news-table thead {
  background: var(--color-light-gray);
}

.news-table td {
  padding: 0 rem(16);
  font-size: rem(14);
  height: rem(70);
  vertical-align: middle;
}

.news-table th {
  padding: rem(10);
  font-size: rem(18);
}

.news-table th,
.news-table td {
  text-align: left;
  border-bottom: 1px solid #e5e5e5;
}

.news-image {
  width: rem(100);
  height: rem(60);
  object-fit: cover;
  border-radius: rem(5);
}

.actions {
  display: flex;
  gap: rem(10);
  align-items: center;
}

.edit-btn,
.delete-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  transition: 0.2s;
  padding: rem(5);
}

.edit-btn:hover {
  transform: scale(1.1);
}

.delete-btn:hover {
  transform: scale(1.1);
}
</style>
