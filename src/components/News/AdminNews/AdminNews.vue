<script setup lang="js">
  import AdminNewsBrands from '@/components/News/AdminNews/AdminNewsBrands.vue'
  import AdminNewsNews from '@/components/News/AdminNews/AdminNewsNews.vue'
</script>

<template>
  <div class="title container">
    <router-link to="/news" style="font-size: 14px">
      Назад
    </router-link>
    <h1>Управление новостями и брендами</h1>
  </div>
  <AdminNewsBrands />
  <AdminNewsNews />
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
.title{
  font-size: rem(30);
  font-weight: 500;
  margin-top: rem(30);
  color: var(--color-gray-dark);
}
</style>