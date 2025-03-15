<script setup lang="ts">
import { inject, computed, ref } from 'vue';
import type { Ref } from 'vue';

defineProps<{
  chartClass?: string;
}>();

// 注入展开状态，默认为false
const isExpanded = inject<Ref<boolean>>('isChartExpanded', ref(false));

// 根据展开状态计算样式
const chartStyle = computed(() => {
  if (isExpanded.value) {
    return {
      height: '100%',
      fontSize: '24px'
    };
  }
  return {};
});
</script>

<template>
  <div class="placeholder-chart" :class="chartClass" :style="chartStyle"></div>
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
  transition: all 0.3s ease;
}

.placeholder-chart::after {
  content: '图表占位区域';
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  color: #a0aec0;
  transition: font-size 0.3s ease;
}
</style> 