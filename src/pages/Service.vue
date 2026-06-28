<script setup>
import GrayForm from '@/components/GrayForm.vue';
import ServiceText from '@/components/Service/ServiceText.vue';
import ServiceServices from '@/components/Service/ServiceServices.vue';
import ServiceContacts from '@/components/Service/ServiceContacts.vue';
</script>

<template>
    <ServiceText />
    <GrayForm title="Запись на сервис" />
    <ServiceServices />
    <ServiceContacts title="Сервисные центры"/>
</template>

<style scoped lang="scss"></style>