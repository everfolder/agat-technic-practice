<script setup>
defineProps({
  employee: {
    type: Object,
    required: true
  }
})
</script>

<template>
<div class="card">
  <img
      :src="employee.img"
      alt=""
  >
  <div class="info">
    <div class="info__name">
      {{employee.name}}
    </div>
    <div class="info__role">
      {{employee.role}}
    </div>
    <div class="info__number">
      {{employee.phoneNumber}}
    </div>
  </div>
</div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.card {
  display: flex;
  flex-direction: column;
}

.info {
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  max-width: rem(220);

  &__name {
    font-size: 1rem;
    font-weight: 500;
  }

  &__number {
    font-weight: 500;
  }
}
</style>