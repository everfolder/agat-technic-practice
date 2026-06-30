<script setup>
import {ref} from "vue";
import Cart from '@/assets/icons/cart.svg'
import Arrow from '@/assets/icons/arrow-right.svg'

const props = defineProps({
  car: {
    type: Object,
    required: true
  }
})

const price = Number(props.car.price).toLocaleString('ru-RU')



</script>

<template>
  <router-link :to="`/catalogue/${props.car.id}`" class="card-link" target="_blank">
    <div class="card">
      <div class="card__inner">
        <div class="card__prev-image">
          <img
              :src="props.car.preview_picture.path"
              alt="#"
              class="card__prev-image-img"
          >
        </div>
        <div class="card__prev-info">
          <div class="card__prev-info-title">
            {{props.car.brand}} {{props.car.model}}
          </div>
          <div class="card__prev-info-desc">
            {{props.car.propertyValues.body_type}}
            {{props.car.propertyValues.engine_volume}} Л.
            /
            {{props.car.propertyValues.engine_power}} л. с.,
            {{props.car.propertyValues.gear_type}} привод,
            {{props.car.propertyValues.engine_type}}
          </div>
          <div class="card__prev-info-price">
            {{price}} Р
          </div>
          <div class="card__prev-info-order">
            <Cart />
            Доступно для заказа
          </div>
          <button class="card__prev-info-button">
            Узнать цену
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  </router-link>

</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;
.card-link {
  color: var(--color-black);
}

.card {
  border: rem(1) solid var(--color-yellow);
  height: 100%;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__prev {
    &-image {
      position: relative;
      width: 100%;
      height: fluid(220, 210);
      overflow: hidden;

      &-img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }

  &__prev-info {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    height: 100%;

    &-title {
      font-weight: 500;
      font-size: fluid(16, 14);
    }

    &-price {
      font-size: rem(20);
      font-weight: 500;
    }

    &-order {
      display: flex;
      align-items: center;
      gap: .5rem;
      font-size: rem(12);
    }

    &-button {
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: .5rem;
      padding-block: .75rem;
      width: 100%;
      @include flex-center();
      background-color: var(--color-yellow);
      justify-self: end;
    }
  }
}
</style>