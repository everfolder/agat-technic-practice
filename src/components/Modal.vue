<script setup>
import CloseModal from "@/assets/icons/close-modal.svg";

const props = defineProps({
  title: { String, default: '' },
  id: String
})
</script>

<template>
  <div :style="{ display: 'none' }">
    <div class="modal" :id="id">
      <div class="modal__head">
        {{ title }}
        <button data-fancybox-close class="phone-modal__close-btn">
          <CloseModal />
        </button>
      </div>
      <slot>

      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.modal {
  padding: 2rem;
  width: fluid(636, 466);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @include mobile {
    width: 100vw;
  }

  &__head {
    display: flex;
    justify-content: space-between;
    font-size: rem(20);
  }
}
</style>