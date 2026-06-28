<script setup>
import Geo from '@/assets/icons/geo-contacts.svg'
import ServiceContacts from '@/components/Service/ServiceContacts.vue';
</script>

<template>
<ServiceContacts title="Контакты" description="Дилерские центры ГК АГАТ предоставляют своим клиентам полный спектр услуг по покупке, техническому и сервисному обслуживанию грузовой и спецтехники. Для получения более подробной информации, перейдите на детальную страницу выбранного Вами бренда или вида услуг."/>
<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aec76f728e7155d7f5478c144b6468fc6d846169db1e6cc1de673b9b84beb0cd2&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

</style>