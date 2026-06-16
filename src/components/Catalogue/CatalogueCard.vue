<script setup>
defineProps({
  car: {
    type: Object,
    required: true
  }
})
</script>

<template>
<div class="card">
  <div class="card__inner">
    {{car.name}}
  </div>
</div>
</template>

<style
    scoped
    lang="scss"
>

</style>