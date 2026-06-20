<script setup lang="js">
import OrderIcon from '@/assets/main-day-product/icons/Cart.svg'
import ButtonIcon from '@/assets/main-day-product/icons/arrow.svg'
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="product">
    <div class="product-status">
      <div class="product-status__leasing">Лизинг</div>
      <div class="product-status__count-owners">1 Хозяин</div>
    </div>
    <img :src="props.product.img" alt="">
    <div class="product-info">
      <div class="product-info__top">
        <span class="product-info__top-title">ГАЗ Промтоварный фургон на базе ГАЗон NEXT</span>
        <span class="product-info__top-desc">Шасси, 5.9 л / 270 л. с., Задний привод, МКПП, Дизельный</span>
        <div class="product-info__top-price">
          <span class="product-info__top-price__real-price">{{props.product.actualPrice}}</span>
          <span class="product-info__top-price__full-price">{{props.product.fullPrice}}</span>
        </div>
      </div>
      <div class="product-info__bot">
        <div class="product-info__bot-order">
          <OrderIcon /> Доступна для заказа
        </div>
        <div class="product-info__bot-order__btn-block">
          <router-link to="/catalogue">
            <button v-if="props.product.isPrice" class="product-info__bot-order__btn-block__btn">
              Оставить заявку <ButtonIcon />
            </button>
            <button v-else class="product-info__bot-order__btn-block__btn">
              Узнать цену <ButtonIcon />
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.product {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  max-height: rem(503);
  background: #fff;
  border: 1px solid var(--color-yellow);
  box-sizing: border-box;
  overflow: visible;
  &-status {
    position: absolute;
    display: flex;
    gap: rem(9);
    padding: rem(12);
    z-index: 2;
    top: -26px;
    right: rem(17);
    &__leasing,
    &__count-owners {
      padding-inline: rem(10);
      padding-block: rem(4);
      font-size: rem(12);
      font-weight: 500;
    }

    &__leasing {
      background-color: var(--color-yellow);
      color: var(--color-gray-dark);
    }

    &__count-owners {
      background-color: var(--color-gray);
      color: var(--color-white);
    }
  }
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  padding: rem(19) rem(22) rem(25) rem(22);
  gap: rem(20);

  &__top {
    display: flex;
    flex-direction: column;
    gap: rem(12);

    &-title {
      font-size: rem(16);
      color: var(--color-gray-dark);
      font-weight: 500;
    }

    &-desc{
      font-size: rem(14);
    }

    &-price {
      display: inline-flex;
      gap: rem(12);
      align-items: end;

      &__real-price {
        font-size: rem(20);
        font-weight: 500;
      }

      &__full-price {
        font-size: rem(16);
        text-decoration: line-through;
      }
    }
  }

  &__bot {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: rem(16);

    &-order {
      display: flex;
      align-items: center;
      gap: rem(8);
      font-size: rem(14);

      &__btn-block {
        width: 100%;

        &__btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: rem(8);
          padding-block: rem(14);
          border: none;
          cursor: pointer;
          background: #F5B400;
          font-size: rem(16);
          font-weight: 600;
          transition: .2s ease;
          color: var(--color-gray-dark);
          &:hover {
            opacity: .9;
          }
        }
      }
    }
  }
}
@include mobile {

  .product {
    border: 1px solid #D9D9D9;

    &-status {
      top: rem(-25);
      gap: rem(6);

      &__leasing,
      &__count-owners {
        padding: rem(6) rem(10);

        font-size: rem(12);
      }
    }

    img {
      aspect-ratio: 1 / 0.82;
      object-fit: cover;
    }
  }

  .product-info {
    padding: rem(18) rem(16) rem(20);

    gap: rem(20);

    &__top {

      &-title {
        font-size: rem(18);
        line-height: 1.15;
      }

      // скрываем
      &-desc,
      &-price {
        display: none;
      }
    }

    &__bot {

      // скрываем статус заказа
      &-order {
        display: none;
      }

      &__btn-block {

        &__btn {
          min-height: rem(48);

          padding: rem(12);

          font-size: rem(16);
          font-weight: 600;

          gap: rem(8);
        }
      }
    }
  }
}
</style>