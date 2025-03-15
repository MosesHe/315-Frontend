<script setup lang="ts">
// 控制按钮组件 - 仅UI展示，不包含Unity交互
</script>

<template>
  <div class="controls-wrapper">
    <button class="control-btn">场景设置</button>
    <button class="control-btn">算法选择</button>
    <button class="control-btn">蒙特卡洛仿真结果</button>
  </div>
</template>

<style scoped>
.controls-wrapper {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  padding: 5px 0;
}

.control-btn {
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(74, 144, 226, 0.2);
}

.control-btn:hover {
  background-color: var(--primary-dark);
  box-shadow: 0 4px 6px rgba(74, 144, 226, 0.3);
}
</style> 