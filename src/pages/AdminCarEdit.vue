<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

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
    gear_type: '',
    transmission: '',
    engine_type: '',
    body_type: '',
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
});

// Для добавления изображений
const imageInput = ref('');

const errors = ref({
  name: {
    value: false,
    text: "Длина имени >= 2 символов"
  },
  code: {
    value: false,
    text: "Длина кода >= 3 символов"
  },
  brand: {
    value: false,
    text: "Длина бренда >= 2 символов"
  },
  model: {
    value: false,
    text: "Длина модели >= 2 символов"
  },
  price: {
    value: false,
    text: "Цена не может быть меньше 1"
  },
  transmission: {
    value: false,
    text: "Выберите один из вариантов"
  },
  engine_type: {
    value: false,
    text: "Выберите один из вариантов"
  },
  engine_volume: {
    value: false,
    text: "Объем двигателя > 0"
  },
  engine_power: {
    value: false,
    text: "Мощность двигателя > 0"
  },
  max_speed: {
    value: false,
    text: "Максимальная скорость > 0"
  },
  seats: {
    value: false,
    text: "Количество мест > 0"
  },
  length: {
    value: false,
    text: "Длина > 0"
  },
  width: {
    value: false,
    text: "Ширина > 0"
  },
  height: {
    value: false,
    text: "Высота > 0"
  },
  gross_weight: {
    value: false,
    text: "Общий вес > 0"
  },
  body_type: {
    value: false,
    text: "Выберите один из вариантов"
  },
  gear_type: {
    value: false,
    text: "Выберите один из вариантов"
  }
});

// Загружаем данные
const loadCar = () => {
  const carId = route.params.id;
  const cars = JSON.parse(localStorage.getItem('cars')) || [];
  const car = cars.find(c => c.id === carId);

  if (car) {
    form.value = JSON.parse(JSON.stringify(car));
  }
};

const validateName = () => {
  if (form.value.name.trim().length < 2) {
    errors.value.name.value = true
  } else {
    errors.value.name.value = false
  }
}

const validateCode = () => {
  if (form.value.code.trim().length < 3) {
    errors.value.code.value = true
  } else {
    errors.value.code.value = false
  }
}

const validateBrand = () => {
  if (form.value.brand.trim().length < 2) {
    errors.value.brand.value = true
  } else {
    errors.value.brand.value = false
  }
}

const validateModel = () => {
  if (form.value.model.trim().length < 2) {
    errors.value.model.value = true
  } else {
    errors.value.model.value = false
  }
}

const validatePrice = () => {
  if (form.value.price < 1) {
    errors.value.price.value = true
  } else {
    errors.value.price.value = false
  }
}

const validateTransmission = () => {
  if (form.value.propertyValues.transmission === '') {
    errors.value.transmission.value = true
  } else {
    errors.value.transmission.value = false
  }
}

const validateEngineType = () => {
  if (form.value.propertyValues.engine_type === '') {
    errors.value.engine_type.value = true
  } else {
    errors.value.engine_type.value = false
  }
}

const validateBodyType = () => {
  if (form.value.propertyValues.body_type === '') {
    errors.value.body_type.value = true
  } else {
    errors.value.body_type.value = false
  }
}

const validateGearType = () => {
  if (form.value.propertyValues.gear_type === '') {
    errors.value.gear_type.value = true
  } else {
    errors.value.gear_type.value = false
  }
}

const validateEngineVolume = () => {
  if (form.value.propertyValues.engine_volume < 1) {
    errors.value.engine_volume.value = true
  } else {
    errors.value.engine_volume.value = false
  }
}

const validateEnginePower = () => {
  if (form.value.propertyValues.engine_power < 1) {
    errors.value.engine_power.value = true
  } else {
    errors.value.engine_power.value = false
  }
}

const validateMaxSpeed = () => {
  if (form.value.propertyValues.max_speed < 1) {
    errors.value.max_speed.value = true
  } else {
    errors.value.max_speed.value = false
  }
}

const validateSeats = () => {
  if (form.value.propertyValues.seats < 1) {
    errors.value.seats.value = true
  } else {
    errors.value.seats.value = false
  }
}

const validateLength = () => {
  if (form.value.propertyValues.length < 1) {
    errors.value.length.value = true
  } else {
    errors.value.length.value = false
  }
}

const validateWidth = () => {
  if (form.value.propertyValues.width < 1) {
    errors.value.width.value = true
  } else {
    errors.value.width.value = false
  }
}

const validateHeight = () => {
  if (form.value.propertyValues.height < 1) {
    errors.value.height.value = true
  } else {
    errors.value.height.value = false
  }
}

const validateGrossWeight = () => {
  if (form.value.propertyValues.gross_weight < 1) {
    errors.value.gross_weight.value = true
  } else {
    errors.value.gross_weight.value = false
  }
}

