<script setup>
import ArrowDrop from '@/assets/icons/arrow-drop.svg'
import {ref} from "vue";

defineProps({
  title: {
    type: String,
    required: true
  }
})

const active = ref(true)

const setActive = () => {
  active.value = !active.value
}
</script>

<template>
<div class="drop">
  <div class="drop__inner">
    <div @click="setActive" class="drop__title">
      <ArrowDrop class="drop__arrow" :class="{'active-arrow': active}"/>
      <p>{{title}}</p>
    </div>
    <div class="drop__list" :class="{'active': active}">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.drop {
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__title {
    display: flex;
    gap: .5rem;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
  }

  &__list {
    border: 1px solid var(--color-gray-dark);
    padding: .5rem;
    display: none;
    max-height: rem(150);
    overflow-block: auto;
  }

  &__arrow {
    transition-duration: .2s;
  }
}

.active {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.active-arrow {
  transform: rotateZ(180deg);
}
</style>