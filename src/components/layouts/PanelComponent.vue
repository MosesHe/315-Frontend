<script setup lang="ts">
// 不再需要title属性
</script>

<template>
  <div class="panel">
    <div class="panel-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.panel {
  background-color: var(--panel-background);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  margin-bottom: 16px;
  overflow: hidden;
  box-shadow: var(--panel-shadow);
  height: calc(33.33% - 11px);
  display: flex;
  flex-direction: column;
}

.panel-content {
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style> 