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

/* =====================
   TITLE
===================== */
.title {
  font-size: rem(28);
  color: var(--color-gray-dark);

  @include mobile {
    font-size: rem(20);
  }
}

/* =====================
   SWIPER WRAPPER FIX
===================== */
.p {
  width: auto !important;
}

/* =====================
   FILTER BUTTONS
===================== */
.button-filter {
  box-sizing: border-box;
  padding: rem(7) rem(10);
  background-color: var(--color-light-gray);
  color: var(--color-gray-dark);
  white-space: nowrap;
  font-size: rem(14);
  transition: 0.2s ease;

  @include mobile {
    font-size: rem(12);
    padding: rem(6) rem(8);
  }

  &:hover {
    opacity: 0.85;
  }

  &.active,
  &:focus {
    background-color: var(--color-gray-dark);
    color: var(--color-white);
  }
}

/* =====================
   SWIPER SPACING
===================== */
.product-content__slider {
  margin: rem(25) 0 rem(32);

  @include mobile {
    margin: rem(16) 0 rem(20);
  }
}

/* =====================
   NEWS GRID
===================== */
.news-block {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: rem(24);
  width: 100%;

  @include laptop {
    grid-template-columns: repeat(2, 1fr);
    gap: rem(20);
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: rem(16);
  }

  /* =====================
     CARD
  ===================== */
  &-item {
    box-sizing: border-box;
    background-color: var(--color-light-gray);
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: 0.25s ease;

    &:hover {
      transform: translateY(-2px);
    }

    /* IMAGE (если есть в шаблоне) */
    img {
      width: 100%;
      height: rem(200);
      object-fit: cover;

      @include mobile {
        height: rem(160);
      }
    }

    /* CONTENT */
    &__content {
      padding: rem(28) rem(24) rem(32);

      @include mobile {
        padding: rem(16);
      }

      &__datetime {
        color: var(--color-gray-dark);
        font-size: rem(13);

        @include mobile {
          font-size: rem(12);
        }
      }

      &__title {
        color: var(--color-gray-dark);
        font-weight: 500;
        margin: rem(25) 0 rem(17);

        @include mobile {
          margin: rem(12) 0 rem(10);
          font-size: rem(14);
        }
      }

      &__desc {
        color: var(--color-gray-dark);

        @include mobile {
          font-size: rem(13);
          line-height: 1.4;
        }
      }
    }
  }
}

/* =====================
   SHOW ALL BUTTON
===================== */
.show-all {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: rem(32) 0 rem(56);

  @include mobile {
    margin: rem(20) 0 rem(32);
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: rem(7);
    padding: rem(12) rem(16);
    background-color: var(--color-gray-dark);
    color: var(--color-white);
    transition: 0.2s ease;

    @include mobile {
      padding: rem(10) rem(14);
      font-size: rem(14);
    }

    &:hover {
      opacity: 0.9;
    }
  }
}

/* =====================
   ACTIVE STATE FIX
===================== */
.button-filter.active {
  background-color: var(--color-gray-dark);
  color: var(--color-white);
}
</style>