<script setup>
import Geo from '@/assets/icons/geo-contacts.svg'
</script>

<template>
<div class="contacts">
  <div class="container contacts__inner">
    <h2>Контакты</h2>
    <p>Дилерские центры ГК АГАТ предоставляют своим клиентам полный спектр услуг по покупке, техническому и сервисному обслуживанию грузовой и спецтехники. Для получения более подробной информации, перейдите на детальную страницу выбранного Вами бренда или вида услуг.</p>
    <div class="contacts__cards">
      <div class="contacts__cards-card1">
        <h3>АГАТ/Техника для бизнеса</h3>
        <a href="https://yandex.ru/maps/org/nizhegorodskiy_gubernskiy_kolledzh/1269470559/?indoorLevel=1&ll=43.948931%2C56.325434&source=serp_navig&z=17.14">Посмотреть на карте</a>
      </div>
      <div class="contacts__cards-card2">
        <div>
          <Geo class="geo"/>
        </div>
        <div>
          <h3>Нижний Новгород</h3>
          <span>ул. Ларина, 23г</span>
          <p>
            Пн-Пт: 08:00 - 20:00 <br>
            Сб: 08:00 - 20:00 <br>
            Вс: 08:00 - 20:00
          </p>
        </div>
      </div>
      <div class="contacts__cards-card3">
        <h3>8 (831) 266-88-76</h3>
        <a href="#">feedback@agatgroup.com</a>
      </div>
    </div>
  </div>
  <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aec76f728e7155d7f5478c144b6468fc6d846169db1e6cc1de673b9b84beb0cd2&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>
</div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.contacts {
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-block: 2rem;
  }

  &__cards {
    display: flex;
    justify-content: space-between;

    @include tablet {
      flex-direction: column;
      gap: 3rem;
    }

    &-card1 {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      a {
        color: var(--color-black);
        position: relative;
        width: fit-content;

        &::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: rem(2);
          background-color: var(--color-black);
        }

        @include hover {
          &::after {
            background-color: var(--color-yellow);
          }
        }
      }
    }

    &-card2 {
      display: flex;
      gap: .5rem;

      div:nth-child(2) {
        display: flex;
        flex-direction: column;
        gap: .5rem;
      }

      span {
        font-size: fluid(18, 16);
      }

      p {
        font-size: rem(12);
      }

    }

    &-card3 {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      a {
        color: var(--color-yellow);
        transition-duration: .2s;
        font-weight: 500;
        font-size: rem(18);

        @include hover {
          color: var(--color-black);
        }
      }
    }
  }
}

.geo {
  width: rem(30);
  height: rem(30);
  @include tablet {
    display: none;
  }
}
</style>