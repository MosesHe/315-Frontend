<script setup lang="ts">
/**
 * @description 应用头部组件
 * 
 * 该组件显示应用的顶部标题栏，包含以下功能：
 * 1. 显示应用名称"安全风险智能预警决策"
 * 2. 实时显示当前系统时间，每秒更新一次
 * 3. 渐变色标题文本，增强视觉效果
 * 4. 响应式布局设计
 */
import { ref, onMounted } from 'vue';

// 时间显示逻辑
const currentTime = ref(new Date().toLocaleTimeString());

onMounted(() => {
  setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString();
  }, 1000);
});
</script>

<template>
  <header class="app-header">
    <div class="logo">
      <span class="logo-text">安全风险智能预警决策</span>
    </div>
    <div class="header-right">
      <span class="time">{{ currentTime }}</span>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  height: var(--header-height);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
  background: linear-gradient(to right, #4a90e2, #7cb3f5);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header-right {
  display: flex;
  align-items: center;
}

.time {
  font-size: 18px;
  font-family: monospace;
  color: var(--accent-color);
}
</style> 