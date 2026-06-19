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
    path: '' // https://agat-group.com/upload/76/76deed1fd50a0445044e4340653ab4be.png
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

const errors = ref({
  name: true,
  code: true,
  brand: true,
  model: true,
  price: true
})

const validateName = () => {
  if (form.value.name.trim().length > 1) {
    errors.value.name = false
  }
}

const validateCode = () => {
  if (form.value.code.trim().length > 2) {
    errors.value.code = false
  }
}

const validateBrand = () => {
  if (form.value.brand.trim().length > 1) {
    errors.value.brand = false
  }
}

const validateModel = () => {
  if (form.value.model.trim().length > 1) {
    errors.value.model = false
  }
}

const validatePrice = () => {
  if (form.value.price > 0) {
    errors.value.price = false
  }
}

const validateForm = () => {
  validateBrand()
  validateCode()
  validateModel()
  validateName()
  validatePrice()

  let valid = true

  for (let k in errors.value) {
    if (errors.value[k] === true) {
      valid = false
    }
  }

  if (valid) return true
}


const addTruck = () => {
  form.value.id = String(Date.now())
  form.value.uuid = crypto.randomUUID()
  form.value.preview_picture.id = String(Math.floor(Math.random() * (999999 - 1 + 1) + 1))

  if (form.value.preview_picture.path === '') {
    form.value.preview_picture.path = 'https://agat-group.com/upload/76/76deed1fd50a0445044e4340653ab4be.png'
  }

  if (validateForm()) {
    console.log(form.value)
    let carsL = JSON.parse(localStorage.getItem('cars'))
    carsL.unshift(form.value)
    localStorage.setItem('cars', JSON.stringify(carsL))
  }
}
</script>

<template>
  <div class="container">
    <h2>Добавить камаз</h2>
    <form class="form">
      <div class="form__section1">
        <label class="form__label">
          <span class="form__span">Имя:</span>
          <input class="form__input" v-model="form.name">
        </label>
        <label class="form__label">
          <span class="form__span">Код:</span>
          <input class="form__input" v-model="form.code">
        </label>
        <label class="form__label">
          <span class="form__span">Брэнд:</span>
          <input class="form__input" v-model="form.brand">
        </label>
        <label class="form__label">
          <span class="form__span">Модель:</span>
          <input class="form__input" v-model="form.model">
        </label>
        <label class="form__label">
          <span class="form__span">Цена:</span>
          <input class="form__input" type="number" v-model="form.price">
        </label>
      </div>
      <div class="form__section2">
        <h3>Добавить картинку превью:</h3>
        <input class="form__input" type="text" placeholder="Вставьте ссылку на изображение" v-model="form.preview_picture.path">
      </div>
      <div class="form__section3">
        <label class="form__label">
          <span class="form__span">Тип КПП:</span>
          <select class="form__input" v-model="form.propertyValues.transmission">
            <option value="" selected>Не указано</option>
            <option value="АКПП">АКПП</option>
            <option value="МКПП">МКПП</option>
          </select>
        </label>
        <label class="form__label">
          <span class="form__span">Тип двигателя:</span>
          <select class="form__input" v-model="form.propertyValues.engine_type">
            <option value="" selected>Не указано</option>
            <option value="Дизельный">Дизельный</option>
            <option value="Бензиновый">Бензиновый</option>
            <option value="Бензиновый/газовый">Бензиновый/газовый</option>
          </select>
        </label>
        <label class="form__label">
          <span class="form__span">Объем двигателя:</span>
          <input class="form__input" type="number" v-model="form.propertyValues.engine_volume">
        </label>
        <label class="form__label">
          <span class="form__span">Мощность двигателя (Л.с.):</span>
          <input class="form__input" type="number" v-model="form.propertyValues.engine_power">
        </label>
        <label class="form__label">
          <span class="form__span">Максимальная скорость:</span>
          <input class="form__input" type="number" v-model="form.propertyValues.max_speed">
        </label>
        <label class="form__label">
          <span class="form__span">Количество мест:</span>
          <input class="form__input" type="number" v-model="form.propertyValues.seats">
        </label>
        <label class="form__label">
          <span class="form__span">Длина:</span>
          <input class="form__input" type="number" v-model="form.propertyValues.length">
        </label>
        <label class="form__label">
          <span class="form__span">Ширина:</span>
          <input class="form__input" type="number" v-model="form.propertyValues.width">
        </label>
        <label class="form__label">
          <span class="form__span">Высота:</span>
          <input class="form__input" type="number" v-model="form.propertyValues.height">
        </label>
        <label class="form__label">
          <span class="form__span">Общая масса:</span>
          <input class="form__input" type="number" v-model="form.propertyValues.gross_weight">
        </label>
        <label class="form__label">
          <span class="form__span">Добавить изображения:</span>
          <input class="form__input">
        </label>
      </div>
      <button @click.prevent="addTruck" class="form__button">
        Добавить камаз
      </button>
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

  &__section1, &__section3 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  &__label {
    display: flex;
    width: 70%;
    justify-content: space-between;
  }


  &__input {
    border: 1px solid black;
  }

  &__button {
    @include flex-center();
    padding: .5rem 1rem;
    background-color: var(--color-yellow);
    width: fit-content;
    border: rem(1) solid var(--color-yellow);

    @include hover {
      border: rem(1) solid var(--color-black);
      font-weight: 500;
    }
  }
}
</style>