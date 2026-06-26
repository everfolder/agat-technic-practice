<script setup>
import {ref} from "vue";
import EmployeeCard from "@/components/EmployeeCard.vue";

const employeesSales = ref([
  {
    img: 'https://agat-technic.ru/upload/files/about/f92680c9b3917d87413cfd276f4bf1b3.jpg',
    name: 'Роман Баронин',
    role: 'Директор по продажам',
    phoneNumber: '8 (831) 266-88-92'
  },
  {
    img: 'https://agat-technic.ru/upload/files/about/ac5454741dc7fa0ebb311e00d6a2460d.jpg',
    name: 'Андрей Дубровский',
    role: 'Директор по продажам',
    phoneNumber: '8 (831) 266-88-92'
  },
  {
    img: 'https://agat-technic.ru/upload/files/about/a9c06460d50d1a567677f3fdb35475eb.jpg',
    name: 'Андрей Малышев',
    role: 'Директор по продажам',
    phoneNumber: '8 (831) 266-88-92'
  },
])

const employeesService = ref([
  {
    img: 'https://agat-technic.ru/upload/files/about/f403e4596368a58a3ee6380fa8c4fa24.jpg',
    name: 'Михаил Киселев',
    role: 'Старший сервисный консультант',
    phoneNumber: '8 (831) 266-88-92'
  },
  {
    img: 'https://agat-technic.ru/upload/files/about/29a6fa8a1edd411286dab5474c0bf479.png',
    name: 'Александр Середенин',
    role: 'Старший сервисный консультант',
    phoneNumber: '8 (831) 266-88-92'
  },
  {
    img: 'https://agat-technic.ru/upload/files/about/4ac366f1154ceff4246dd26099dd5771.jpg',
    name: 'Евгений Печекладов',
    role: 'Старший сервисный консультант',
    phoneNumber: '8 (831) 266-88-92'
  },
  {
    img: 'https://agat-technic.ru/upload/files/about/819d31639d93b1e8cc713fef7fe53eb7.jpg',
    name: 'Александр Пицын',
    role: 'Старший сервисный консультант',
    phoneNumber: '8 (831) 266-88-92'
  },
  {
    img: 'https://agat-technic.ru/upload/files/about/21547fd6420b51c154931f490232df3d.jpg',
    name: 'Алексей Хрустов',
    role: 'Старший сервисный консультант',
    phoneNumber: '8 (831) 266-88-92'
  },
  {
    img: 'https://agat-technic.ru/upload/files/about/d7581f9e552fd19581fae44b3b55069f.jpg',
    name: 'Сергей Шипаев',
    role: 'Старший сервисный консультант',
    phoneNumber: '8 (831) 266-88-92'
  },
  {
    img: 'https://agat-technic.ru/upload/files/about/0223cf57049531c4251a8e613270bad3.jpg',
    name: 'Сергей Подойников',
    role: 'Старший сервисный консультант',
    phoneNumber: '8 (831) 266-88-92'
  },
  {
    img: 'https://agat-technic.ru/upload/files/about/76566dd010f0cdfc37df4a61518036bf.jpg',
    name: 'Алексей Обрубов',
    role: 'Старший сервисный консультант',
    phoneNumber: '8 (831) 266-88-92'
  },
  {
    img: 'https://agat-technic.ru/upload/files/about/b26d25acc43c6c1273564c6476b9a7bd.jpg',
    name: 'Андрей Киселев',
    role: 'Старший сервисный консультант',
    phoneNumber: '8 (831) 266-88-92'
  },
])
</script>

<template>
<div class="about">
  <div class="container about__inner">
    <h2>О нас</h2>
    <div class="about__main">
      <p>«Агат/Техника для бизнеса» более 30 лет на рынке продажи грузовой, коммерческой и техники специального назначения. За это время портфель брендов направления менялся. В настоящий момент он включает в себя пять брендов: SHACMAN, SITRAK, FAW TRUCKS, DAEWOO TRUCKS и FOTON.
        Большой выбор техники в наличии и под заказ, различные цвета, модификации и надстройки техники под любые задачи Вашего бизнеса. Мы предоставляем услуги сервисного обслуживания, сотрудничаем с ведущими лизинговыми компаниями, осуществляем доставку коммерческой техники в любую точку страны.
        «Агат/Техника для бизнеса» входит в состав холдинга ГК «АГАТ», который является одним из крупнейших автохолдингов России, представленный в 19 городах страны.</p>
      <br>
      <p>История компании начинается с 1991 года. Автохолдинг осуществляет разнообразный спектр услуг по продаже новых авто и авто с пробегом (включая страховые, кредитные и лизинговые продукты), сервисному обслуживанию и кузовному ремонту автомобильных марок.</p>
    </div>
    <h3>Реквизиты</h3>
    <strong>Общество с ограниченной ответственностью «Техника для бизнеса»</strong>
    <p>ОГРН 1125257006016</p>
    <p>ИНН 5257131420</p>
    <div class="about__images">
      <video src="https://agat-technic.ru/upload/files/about/11d1a724acfef886fd47f12034be0fea.mp4" controls width="100%"></video>
      <div class="about__images-bottom">
        <img
            src="https://agat-technic.ru/upload/files/about/381b64ed699ff54e5929620a91bacf9a.jpg"
        >
        <img
            src="https://agat-technic.ru/upload/files/about/5ae1235bb2cfc645920a23f678ef77a4.jpg"
        >
        <img
            src="https://agat-technic.ru/upload/files/about/bc7809c6b5775eab9d7c5bb830a551f8.jpg"
        >
        <img
            src="https://agat-technic.ru/upload/files/about/5c2a229271971f34f730113d6d394d7e.jpg"
        >
      </div>
    </div>
    <h2>Наша команда</h2>
    <h3>Отдел продаж</h3>
    <div class="about__employee">
      <EmployeeCard v-for="e in employeesSales" :employee="e" />
    </div>
    <h3>Отдел сервиса</h3>
    <div class="about__employee">
      <EmployeeCard v-for="e in employeesService" :employee="e" />
    </div>
  </div>
</div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.about {
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-block: 2rem;
  }

  &__images {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &-bottom {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 1rem;
      row-gap: .5rem;
      @include tablet {
        grid-template-columns: repeat(2, 1fr);
      }

      @include mobile {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }

  &__employee {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    @include tablet {
      justify-content: center;
    }

  }
}
</style>