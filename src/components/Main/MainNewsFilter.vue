<script setup lang="js">
const props = defineProps({
  filter: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div>
    <button>
      {{props.filter}}
    </button>
  </div>
</template>

<style scoped lang="scss">

</style>