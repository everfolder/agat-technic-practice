<script setup>
import Adv1 from '@/assets/advantages/adv1.svg'
import Adv2 from '@/assets/advantages/adv2.svg'
import Adv3 from '@/assets/advantages/adv3.svg'
import Adv4 from '@/assets/advantages/adv4.svg'
import Modal from "@/components/Modal.vue";
</script>

<template>
<div class="advantages">
  <div class="container">
    <div class="advantages__inner">
      <h2 class="advantages__title">Преимущества</h2>
      <div class="advantages__cards">
        <div class="advantages__item" data-fancybox data-src="#adv1">
          <Adv1 />
          <h3 class="advantages__item-title">
            АГАТ – крупный
            и надежный дилер
          </h3>
          <p class="advantages__item-describe">
            АГАТ -  18 Городов присутствия, 54 Дилерских контрактов, 16 Площадок автомобилей с пробегом
          </p>
        </div>
        <Modal id="adv1" title="Крупный и надежный дилер">
          АГАТ -  18 Городов присутствия, 54 Дилерских контрактов, 16 Площадок автомобилей с пробегом
        </Modal>
        <div class="advantages__item" data-fancybox data-src="#adv2">
          <Adv2 />
          <h3 class="advantages__item-title">
            Собственная
            транспортная компания
          </h3>
          <p class="advantages__item-describe">
            Порядка 500 автовозов в парке компании позволяют обеспечить быструю доставку в любую точку, исходя из Ваших пожеланий
          </p>
        </div>
        <Modal id="adv2" title="Собственная транспортная компания">
          Порядка 500 автовозов в парке компании позволяют обеспечить быструю доставку в любую точку, исходя из Ваших пожеланий
        </Modal>
        <div class="advantages__item" data-fancybox data-src="#adv3">
          <Adv3 />
          <h3 class="advantages__item-title">
            Выгодный лизинг
          </h3>
          <p class="advantages__item-describe">
            Сотрудничаем с более 30 лизинговыми компаниями, выгодные условия на покупку для физических и юридических лиц
          </p>
        </div>
        <Modal id="adv3" title="Выгодный лизинг">
          Сотрудничаем с более 30 лизинговыми компаниями, выгодные условия на покупку для физических и юридических лиц
        </Modal>
        <div class="advantages__item" data-fancybox data-src="#adv4">
          <Adv4 />
          <h3 class="advantages__item-title">
            Клиентский сервис
          </h3>
          <p class="advantages__item-describe">
            Выезд в удобное для Вас место и время. Подготовка комплексного предложения: продажа, сервисное обслуживание, запасные части при первой встрече.
          </p>
        </div>
        <Modal id="adv4" title="Клиентский сервис">
          Выезд в удобное для Вас место и время. Подготовка комплексного предложения: продажа, сервисное обслуживание, запасные части при первой встрече.
        </Modal>
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

.advantages {
  background-color: var(--color-gray);
  color: var(--color-white);

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-block: 1rem;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 1rem;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mobile {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    text-align: center;
    cursor: pointer;
    @include hover {
      text-decoration: underline;
      color: var(--color-yellow);
    }
  }
}

</style>