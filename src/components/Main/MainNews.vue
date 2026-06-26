<script setup lang="js">
import { ref, computed } from 'vue'
import News1 from '@/assets/main-news/news1.png'
import News2 from '@/assets/main-news/news2.png'
import News3 from '@/assets/main-news/news3.png'
import ButtonIcon from '@/assets/main-news/icons/white-arrow.svg'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
const newsFilter = [
  'Все',
  'Сельскохозяйственная техника',
  'Прицепная техника',
  'Грузовая техника',
  'Спецтехника',
  'Спецавтомобили',
  'Коммунальная техника',
  'Микроавтобусы'
]
const selectedFilter = ref('Все')
const newsList = [
  {
    img: News1,
    flag: 'Грузовая техника'
  },
  {
    img: News2,
    flag: 'Спецтехника'
  },
  {
    img: News3,
    flag: 'Спецавтомобили'
  }
]

const filteredNews = computed(() => {
  if (selectedFilter.value === 'Все') {
    return newsList
  }
  return newsList.filter(
      news => news.flag === selectedFilter.value
  )
})
</script>

<template>
  <section class="news">
    <div class="news-content container">
      <h2 class="title">Новости</h2>

      <Swiper :slides-per-view="'auto'" :space-between="20" :grab-cursor="true" class="product-content__slider">
        <SwiperSlide v-for="filter in newsFilter" :key="filter" class="p">
          <button class="button-filter" :class="{ active: selectedFilter === filter }" @click="selectedFilter = filter">
            {{ filter }}
          </button>
        </SwiperSlide>
      </Swiper>
      <div class="news-block">
        <div class="news-block-item" v-for="news in filteredNews" :key="news.img">
          <img :src="news.img" alt="">
          <div class="news-block-item__content">
            <div class="news-block-item__content__datetime">
              30.08.2022 по 31.12.2022
            </div>
            <div class="news-block-item__content__title">
              ЛИЗИНГ ОТ КАМАЗА - Обнуляем авансовый платёж
            </div>
            <div class="news-block-item__content__desc">
              Лизинговые предложения являются универсальными на всей территории России!
              Лизинговые предложения являются
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="show-all">
      <router-link to="/news">
        <button class="show-all__btn">
          Показать все
          <ButtonIcon />
        </button>
      </router-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
.title{
  font-size: rem(28);
  color: var(--color-gray-dark);
}
.p{
  width: auto !important;
}
.button-filter{
  box-sizing: border-box;
  padding: rem(7) rem(10) rem(7) rem(10);
  background-color: var(--color-light-gray);
  color: var(--color-gray-dark);
}
.button-filter:focus{
  background-color: var(--color-gray-dark);
  color: var(--color-white);
}
.product-content__slider{
  margin: rem(25) 0 rem(32) 0;
}
.news-block{
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  &-item{
    box-sizing: border-box;
    background-color: var(--color-light-gray);
    max-width: rem(400);

    &__content{
      padding: rem(28) rem(24) rem(32) rem(24);

      &__datetime, &__title, &__desc{
        color: var(--color-gray-dark);
      }
      &__title{
        font-weight: 500;
        margin: rem(25) 0 rem(17) 0;
      }
    }
  }
}
.show-all{
  width: 100%;
  display: flex;
  justify-content: center;
  margin: rem(32) 0 rem(56) 0;

  &__btn{
    align-items: center;
    padding: rem(12) rem(16) rem(12) rem(16);
    background-color: var(--color-gray-dark);
    color: var(--color-white);
    display: inline-flex;
    gap: rem(7);
  }
}
.button-filter.active {
  background-color: var(--color-gray-dark);
  color: var(--color-white);
}
</style>