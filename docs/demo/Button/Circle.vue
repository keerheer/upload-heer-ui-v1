<script setup>
import HeButton from '@/components/button.vue'
</script>

<template>
  <div class="demo-button">
    <div class="button-row">
      <he-button icon="he-icon-a-favorite-full" circle type="primary"></he-button>
      <he-button icon="he-icon-a-to-up" circle type="success"></he-button>
      <he-button icon="he-icon-a-aixin" circle type="info"></he-button>
      <he-button icon="he-icon-a-select" circle type="warning"></he-button>
      <he-button icon="he-icon-a-back2" circle type="danger"></he-button>
    </div>
  </div>
</template>

<style scoped>
.demo-button {
  padding: 20px;
}

.button-row {
  margin-bottom: 20px;
}

.button-row .he-button {
  margin-right: 10px;
}
</style>