<script setup>
import { ref } from 'vue';
import AdminTrucksAddPanel from '@/components/AdminPanels/AdminCatalogue/AdminTrucksAddPanel.vue';
import AdminMessages from '../components/AdminPanels/AdminMessages/AdminMessages.vue';
import AdminNews from '@/components/AdminPanels/AdminNews/AdminNews.vue';

const activePanel = ref('catalog')

function setActivePanel(panel) {
  activePanel.value = panel
}
</script>

<template>
  <div class="admin">
    <div class="admin__navigation">
      <button class="admin__open-panel" @click="setActivePanel('catalog')">Панель каталога</button>
      <button class="admin__open-panel" @click="setActivePanel('news')">Панель новостей</button>
      <button class="admin__open-panel" @click="setActivePanel('messages')">Панель обработки заявок</button>
    </div>
    <div class="adnin__panel">
      <AdminTrucksAddPanel v-if="activePanel === 'catalog'" />
      <AdminNews v-if="activePanel === 'news'" />
      <AdminMessages v-if="activePanel === 'messages'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin {
  display: flex;
  flex-direction: row;
  gap: 150px;

  &__navigation {
    display: flex;
    flex-direction: column;
    background-color: #545454;
  }

  &__open-panel {
    padding: 20px 10px;
    font-size: 16px;
    color: white;

    &:hover {
      background-color: #363636;
    }
  }

  &__panel{
    width: 100%;
  }
}
</style>