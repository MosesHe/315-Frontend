<script setup lang="ts">
defineProps<{
  chartClass?: string;
}>();
</script>

<template>
  <div class="placeholder-chart" :class="chartClass"></div>
</template>

<style scoped>
.placeholder-chart {
  width: 100%;
  height: 100%;
  background-color: #f9fafc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a0aec0;
  font-style: italic;
  border: 1px dashed #e0e6ed;
  background: linear-gradient(to bottom right, #f8f9fb, #f1f4f9);
  position: relative;
}

.placeholder-chart::after {
  content: '图表占位区域';
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  color: #a0aec0;
}
</style> 