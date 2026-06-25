<script setup>
import { ref, onMounted, computed } from 'vue'
import AdminSettingsIcon from '@/assets/admin-news/admin-settings.svg'
import Search from '@/assets/admin-news/Search.svg'
import Edit from '@/assets/admin-news/Edit.svg'
import Delete from '@/assets/admin-news/Delete.svg'
import { getBrands, createBrand, updateBrand, deleteBrand } from '@/services/storageServiceBrandsNews.js'
import ModalAdminNews from "@/components/News/AdminNews/ModalAdminNews.vue";

const brands = ref([])
const searchQuery = ref('')
const loadBrands = () => {
  brands.value = getBrands()
}
const showModal = ref(false)
const newBrandName  = ref('')

const addBrand = () => {
  showModal.value = true
  if (name && name.trim()) {
    const newBrand = {
      name: name.trim(),
      slug: name.trim().toLowerCase().replace(/\s+/g, '-'),
      img: '/logos-color/default.jpg',
      description: ''
    }
    createBrand(newBrand)
    loadBrands()
  }
}
const closeModal = () => {
  showModal.value = false
}
const saveBrand = () => {
  if (!newBrandName.value.trim()) return
  showModal.value = false
  newBrandName.value = ''
}
const editBrand = (brand) => {
  const newName = prompt(`Редактировать бренд "${brand.name}":`, brand.name)
  if (newName && newName.trim()) {
    updateBrand(brand.id, {
      name: newName.trim(),
      slug: newName.trim().toLowerCase().replace(/\s+/g, '-')
    })
    loadBrands()
  }
}

const removeBrand = (id, name) => {
  if (confirm(`Вы уверены, что хотите удалить бренд "${name}"?`)) {
    deleteBrand(id)
    loadBrands()
  }
}

const filteredBrands = computed(() => {
  if (!searchQuery.value) return brands.value
  const query = searchQuery.value.toLowerCase()
  return brands.value.filter(b =>
      b.name.toLowerCase().includes(query) ||
      b.slug.toLowerCase().includes(query)
  )
})

onMounted(() => {
  loadBrands()
})
</script>

<template>
  <section class="admin-brands">
    <div class="admin-brands__content container">
      <div class="admin-brands__content__title">
        <h2 class="title">БРЕНДЫ</h2>
        <div>
          <button class="admin-add-btn" @click="addBrand">
            <AdminSettingsIcon /> Добавить бренд
          </button>
        </div>
      </div>

      <div class="admin-brands__search">
        <input type="text" class="admin-brands__search-input" id="brands-search" v-model="searchQuery" placeholder="Найти бренд по названию">
        <button class="admin-brands__search-btn" id="brands-search-btn"><Search /></button>
      </div>

      <div class="admin-brands__list">
        <table class="brands-table">
          <thead>
          <tr>
            <th>ID</th>
            <th style="text-align: center">Логотип</th>
            <th>Название</th>
            <th>Slug</th>
            <th style="text-align: center">Действия</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="brand in filteredBrands" :key="brand.id">
            <td>{{ brand.id }}</td>
            <td style="text-align: center">
              <img :src="brand.img" :alt="brand.name" class="brand-logo">
            </td>
            <td>{{ brand.name }}</td>
            <td>{{ brand.slug }}</td>
            <td>
              <div class="actions" style="display: flex; justify-content: center;">
                <button class="edit-btn" @click="editBrand(brand)">
                  <Edit />
                </button>
                <button class="delete-btn" @click="removeBrand(brand.id, brand.name)">
                  <Delete />
                </button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <ModalAdminNews :is-open="showModal">
      <div><p>МОДАЛочка</p></div>
      <button @click="closeModal">X</button>
    </ModalAdminNews>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
.title{
  color: var(--color-gray-dark);
  font-size: rem(28);
}
.admin-add-btn{
  display: flex;
  align-items: center;
  gap: rem(10);
  padding: rem(15) rem(48) rem(15) rem(48);
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
.admin-brands{
  margin-top: rem(30);
  &__content{
    &__title{
      width: 100%;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__list{
    width: 100%;
    overflow-x: auto;
    background: var(--color-white);
    border-radius: 8px;
  }

  &__search{
    display: flex;
    align-items: center;

    &-input{
      border-radius: rem(5) 0 0 rem(5);
      width: rem(350);
      background: var(--color-light-gray);
      padding: rem(14) rem(13) rem(14) rem(13);
      border: none;
      outline: none;
    }
    &-btn{
      border-radius: 0 rem(5) rem(5) 0;
      padding: rem(11) rem(15) rem(11) rem(15);
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

.brands-table {
  margin-top: rem(20);
  width: 100%;
  border-collapse: collapse;
  color: var(--color-gray-dark);
}

.brands-table thead {
  background: var(--color-light-gray)
}
.brands-table td{
  padding: 0 rem(16) 0 rem(16);
  font-size: rem(14);
  height: rem(60);
  vertical-align: middle;
}
.brands-table th{
  padding: rem(10);
  font-size: rem(18);
}
.brands-table th,
.brands-table td {
  text-align: left;
  border-bottom: 1px solid #e5e5e5;
}

.brand-logo {
  max-height: 40px;
  max-width: 100px;
  object-fit: contain;
}

.actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.edit-btn,
.delete-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 18px;
  transition: 0.2s;
  padding: 5px;
}

.edit-btn:hover {
  transform: scale(1.1);
  color: #0056b3;
}

.delete-btn:hover {
  transform: scale(1.1);
  color: #dc3545;
}
</style>