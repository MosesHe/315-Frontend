<script setup lang="ts">
// 资源展示区域组件
</script>

<template>
  <div class="resources-display">
    <div class="resources-title">资源展示区</div>
    <div class="resources-content">
      <div class="resource-item" v-for="i in 5" :key="i">
        <div class="resource-icon">
          <div class="icon-placeholder"></div>
        </div>
        <div class="resource-info">
          <div class="resource-name">资源 {{ i }}</div>
          <div class="resource-description">资源描述信息占位</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resources-display {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.resources-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 6px;
  padding-left: 5px;
}

.resources-content {
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  overflow-x: auto;
  padding: 0 5px 10px 5px;
  flex: 1;
}

.resource-item {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 4px 8px;
  width: 160px;
  box-shadow: var(--panel-shadow);
  height: 38px;
}

.resource-icon {
  margin-right: 6px;
}

.icon-placeholder {
  width: 24px;
  height: 24px;
  border-radius: 3px;
  background-color: #f0f4f8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a0aec0;
  font-size: 12px;
}

.icon-placeholder::after {
  content: '图';
}

.resource-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.resource-name {
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
}

.resource-description {
  font-size: 10px;
  color: #718096;
  line-height: 1.2;
}
</style>