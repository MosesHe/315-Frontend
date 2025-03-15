<script setup lang="ts">
import MainLayout from '../components/layouts/MainLayout.vue';
import PanelComponent from '../components/layouts/PanelComponent.vue';
import ChartPlaceholder from '../components/charts/ChartPlaceholder.vue';
import UnityContainer from '../components/display/UnityContainer.vue';
import ControlButtons from '../components/controls/ControlButtons.vue';
import ResourcesPanel from '../components/display/ResourcesPanel.vue';
</script>

<template>
  <MainLayout>
    <!-- 左侧列内容 - 三个图表 -->
    <template #left-column>
      <PanelComponent>
        <ChartPlaceholder chartClass="chart-one" />
      </PanelComponent>
      
      <PanelComponent>
        <ChartPlaceholder chartClass="chart-two" />
      </PanelComponent>

      <PanelComponent>
        <ChartPlaceholder chartClass="chart-three" />
      </PanelComponent>
    </template>
    
    <!-- 中间列WebGL内容 -->
    <template #webgl-content>
      <UnityContainer />
    </template>
    
    <!-- 中间列底部控制区 -->
    <template #controls>
      <ControlButtons />
    </template>
    
    <!-- 中间列资源展示区 -->
    <template #resources>
      <ResourcesPanel />
    </template>
    
    <!-- 右侧列内容 - 三个图表 -->
    <template #right-column>
      <PanelComponent>
        <ChartPlaceholder chartClass="chart-four" />
      </PanelComponent>
      
      <PanelComponent>
        <ChartPlaceholder chartClass="chart-five" />
      </PanelComponent>

      <PanelComponent>
        <ChartPlaceholder chartClass="chart-six" />
      </PanelComponent>
    </template>
  </MainLayout>
</template>

<style scoped>
/* 移除高度限制，因为图表现在会填充整个面板 */
</style> 