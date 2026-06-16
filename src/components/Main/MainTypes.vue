<script setup>
import {ref} from "vue";
import Type1 from '@/assets/types/type1.jpg'
import Type2 from '@/assets/types/type2.jpg'
import Type3 from '@/assets/types/type3.jpg'
import Type4 from '@/assets/types/type4.jpg'
import Type5 from '@/assets/types/type5.jpg'
import Type6 from '@/assets/types/type6.jpg'
import Type7 from '@/assets/types/type7.jpg'
import Type8 from '@/assets/types/type8.jpg'
import Type9 from '@/assets/types/type9.jpg'
import Type10 from '@/assets/types/type10.jpg'
import Type11 from '@/assets/types/type11.jpg'
import Type12 from '@/assets/types/type12.jpg'
import Type13 from '@/assets/types/type13.jpg'
import Type14 from '@/assets/types/type14.jpg'

const types = ref([
  {img: Type1, type: 'Самосвалы', path: '/catalogue'},
  {img: Type2, type: 'Седельные тягачи', path: '/catalogue'},
  {img: Type3, type: 'Прицепы и полуприцепы', path: '/catalogue'},
  {img: Type4, type: 'Автоцистерны (емкостная техника)', path: '/catalogue'},
  {img: Type5, type: 'Автокраны', path: '/catalogue'},
  {img: Type6, type: 'Автогидроподъёмники', path: '/catalogue'},
  {img: Type7, type: 'Краны-манипуляторы (КМУ)', path: '/catalogue'},
  {img: Type8, type: 'Автобетоносмесители', path: '/catalogue'},
  {img: Type9, type: 'Автобетононасосы', path: '/catalogue'},
  {img: Type10, type: 'Коммунальная техника', path: '/catalogue'},
  {img: Type11, type: 'Автобусы', path: '/catalogue'},
  {img: Type12, type: 'Цельнометаллические автомобили (ЦМФ)', path: '/catalogue'},
  {img: Type13, type: 'Авто с фургоном и бортовые автомобили', path: '/catalogue'},
  {img: Type14, type: 'Навесная и прицепная техника для сельского хозяйства', path: '/catalogue'},

])

</script>

<template>
  <section class="types">
    <div class="types__inner container">
      <h2>Выбрать тип техники</h2>
      <ul class="types__list">
        <li class="types__item" v-for="type in types">
          <router-link :to="type.path">
            <img
                class="types__img"
                :src="type.img"
                alt="car"
            >
            <p>{{ type.type }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;


.types {
  margin-top: 32px;
  @media (max-width: 650px) {
    display: none;
  }
  &__list {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    @media (max-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }


  }

  &__item {
    width: fluid(295, 165);
    @include hover {
      p {
        text-decoration: underline;
      }
    }
    p {
      margin-top: .5rem;
      color: black;
      text-align: center;
    }
  }
}
</style>