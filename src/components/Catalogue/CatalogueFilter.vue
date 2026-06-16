<script setup>

import {ref} from "vue";
import FilterDrop from "@/components/Catalogue/FilterDrop.vue";

const typesOfCar = ref([
  {name: 'Все', value: ''},
  {name: 'Спецтехника', value: 'Спецтехника'},
  {name: 'Комтехника', value: 'Комтехника'},
])

const activeType = ref('')

const swapType = (t) => {
  activeType.value = t
  console.log(activeType.value)
}

</script>

<template>
  <div class="filter">
    <div class="filter__inner">
      <h3 class="filter__title">Подобрать технику</h3>
      <div class="filter__types">
        <button v-for="type in typesOfCar" class="type" @click="swapType(type.value)" :class="{'active': type.value === activeType}">
          {{type.name}}
        </button>
      </div>
      <FilterDrop title="Бренды">

      </FilterDrop>
    </div>
  </div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.filter {
  border: rem(1) solid var(--color-gray-lite-2);
  padding: 1rem;
  width: rem(295);

  @include tablet {
    width: rem(312);
  }

  @include mobile {
    width: 100%;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__title {
    text-align: center;
  }

  &__types {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
}

.type {
  background-color: var(--color-gray-lite);
  padding: .25rem .5rem;
}

.active {
  background-color: var(--color-gray-dark);
  color: var(--color-white);
}
</style>