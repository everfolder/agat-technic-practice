<script setup>
const emit = defineEmits(['chosenFilter'])

const props = defineProps({
  filter: {
    type: Array,
    required: true
  }
})

const chooseFilter = (filter) => {
  emit('chosenFilter', filter)
}
</script>

<template>
  <div class="container">
    <button v-for="filter in props.filter" :key="filter" @click="chooseFilter(filter)" class="filter">
      {{ filter }}
    </button>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
.filter{
  margin-right: rem(16);
  box-sizing: border-box;
  padding: rem(7) rem(10) rem(7) rem(10);
  background-color: var(--color-light-gray);
  color: var(--color-gray-dark);
}
.filter:focus{
  background-color: var(--color-gray-dark);
  color: var(--color-white);
}
</style>