const validateForm = () => {
  validateBrand()
  validateCode()
  validateModel()
  validateName()
  validatePrice()
  validateTransmission()
  validateEngineType()
  validateBodyType()
  validateEngineVolume()
  validateEnginePower()
  validateMaxSpeed()
  validateSeats()
  validateLength()
  validateWidth()
  validateHeight()
  validateGrossWeight()
  validateGearType()

  let valid = true

  for (let k in errors.value) {
    if (errors.value[k].value === true) {
      valid = false
    }
  }

  if (valid) return true
}

const addImage = () => {
  if (form.value.propertyValues.images.length >= 4) return;
  if (!imageInput.value.trim()) return;

  form.value.propertyValues.images.push({
    id: String(Math.floor(Math.random() * (999999 - 1 + 1) + 1)),
    path: imageInput.value.trim()
  });

  imageInput.value = '';
};

const removeImage = (index) => {
  form.value.propertyValues.images.splice(index, 1);
};

const updateTruck = () => {
  if (validateForm()) {
    const cars = JSON.parse(localStorage.getItem('cars')) || [];
    const index = cars.findIndex(c => c.id === form.value.id);

    if (index !== -1) {
      cars[index] = JSON.parse(JSON.stringify(form.value));
      localStorage.setItem('cars', JSON.stringify(cars));
    }

    router.push('/admin-trucks');
  }
};

onMounted(() => {
  loadCar();
});
</script>

<template>
  <div class="container">
    <h2>Редактирование автомобиля</h2>

    <form class="form">
      <div class="form__section1">
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Имя:</span>
            <input class="form__input" v-model="form.name" @input="validateName">
          </div>
          <p v-if="errors.name.value" class="form__error">
            {{errors.name.text}}
          </p>
        </label>
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Код:</span>
            <input class="form__input" v-model="form.code" @input="validateCode">
          </div>
          <p v-if="errors.code.value" class="form__error">
            {{errors.code.text}}
          </p>
        </label>
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Брэнд:</span>
            <input class="form__input" v-model="form.brand" @input="validateBrand">
          </div>
          <p v-if="errors.brand.value" class="form__error">
            {{errors.brand.text}}
          </p>
        </label>
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Модель:</span>
            <input class="form__input" v-model="form.model" @input="validateModel">
          </div>
          <p v-if="errors.model.value" class="form__error">
            {{errors.model.text}}
          </p>
        </label>
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Цена:</span>
            <input class="form__input" v-model="form.price" type="number" @input="validatePrice">
          </div>
          <p v-if="errors.price.value" class="form__error">
            {{errors.price.text}}
          </p>
        </label>
      </div>

      <div class="form__section2">
        <h3>Картинка превью:</h3>
        <input
            class="form__input"
            type="text"
            placeholder="Вставьте ссылку на изображение"
            v-model="form.preview_picture.path"
        >
      </div>

      <div class="form__section3">
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Тип КПП:</span>
            <select class="form__input" v-model="form.propertyValues.transmission" @change="validateTransmission">
              <option value="" selected disabled>Не указано</option>
              <option value="АКПП">АКПП</option>
              <option value="МКПП">МКПП</option>
            </select>
          </div>
          <p v-if="errors.transmission.value" class="form__error">
            {{errors.transmission.text}}
          </p>
        </label>
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Тип двигателя:</span>
            <select class="form__input" v-model="form.propertyValues.engine_type" @change="validateEngineType">
              <option value="" selected disabled>Не указано</option>
              <option value="Дизельный">Дизельный</option>
              <option value="Бензиновый">Бензиновый</option>
              <option value="Бензиновый/газовый">Бензиновый/газовый</option>
            </select>
          </div>
          <p v-if="errors.engine_type.value" class="form__error">
            {{errors.engine_type.text}}
          </p>
        </label>
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Привод:</span>
            <select class="form__input" v-model="form.propertyValues.gear_type" @change="validateGearType">
              <option value="" selected disabled>Не указано</option>
              <option value="Передний">Передний</option>
              <option value="Задний">Задний</option>
              <option value="Полный">Полный</option>
            </select>
          </div>
          <p v-if="errors.gear_type.value" class="form__error">
            {{errors.gear_type.text}}
          </p>
        </label>
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Тип кузова:</span>
            <select class="form__input" v-model="form.propertyValues.body_type" @change="validateBodyType">
              <option value="" selected disabled>Не указано</option>
              <option value="Шасси">Шасси</option>
              <option value="Самосвал">Самосвал</option>
              <option value="Тягач">Тягач</option>
            </select>
          </div>
          <p v-if="errors.body_type.value" class="form__error">
            {{errors.body_type.text}}
          </p>
        </label>
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Объем двигателя:</span>
            <input class="form__input" type="number" v-model="form.propertyValues.engine_volume" step="0.1" @input="validateEngineVolume">
          </div>
          <p v-if="errors.engine_volume.value" class="form__error">
            {{errors.engine_volume.text}}
          </p>
        </label>
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Мощность двигателя (Л.с.):</span>
            <input class="form__input" type="number" v-model="form.propertyValues.engine_power" @input="validateEnginePower">
          </div>
          <p v-if="errors.engine_power.value" class="form__error">
            {{errors.engine_power.text}}
          </p>
        </label>
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Максимальная скорость:</span>
            <input class="form__input" type="number" v-model="form.propertyValues.max_speed" @input="validateMaxSpeed">
          </div>
          <p v-if="errors.max_speed.value" class="form__error">
            {{errors.max_speed.text}}
          </p>
        </label>
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Количество мест:</span>
            <input class="form__input" type="number" v-model="form.propertyValues.seats" @input="validateSeats">
          </div>
          <p v-if="errors.seats.value" class="form__error">
            {{errors.seats.text}}
          </p>
        </label>
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Длина:</span>
            <input class="form__input" type="number" v-model="form.propertyValues.length" @input="validateLength">
          </div>
          <p v-if="errors.length.value" class="form__error">
            {{errors.length.text}}
          </p>
        </label>
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Ширина:</span>
            <input class="form__input" type="number" v-model="form.propertyValues.width" @input="validateWidth">
          </div>
          <p v-if="errors.width.value" class="form__error">
            {{errors.width.text}}
          </p>
        </label>
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Высота:</span>
            <input class="form__input" type="number" v-model="form.propertyValues.height" @input="validateHeight">
          </div>
          <p v-if="errors.height.value" class="form__error">
            {{errors.height.text}}
          </p>
        </label>
        <label class="form__label">
          <div class="form__label-wrapper">
            <span class="form__span">Общая масса:</span>
            <input class="form__input" type="number" v-model="form.propertyValues.gross_weight" @input="validateGrossWeight">
          </div>
          <p v-if="errors.gross_weight.value" class="form__error">
            {{errors.gross_weight.text}}
          </p>
        </label>

        <!-- Блок для добавления дополнительных изображений -->
        <div class="form__images-section">
          <div class="form__images-header">
            <span class="form__span">Дополнительные изображения (макс. 4):</span>
            <span class="form__images-counter">{{ form.propertyValues.images.length }}/4</span>
          </div>

          <div class="form__images-add">
            <input
                class="form__input form__images-input"
                type="text"
                placeholder="Вставьте ссылку на изображение"
                v-model="imageInput"
            >
            <button
                type="button"
                class="form__images-add-btn"
                @click="addImage"
                :disabled="form.propertyValues.images.length >= 4"
            >
              +
            </button>
          </div>

          <!-- Список добавленных изображений -->
          <div v-if="form.propertyValues.images.length > 0" class="form__images-list">
            <div
                v-for="(img, index) in form.propertyValues.images"
                :key="img.id"
                class="form__images-item"
            >
              <img
                  :src="img.path"
                  :alt="'Изображение ' + (index + 1)"
                  class="form__images-thumb"
                  @error="(e) => e.target.src = 'https://via.placeholder.com/100?text=No+Image'"
              >
              <button
                  type="button"
                  class="form__images-remove"
                  @click="removeImage(index)"
              >
                ✕
              </button>
            </div>
          </div>

          <p v-if="form.propertyValues.images.length === 0" class="form__images-empty">
            Изображения не добавлены
          </p>
        </div>
      </div>

      <div class="form__actions">
        <button type="button" @click="updateTruck" class="form__button">
          Сохранить изменения
        </button>
        <router-link to="/admin-panel" class="form__button form__button--cancel">
          Отмена
        </router-link>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.container {
  padding-block: 2rem;
}

