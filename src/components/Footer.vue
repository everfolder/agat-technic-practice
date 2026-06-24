<script setup>
import Logo from '@/assets/logo-footer.svg'
import Tg from '@/assets/footer-img/footer-logos/tg.svg'
import Whatsapp from '@/assets/footer-img/footer-logos/whatsapp.svg'
import Viber from '@/assets/footer-img/footer-logos/viber.svg'
import Vk from '@/assets/footer-img/footer-logos/vk.svg'
import Yt from '@/assets/footer-img/footer-logos/youtube.svg'
import Dzen from '@/assets/footer-img/footer-logos/dzen.svg'
import GrayForm from '@/components/GrayForm.vue'
import router from '@/router'

</script>

<template>
  <div class="footer">
    <div class="footer__form">
      <GrayForm />
    </div>
    <div class="footer__inner container">
      <div class="footer__top">
        <div class="footer__top-left">
          <Logo class="footer__logo" />
          <div class="footer__contacts">
            <div class="footer__phone">+7 (831) 2-000-000 </div>
            <a href="#" class="footer__adress">Нижний Новгород, ул. Ларина, 23</a>
          </div>
        </div>
        <div class="footer__top-right">
          <div class="footer__top-right-col">
            <p>Мы в мессенджерах:</p>
            <ul class="footer__list">
              <li class="footer__list-item">
                <a href="#">
                  <Tg class="tg" /> Telegram
                </a>
              </li>
              <li class="footer__list-item">
                <a href="#">
                  <Whatsapp class="whatsapp" /> WhatsApp
                </a>
              </li>
              <li class="footer__list-item">
                <a href="#">
                  <Viber class="viber" /> Viber
                </a>
              </li>
            </ul>
          </div>
          <div class="footer__top-right-col">
            <p>Мы в социальных сетях:</p>
            <ul class="footer__list">
              <li class="footer__list-item">
                <a href="#">
                  <Tg class="tg" /> Telegram
                </a>
              </li>
              <li class="footer__list-item">
                <a href="#">
                  <Vk class="vk" /> Вконтакте
                </a>
              </li>
              <li class="footer__list-item">
                <a href="#">
                  <Yt class="yt" /> YouTube
                </a>
              </li>
              <li class="footer__list-item">
                <a href="#">
                  <Dzen class="zen" /> Яндекс.Дзен
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p>Вся представленная на сайте информация, касающаяся автомобилей и сервисного обслуживания, носит
          информационный характер и не является публичной офертой, определяемой положениями ст. 437 (2) ГК РФ. Все цены
          и спецпредложения, указанные на данном сайте носят исключительно информационный характер и являются
          максимально рекомендуемыми розничными ценами и спецпредложениями по расчетам дистрибьюторов и могут отличаться
          от цен других дилеров. Для получения подробной информации просьба обращаться в ДЦ компании АГАТ.
          Опубликованная на данном сайте информация может быть изменена в любое время без предварительного уведомления.
        </p>
        <ul class="footer__bottom-list">
          <li>© ООО «ТД «Агат» 2008—2022 <br>
            Все права защищены
          </li>
          <li>Обратная связь <br>
            <a href="#">feedback@agatgroup.com</a>
          </li>
          <li>
            <a href="#">
              Защита персональных данных <br>
              Юридическая информация
            </a>
          </li>
          <li>
            <router-link to="/admin-panel">
              Админка
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

a {
  text-decoration: none;
  color: var(--color-white) !important;

  &:visited,
  &:active,
  &:focus {
    color: inherit;
    text-decoration: none;
    outline: none;
  }
}

.footer {
  background: url("@/assets/footer-img/footer-bg.jpg") no-repeat center / cover;
  font-size: fluid(14, 12);

  &__inner {
    display: flex;
    flex-direction: column;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    padding-block: 2rem;

    @include mobile {
      flex-direction: column;
    }

    &-left {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    &-right {
      display: flex;
      gap: fluid(160, 28);

      @include mobile {
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
      }

      &-col {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
          font-size: rem(14);
          color: var(--color-white);
          font-weight: 500;
        }
      }
    }
  }

  &__logo {
    width: fluid(296, 244);

  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  &__phone {
    font-size: fluid(24, 16);
    color: var(--color-white);
    font-weight: 600;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &-item {
      a {
        display: flex;
        align-items: center;
        gap: .5rem;

        svg {
          min-width: 35px;
          min-height: 35px;
        }

        @include hover {
          color: var(--color-white);
          text-decoration: underline;

          .tg {
            border-radius: 50%;
            background-color: #61A8DE;
            fill: #61A8DE;
          }

          .whatsapp {
            border-radius: 50%;
            background-color: #78de61;
            fill: #78de61;
          }

          .viber {
            border-radius: 50%;
            background-color: #9d61de;
            fill: #9d61de;
          }

          .vk {
            border-radius: 50%;
            background-color: #3f8cff;
            fill: #3f8cff;
          }

          .yt {
            border-radius: 50%;
            background-color: #fa4343;
            fill: #fa4343;
          }

          .zen {
            border-radius: 50%;
            background-color: #dea061;
            fill: #dea061;
          }
        }
      }
    }
  }

  &__bottom {
    border-top: 1px solid var(--color-white);
    padding-block: 2rem;
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &-list {
      display: flex;
      justify-content: space-between;
      gap: 1rem;

      @include mobile {
        flex-direction: column;
      }

      li {
        a {
          text-decoration: underline;

          @include hover {
            color: var(--color-white);
          }
        }
      }
    }
  }
}

svg {
  fill: var(--color-light);
}
</style>