<script setup>
defineProps({
  parameter: String,
  value: String
})
</script>

<template>
  <div class="parameter">
  <span>
    {{parameter}}
  </span>
    <span v-if="value">{{value}}</span>
    <span class="else" v-else></span>
  </div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.parameter {
  display: flex;
  padding: .5rem 3rem .5rem 1rem;
  gap: .5rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--color-gray-opacity);
  font-size: rem(14);
}

.else {
  height: 1px;
  width: 2rem;
  background-color: var(--color-gray);
}
</style>