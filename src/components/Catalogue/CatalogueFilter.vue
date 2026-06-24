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
])

const products = ref([
  {name: 'Цельнометаллические автомобили'},
  {name: 'Прицепная техника'},
  {name: 'Грузовая техника'},
])

const activeType = ref('')

const swapType = (t) => {
  activeType.value = t
  console.log(activeType.value)
}

const activeBrand = ref([])

const setActiveBrand = b => {
  if (activeBrand.value.find(br => br === b)) {
    activeBrand.value = activeBrand.value.filter(br => br !== b)
  } else {
    activeBrand.value.push(b)
  }
  console.log(activeBrand.value)
}

const activeProducts = ref([])

const setActiveProduct = p => {
  if (activeProducts.value.find(pr => pr === p)) {
    activeProducts.value = activeProducts.value.filter(pr => pr !== p)
  } else {
    activeProducts.value.push(p)
  }
  console.log(activeProducts.value)
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
      <FilterDrop title="Бренды" class="filter__brands">
        <div @click="setActiveBrand(b.name)" v-for="b in brands" class="drop-item" :class="{'active-item': activeBrand.find(br => br === b.name)}">
          {{b.name}}
        </div>
      </FilterDrop>
      <FilterDrop title="Продукция" class="filter__products">
        <div @click="setActiveProduct(p.name)" class="drop-item" v-for="p in products" :class="{'active-item': activeProducts.find(pr => pr === p.name)}">
          {{p.name}}
        </div>
      </FilterDrop>
      <div class="filter__transmission">
        <p class="filter__transmission-title">
          Коробка передач
        </p>
        <div class="filter__transmission-checks">
          <label>
            <input type="checkbox">
            <span>МКПП</span>
          </label>
          <label>
            <input type="checkbox">
            <span>АКПП</span>
          </label>
        </div>
      </div>
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

  &__transmission {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &-title {
      font-weight: 600;
    }

    &-checks {
      display: flex;
      align-items: center;
      gap: 2rem;

      label {
        display: flex;
        align-items: center;
        gap: .25rem;
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