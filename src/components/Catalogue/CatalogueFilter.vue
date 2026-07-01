<script setup>

import {ref} from "vue";
import FilterDrop from "@/components/Catalogue/FilterDrop.vue";

const typesOfCar = ref([
  {name: 'Все', value: ''},
  {name: 'Спецтехника', value: 'Спецтехника'},
  {name: 'Комтехника', value: 'Комтехника'},
])

const brands = ref([
  {name: 'Kamaz'},
  {name: 'Daewoo Trucks'},
  {name: 'ГАЗ'},
  {name: 'MAZ'},
  {name: 'Scania'},
  {name: 'Foton'},
  {name: 'Shacman'},
])

const transmission = ref(['МКПП', 'АКПП'])

const activeType = ref('')

const swapType = (t) => {
  activeType.value = t
  console.log(activeType.value)
}

const activeTransmission = ref('')
const activeBrand = ref('')
const activeSort = ref('')
const emit = defineEmits(['selectBrand', 'selectTransmission', 'selectSort'])

const setActiveBrand = b => {
  if (activeBrand.value === b) {
    activeBrand.value = ''
  } else {
    activeBrand.value = b
  }
  emit('selectBrand', activeBrand.value)
}


const setActiveTransmission = t => {
  if (activeTransmission.value === t) {
    activeTransmission.value = ''
  } else {
    activeTransmission.value = t
  }
  emit('selectTransmission', activeTransmission.value)
}

const setActiveSort = s => {
  if (activeSort.value === s) {
    activeSort.value = ''
  } else {
    activeSort.value = s
  }
  console.log(activeSort.value)
  emit('selectSort', activeSort.value)
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
      <div class="filter__sort">
        <button @click="setActiveSort('inc')" class="filter__sort-btn" :class="{'active': activeSort === 'inc'}">Цена (Возрастание) ↑</button>
        <button @click="setActiveSort('dec')" class="filter__sort-btn" :class="{'active': activeSort === 'dec'}">Цена (Убывание) ↓</button>
      </div>
      <FilterDrop title="Бренды" class="filter__brands">
        <div @click="setActiveBrand(b.name)" v-for="b in brands" class="drop-item" :class="{'active-item': activeBrand === b.name}">
          {{b.name}}
        </div>
      </FilterDrop>
      <FilterDrop title="Тип КПП" class="filter__products">
        <div @click="setActiveTransmission(t)" class="drop-item" v-for="t in transmission" :class="{'active-item': activeTransmission === t}">
          {{t}}
        </div>
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
  min-width: rem(295);
  height: fit-content;


  @include tablet {
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

  &__sort {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    &-btn {
      background-color: var(--color-gray-lite-2);
      @include tablet {
        padding: .5rem 1rem;
      }
    }
  }
}

.type {
  background-color: var(--color-gray-lite);
  padding: .25rem .5rem;
}

.drop-item {
  cursor: pointer;
}

.active {
  background-color: var(--color-gray-dark);
  color: var(--color-white);
}

.active-item {
  font-weight: 500;
}
</style>