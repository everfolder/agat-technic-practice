<script setup>
import {ref} from "vue";

const form = ref({
  id: '',
  uuid: '',
  name: '',
  code: '',
  brand: '',
  model: '',
  price: '',
  preview_picture: {
    id: '',
    path: ''
  },
  propertyValues: {
    transmission: '',
    engine_type: '',
    engine_volume: '',
    engine_power: '',
    max_speed: '',
    seats: '',
    length: '',
    width: '',
    height: '',
    gross_weight: '',
    images: [],
  }
})

const previewUrl = ref()

const setPrevImage = (e) => {

  const image = e.target.files[0]

  const reader = new FileReader()
  reader.onload = e => {
    previewUrl.value = e.target.result
  }
  reader.readAsDataURL(image)


}
</script>

<template>
  <div class="container">
    <h2>Добавить камаз</h2>
    <form class="form">
      <div class="form__section1">
        <label class="form__label">
          <span class="form__span">Имя:</span>
          <input class="form__input">
        </label>
        <label class="form__label">
          <span class="form__span">Код:</span>
          <input class="form__input">
        </label>
        <label class="form__label">
          <span class="form__span">Брэнд:</span>
          <input class="form__input">
        </label>
        <label class="form__label">
          <span class="form__span">Модель:</span>
          <input class="form__input">
        </label>
        <label class="form__label">
          <span class="form__span">Цена:</span>
          <input class="form__input">
        </label>
      </div>
      <div class="form__section2">
        <h3>Добавить картинку превью:</h3>
        <input type="file" accept="image/jpeg" @change="setPrevImage($event)">
        <img
            :src="previewUrl"
            alt="#"
            style="max-width: 300px;"
        >
      </div>
    </form>
  </div>

</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;


.form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &__section1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  &__label {
    display: flex;
    width: 50%;
    justify-content: space-between;
  }


  &__input {
    border: 1px solid black;
  }


}
</style>