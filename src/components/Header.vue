<script setup>
import Logo from '@/assets/logo.svg'
import Geo from '@/assets/icons/geo.svg'
import Search from '@/assets/icons/search.svg'
import CloseModal from '@/assets/icons/close-modal.svg'
</script>

<template>
<div class="header">
  <div class="container header__inner">
    <div class="header__top">
      <div class="header__cosmetic-wrapper">
        <div class="header__logo">
          <router-link to="/">
            <Logo class="logo"/>
          </router-link>
        </div>
        <div class="header__cosmetic-wrapper-right">
          <div class="header__phone">
            <div class="header__phone-phone">
              +7 (831) 2-000-000
            </div>
            <button class="header__phone-button">
              Заказать звонок
            </button>
          </div>
          <a href="https://yandex.ru/maps/org/nizhegorodskiy_gubernskiy_kolledzh/1269470559/?indoorLevel=1&ll=43.948931%2C56.325434&source=serp_navig&z=17.14" class="header__location" target="_blank">
            <Geo class="geo-icon"/>
            <div class="header__location-name">Нижний Новгород</div>
          </a>
          <button data-fancybox data-src="#burger-menu" class="header__burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div :style="{display: 'none'}">
            <div id="burger-menu" class="burger-menu">
              <button data-fancybox-close class="burger-menu__btn">
                <CloseModal />
              </button>
              <a class="burger-menu__item">
                Каталог продукции
              </a>
              <a class="burger-menu__item">
                Бренды
              </a>
              <a class="burger-menu__item">
                Сервис и запасные части
              </a>
              <a class="burger-menu__item">
                Акции
              </a>
              <a class="burger-menu__item">
                Услуги
              </a>
              <a class="burger-menu__item">
                О компании
              </a>
              <a class="burger-menu__item">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="header__phone-mobile">
        <p>Нижний Новгород</p>
        <p>Московское шоссе, д. 294Б</p>
        <div class="header__phone-mobile__phone">
          +7 (831) 2-000-000
        </div>
        <button class="header__phone-mobile__button">Заказать звонок</button>
      </div>
      <div class="header__search">
        <input
            type="text"
            class="header__search-input"
            placeholder="Поиск по сайту"
        >
        <Search class="search-icon"/>
      </div>

    </div>
    <div class="header__bottom">
      <a class="header__bottom-item">
        Каталог продукции
      </a>
      <a class="header__bottom-item">
        Бренды
      </a>
      <a class="header__bottom-item">
        Сервис и запасные части
      </a>
      <a class="header__bottom-item">
        Акции
      </a>
      <a class="header__bottom-item">
        Услуги
      </a>
      <a class="header__bottom-item">
        О компании
      </a>
      <a class="header__bottom-item">
        Контакты
      </a>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.header {
  background-color: var(--color-gray);

  &__cosmetic-wrapper {
    display: contents;
    @include tablet {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    &-right {
      display: contents;
      @include tablet {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1rem;
    @include tablet {
      width: 100%;
      flex-direction: column;
      align-items: start;
      gap: .5rem;
    }
  }

  &__logo {
    width: fluid(280, 150);
  }

  &__phone {
    display: flex;
    flex-direction: column;
    gap: .2rem;

    @include mobile {
      display: none;
    }

    &-phone {
      color: var(--color-white);
      font-size: fluid(24, 16);
      font-weight: 600;
    }

    &-button {
      width: fit-content;
      color: var(--color-yellow);
      align-self: end;

      @include hover {
        text-decoration: underline;
      }
    }
  }

  &__location {
    display: flex;
    align-items: center;
    color: var(--color-white);
    position: relative;
    @include tablet {
      display: none;
    }
    @include hover {
      text-decoration: underline;
    }
  }

  &__search {
    width: fluid(400, 300);
    position: relative;
    @include tablet {
      width: 100%;
    }
    &-input {
      background-color: var(--color-white);
      padding: .75rem 1rem;
      width: 100%;
    }
  }

  &__burger {
    position: relative;
    width: rem(27);
    height: rem(23);
    color: var(--color-white);
    transition-duration: .2s;
    @include hover {
      color: var(--color-yellow);
    }

    @include tablet-above {
      display: none;
    }

    span{
      position: absolute;
      width: 100%;
      height: rem(2);
      left: 0;
      background-color: currentColor;
      &:first-child {
        top: 0;
      }

      &:nth-child(2) {
        @include abs-y;
      }

      &:last-child {
        bottom: 0;
      }
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    font-size: fluid(18, 16);
    padding-block: 1rem;
    border-top: rem(2) solid var(--color-white);

    @include tablet {
      display: none;
    }

    &-item {
      color: var(--color-white);
      @include hover {
        text-decoration: underline;
        color: var(--color-yellow);
      }
    }
  }

  &__phone-mobile {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    color: var(--color-white);
    @include mobile-above {
      display: none;
    }
    &__phone {
      font-size: 1rem;
      font-weight: 600;
    }

    &__button {
      width: 100%;
      background-color: var(--color-yellow);
      padding-block: .75rem;
      font-weight: 600;
      color: var(--color-black);
    }
  }
}

.search-icon {
  position: absolute;
  right: 1rem;
  @include abs-y;
}

.logo {
  width: 100%;
}

.burger-menu {
  cursor: default;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__btn {
    align-self: end;
  }

  &__item {
    font-size: 1rem;
    width: fit-content;
    padding-right: 2rem;

    @include hover {
      color: var(--color-yellow);
      text-decoration: underline;
    }
  }
}
</style>