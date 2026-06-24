<script setup>
import CloseModal from "@/assets/icons/close-modal.svg";

const props = defineProps({
  title: { String, default: '' },
  id: String,
  width: { type: [String, Number], default: null }
})
</script>

<template>
  <div :style="{ display: 'none' }">
    <div class="modal" :id="id"
    :style="{
        '--modal-width': width ? (typeof width === 'number' ? width + 'px' : width) : null }">
      <div class="modal__background">
        <slot name="background"></slot>
      </div>
      
      <div class="modal__content">
        <div class="modal__head">
          {{ title }}
          <button data-fancybox-close class="phone-modal__close-btn">
            <CloseModal />
          </button>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.modal {
  padding: 2rem;
  width: var(--modal-width, fluid(636, 466));
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;

  @include mobile {
    width: 100vw;
  }

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    position: relative;
    z-index: 1;
  }

  &__head {
    display: flex;
    justify-content: space-between;
    font-size: rem(20);
  }
}
</style>