<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
})

const emit = defineEmits(['close'])
const closeModal = () => {
  emit('close')
}
</script>

<template>
  <div v-if="isOpen" class="modal" @click.self="closeModal">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.modal{
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background: white;
  border-radius: rem(12);
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  padding: rem(24);
  max-height: 90vh;
  overflow-y: auto;
}
</style>