.form {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &__section2 {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .form__input {
      width: 100%;
    }
  }

  &__section1, &__section3 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20rem;
    row-gap: 1rem;
  }

  &__label {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: .25rem;

    &-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%
    }
  }

  &__span {
    font-size: 1rem;
  }

  &__input {
    border: 1px solid black;
    padding: .35rem 1rem;
    width: rem(205);
    &:focus {
      border: rem(1) solid var(--color-yellow);
      outline: none;
    }
  }

  &__error {
    color: var(--color-yellow);
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

    &--cancel {
      background-color: transparent;
      border-color: var(--color-black);
    }
  }

  &__actions {
    display: flex;
    gap: 1rem;
  }

  // Стили для блока с изображениями
  &__images-section {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #f9f9f9;
  }

  &__images-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__images-counter {
    font-size: 0.9rem;
    font-weight: 500;
    color: #666;
  }

  &__images-add {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  &__images-input {
    flex: 1;
    width: 100% !important;
  }

  &__images-add-btn {
    @include flex-center();
    min-width: 40px;
    height: 40px;
    background: var(--color-yellow);
    border: 1px solid var(--color-yellow);
    border-radius: 4px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;

    &:hover:not(:disabled) {
      border-color: var(--color-black);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &__images-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  &__images-item {
    position: relative;
    aspect-ratio: 1;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    background: white;
  }

  &__images-thumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__images-remove {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 24px;
    height: 24px;
    background: rgba(255, 0, 0, 0.8);
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 14px;
    cursor: pointer;
    @include flex-center();
    transition: 0.2s;

    &:hover {
      background: rgba(255, 0, 0, 1);
      transform: scale(1.1);
    }
  }

  &__images-empty {
    color: #999;
    font-size: 0.9rem;
    text-align: center;
    padding: 0.5rem;
  }
}
</style>