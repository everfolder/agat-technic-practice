<script setup>
import {ref} from "vue";
import Delete from '@/assets/icons/delete.svg'
import Edit from '@/assets/icons/edit.svg'

const props = defineProps({
  car: {
    type: Object,
    required: true
  }
})

const price = Number(props.car.price).toLocaleString('ru-RU')

const emit = defineEmits(['delete'])

const removeTruck = id => {
  console.log(id)
  emit('delete', id)

}



</script>

<template>
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

        <div class="card__prev-info-buttons">
          <router-link :to="`/admin-trucks/${props.car.id}`">
            <button class="card__prev-info-buttons-edit"><Edit class="icon"/></button>
          </router-link>
          <button @click="removeTruck(props.car.id)" class="card__prev-info-buttons-delete"><Delete class="icon"/></button>
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

.card {
  border: rem(1) solid var(--color-yellow);

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
        @include abs-center;
      }
    }
  }

  &__prev-info {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;

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

    &-buttons{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      &-edit {
        background-color: var(--color-yellow);
        width: 100%;
        padding-block: .5rem;
        @include flex-center();
        border: rem(1) solid var(--color-yellow);
        @include hover {
          border: rem(1) solid var(--color-black);
        }
      }

      &-delete {
        background-color: red;
        width: 100%;
        padding-block: .5rem;
        @include flex-center();
        border: rem(1) solid red;
        @include hover {
          border: rem(1) solid var(--color-black);
        }
      }
    }
  }
}

.icon {
  width: 1.75rem;
  height: 1.75rem;
}
</style>