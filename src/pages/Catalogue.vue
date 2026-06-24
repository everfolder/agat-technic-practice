<script setup>

import CatalogueFilter from "@/components/Catalogue/CatalogueFilter.vue";
import CatalogueList from "@/components/Catalogue/CatalogueList.vue";
import CatalogueBrands from "@/components/Catalogue/CatalogueBrands.vue";
import Filter from '@/assets/icons/filter.svg'
import CloseModal from "@/assets/icons/close-modal.svg";
</script>

<template>
  <div class="container catalogue">
    <h2>Коммерческая и спецтехника в ГК АГАТ</h2>
    <CatalogueBrands />
    <div class="catalogue__wrapper1">
    <h2>Каталог коммерческой техники в Нижнем Новгороде</h2>
      <button class="filter-btn" data-fancybox data-src="#filter-window"><Filter /> Фильтр</button>
      <div :style="{display: 'none'}">
        <div id="filter-window" class="burger-menu">
          <button data-fancybox-close class="burger-menu__btn">
            <CloseModal />
          </button>
          <CatalogueFilter class="filter-tablet"/>
        </div>
      </div>
    </div>
    <div class="catalogue__wrapper2">
      <CatalogueFilter class="filter"/>
      <CatalogueList />
    </div>
  </div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.filter-btn {
  @include flex-center;
  padding: .75rem 2rem;
  gap: 1rem;
  font-weight: 600;
  background-color: var(--color-yellow);

  @include tablet-above {
    display: none;
  }
}

.filter {
  @include tablet {
    display: none;
  }
}

.filter-tablet {
  display: block;
}

.catalogue {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block: 2rem;

  &__wrapper1 {
  display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
}
  &__wrapper2 {
    display: flex;
    gap: 1rem;
  }
}

.burger-menu {
  cursor: default;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__btn {
    align-self: end;
  }

  &__item {
    font-size: 1rem;
    width: fit-content;
    padding-right: 2rem;

    @include hover {
      color: var(--color-yellow);
      text-decoration: underline;
    }
  }
}

</style>