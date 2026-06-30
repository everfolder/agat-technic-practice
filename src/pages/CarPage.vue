<script setup>
import {useRoute} from "vue-router";
import {ref, computed} from "vue";
import CarPagePropertyItem from "@/components/CarPagePropertyItem.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const route = useRoute()

const carId = route.params.id
console.log(carId)

const car = ref(JSON.parse(localStorage.getItem('cars')).find(car => car.id === carId))
console.log(car.value)

const swiperModules = [Navigation, Pagination]

const hasImages = computed(() => {
  return car.value?.propertyValues?.images?.length > 0
})
</script>

<template>
  <div class="container car-page">
    <div class="car-page__head">
      <h2>{{car.brand}} {{car.model}}</h2>
      <button class="car-page__credit">
        Купить в кредит
      </button>
      <button class="car-page__check-price">
        Узнать цену
      </button>
    </div>
    <div class="car-page__main-info">
      <div class="car-page__main-info-image">
        <swiper
            v-if="hasImages"
            :modules="swiperModules"
            :slides-per-view="1"
            :space-between="0"
            :navigation="true"
            :pagination="{ clickable: true }"
            class="car-page__swiper"
        >
          <swiper-slide
              v-for="image in car.propertyValues.images"
              :key="image.id"
              class="car-page__slide"
          >
            <img
                :src="image.path"
                :alt="`${car.brand} ${car.model}`"
                class="car-page__slide-image"
            >
          </swiper-slide>
        </swiper>

        <div v-else class="car-page__preview">
          <img
              :src="car.preview_picture.path"
              :alt="`${car.brand} ${car.model}`"
              class="car-page__preview-image"
          >
        </div>
      </div>
      <div class="car-page__main-info-property">
        <h3>Технические характеристики</h3>
        <div class="car-page__main-info-property-data">
          <CarPagePropertyItem parameter="Трансмиссия" :value="car.propertyValues.transmission"/>
          <CarPagePropertyItem parameter="Тип привода" :value="car.propertyValues.gear_type"/>
          <CarPagePropertyItem parameter="Тип двигателя" :value="car.propertyValues.engine_type"/>
          <CarPagePropertyItem parameter="Объем двигателя" :value="car.propertyValues.engine_volume"/>
        </div>
      </div>
    </div>
    <h2>Подробнее об автомобиле</h2>
    <div class="car-page__properties">
      <div class="car-page__properties-container">
        <h3>Двигатель</h3>
        <div class="car-page__properties-data">
          <CarPagePropertyItem parameter="Тип двигателя" :value="car.propertyValues.engine_type"/>
          <CarPagePropertyItem parameter="Крутящий момент" :value="car.propertyValues.turning_torque"/>
          <CarPagePropertyItem parameter="Количество цилиндров" :value="car.propertyValues.cylinder_count"/>
          <CarPagePropertyItem parameter="Объем двигателя" :value="car.propertyValues.engine_volume"/>
          <CarPagePropertyItem parameter="Расположение цилиндров" :value="car.propertyValues.cylinder_configuration"/>
          <CarPagePropertyItem parameter="Мощность двигателя л.с. при об/мин" :value="car.propertyValues.engine_power"/>
          <CarPagePropertyItem parameter="Рекомендуемое топливо" :value="car.propertyValues.gas_type"/>
        </div>
      </div>
      <div class="car-page__properties-container">
        <h3>Трансмиссия</h3>
        <div class="car-page__properties-data">
          <CarPagePropertyItem parameter="Трансмиссия" :value="car.propertyValues.transmission"/>
          <CarPagePropertyItem parameter="Тип привода" :value="car.propertyValues.gear_type"/>
          <CarPagePropertyItem parameter="Число передач" :value="car.propertyValues.klapan_count"/>
        </div>
      </div>
      <div class="car-page__properties-container">
        <h3>Габариты</h3>
        <div class="car-page__properties-data">
          <CarPagePropertyItem parameter="Длина, мм" :value="car.propertyValues.length"/>
          <CarPagePropertyItem parameter="Ширина, мм" :value="car.propertyValues.width"/>
          <CarPagePropertyItem parameter="Высота, мм" :value="car.propertyValues.height"/>
          <CarPagePropertyItem parameter="Диаметр разворота,м" :value="car.propertyValues.turn_diameter"/>
        </div>
      </div>
      <div class="car-page__properties-container">
        <h3>Подвеска</h3>
        <div class="car-page__properties-data">
          <CarPagePropertyItem parameter="Колесная база, мм" :value="car.propertyValues.wheel_base"/>
          <CarPagePropertyItem parameter="Дорожный просвет, мм" :value="car.propertyValues.road_clearance"/>
        </div>
      </div>
      <div class="car-page__properties-container">
        <h3>Динамические характеристики</h3>
        <div class="car-page__properties-data">
          <CarPagePropertyItem parameter="Максимальная скорость, км/ч" :value="car.propertyValues.max_speed"/>
        </div>
      </div>
      <div class="car-page__properties-container">
        <h3>Общие</h3>
        <div class="car-page__properties-data">
          <CarPagePropertyItem parameter="Передние шины" :value="car.propertyValues.front_tire"/>
          <CarPagePropertyItem parameter="Передние шины" :value="car.propertyValues.back_tire"/>
          <CarPagePropertyItem parameter="Тип кузова" :value="car.propertyValues.body_type"/>
        </div>
      </div>
      <div class="car-page__properties-container">
        <h3>Размеры</h3>
        <div class="car-page__properties-data">
          <CarPagePropertyItem parameter="Количество мест" :value="car.propertyValues.seats"/>
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

.car-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block: 2rem;

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  &__credit {
    @include hover {
      text-decoration: underline;
    }
  }

  &__check-price {
    padding: 1rem 3rem;
    background-color: var(--color-yellow);
    font-weight: 600;
    border: rem(1) solid var(--color-yellow);

    @include hover {
      border: rem(1) solid var(--color-black);
    }
  }

  &__main-info {
    display: flex;
    width: 100%;
    gap: 3rem;

    @include tablet {
      flex-direction: column;
    }

    &-image {
      width: 50%;
      flex-shrink: 0;

      @include tablet {
        width: 100%;
      }
    }

    &-property {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      @include tablet {
        width: 100%;
      }

      &-data {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;
      }
    }
  }

  &__swiper {
    width: 100%;
    aspect-ratio: 16/9;
  }

  &__slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__preview {
    width: 100%;
    aspect-ratio: 16/9;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-gray-light);
    border-radius: 4px;
    overflow: hidden;

    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__properties {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @include mobile {
      grid-template-columns: repeat(1, 1fr);
    }

    &-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    &-data {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
}
</style>