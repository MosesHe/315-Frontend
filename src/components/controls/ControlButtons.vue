<script setup lang="ts">
import { ref, watch } from 'vue';

// 控制当前显示的浮窗
const activeWindow = ref<string | null>(null);

// 切换浮窗显示状态
const toggleWindow = (window: string) => {
  activeWindow.value = activeWindow.value === window ? null : window;
};

// 关闭浮窗
const closeWindow = () => {
  activeWindow.value = null;
};

// 场景切换相关数据
const industries = [
  { id: 'chemical', name: '化工' },
  { id: 'steel', name: '钢铁' },
  { id: 'newEnergy', name: '新能源' },
  { id: 'medicine', name: '医药' }
];

const scenes = [
  { id: 'intelligentDecision', name: '智能决策场景' },
  { id: 'leanManufacturing', name: '精益制造场景' },
  { id: 'precisionService', name: '精准服务场景' }
];

// 应用选项，根据行业和场景组合生成
const applications = {
  chemical: {
    intelligentDecision: [
      { id: 'safetyRisk', name: '安全风险智能预警决策' },
      { id: 'environmentalControl', name: '环保管控决策支持' }
    ],
    leanManufacturing: [
      { id: 'placeholder1', name: '化工-精益制造场景-应用-1' },
      { id: 'placeholder2', name: '化工-精益制造场景-应用-2' }
    ],
    precisionService: [
      { id: 'placeholder1', name: '化工-精准服务场景-应用-1' },
      { id: 'placeholder2', name: '化工-精准服务场景-应用-2' }
    ]
  },
  steel: {
    intelligentDecision: [
      { id: 'placeholder1', name: '钢铁-智能决策场景-应用-1' },
      { id: 'placeholder2', name: '钢铁-智能决策场景-应用-2' }
    ],
    leanManufacturing: [
      { id: 'placeholder1', name: '钢铁-精益制造场景-应用-1' },
      { id: 'placeholder2', name: '钢铁-精益制造场景-应用-2' }
    ],
    precisionService: [
      { id: 'placeholder1', name: '钢铁-精准服务场景-应用-1' },
      { id: 'placeholder2', name: '钢铁-精准服务场景-应用-2' }
    ]
  },
  newEnergy: {
    intelligentDecision: [
      { id: 'placeholder1', name: '新能源-智能决策场景-应用-1' },
      { id: 'placeholder2', name: '新能源-智能决策场景-应用-2' }
    ],
    leanManufacturing: [
      { id: 'placeholder1', name: '新能源-精益制造场景-应用-1' },
      { id: 'placeholder2', name: '新能源-精益制造场景-应用-2' }
    ],
    precisionService: [
      { id: 'placeholder1', name: '新能源-精准服务场景-应用-1' },
      { id: 'placeholder2', name: '新能源-精准服务场景-应用-2' }
    ]
  },
  medicine: {
    intelligentDecision: [
      { id: 'placeholder1', name: '医药-智能决策场景-应用-1' },
      { id: 'placeholder2', name: '医药-智能决策场景-应用-2' }
    ],
    leanManufacturing: [
      { id: 'placeholder1', name: '医药-精益制造场景-应用-1' },
      { id: 'placeholder2', name: '医药-精益制造场景-应用-2' }
    ],
    precisionService: [
      { id: 'placeholder1', name: '医药-精准服务场景-应用-1' },
      { id: 'placeholder2', name: '医药-精准服务场景-应用-2' }
    ]
  }
};

// 表单数据
const selectedIndustry = ref('');
const selectedScene = ref('');
const selectedApplication = ref('');

// 消息提示
const message = ref('');
const showMessage = ref(false);

// 显示消息提示
const showTip = (msg: string) => {
  message.value = msg;
  showMessage.value = true;
  setTimeout(() => {
    showMessage.value = false;
  }, 3000);
};

// 监听行业变化
watch(selectedIndustry, () => {
  selectedScene.value = '';
  selectedApplication.value = '';
});

// 监听场景变化
watch(selectedScene, () => {
  selectedApplication.value = '';
});

// 获取当前行业和场景下的应用列表
const getApplications = () => {
  if (!selectedIndustry.value || !selectedScene.value) return [];
  return applications[selectedIndustry.value as keyof typeof applications]?.[selectedScene.value as keyof typeof applications.chemical] || [];
};

// 重置表单
const resetForm = () => {
  selectedIndustry.value = '';
  selectedScene.value = '';
  selectedApplication.value = '';
};

// 提交表单
const submitForm = () => {
  if (!selectedIndustry.value || !selectedScene.value || !selectedApplication.value) {
    showTip('请完整填写表单');
    return;
  }
  
  console.log('提交表单:', {
    行业: selectedIndustry.value,
    场景: selectedScene.value,
    应用: selectedApplication.value
  });
  
  // 这里可以添加实际的提交逻辑
  
  closeWindow();
};
</script>

<template>
  <div class="controls-wrapper">
    <button class="control-btn" @click="toggleWindow('scene')">场景切换</button>
    <button class="control-btn" @click="toggleWindow('model')">模型选择</button>
    <button class="control-btn" @click="toggleWindow('interface')">人机接口</button>
    
    <!-- 场景切换浮窗 -->
    <transition name="fade">
      <div v-if="activeWindow === 'scene'" class="overlay" @click="closeWindow">
        <div class="floating-window" @click.stop>
          <button class="close-btn" @click="closeWindow">×</button>
          
          <!-- 消息提示 -->
          <transition name="tip">
            <div v-if="showMessage" class="message-tip">
              {{ message }}
            </div>
          </transition>
          
          <div class="window-content">
            <!-- 场景切换内容 -->
            <div class="scene-window">
              <h2 class="window-title">场景切换</h2>
              
              <div class="form-container">
                <!-- 行业选择 -->
                <div class="form-group">
                  <label class="form-label">请选择行业</label>
                  <select v-model="selectedIndustry" class="form-select">
                    <option value="">请选择</option>
                    <option v-for="industry in industries" :key="industry.id" :value="industry.id">
                      {{ industry.name }}
                    </option>
                  </select>
                </div>
                
                <!-- 场景选择 -->
                <div class="form-group">
                  <label class="form-label">请选择场景</label>
                  <select v-model="selectedScene" class="form-select" :disabled="!selectedIndustry">
                    <option value="">请选择</option>
                    <option v-for="scene in scenes" :key="scene.id" :value="scene.id">
                      {{ scene.name }}
                    </option>
                  </select>
                </div>
                
                <!-- 应用选择 -->
                <div class="form-group">
                  <label class="form-label">请选择应用</label>
                  <select v-model="selectedApplication" class="form-select" :disabled="!selectedScene">
                    <option value="">请选择</option>
                    <option v-for="app in getApplications()" :key="app.id" :value="app.id">
                      {{ app.name }}
                    </option>
                  </select>
                </div>
                
                <!-- 按钮组 -->
                <div class="button-group">
                  <button class="submit-btn" @click="submitForm">提交</button>
                  <button class="reset-btn" @click="resetForm">重置</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    
    <!-- 模型选择浮窗 -->
    <transition name="fade">
      <div v-if="activeWindow === 'model'" class="overlay" @click="closeWindow">
        <div class="floating-window" @click.stop>
          <button class="close-btn" @click="closeWindow">×</button>
          <div class="window-content">
            <!-- 模型选择内容 -->
            <div class="model-window">
              模型选择内容区域
            </div>
          </div>
        </div>
      </div>
    </transition>
    
    <!-- 人机接口浮窗 -->
    <transition name="fade">
      <div v-if="activeWindow === 'interface'" class="overlay" @click="closeWindow">
        <div class="floating-window" @click.stop>
          <button class="close-btn" @click="closeWindow">×</button>
          <div class="window-content">
            <!-- 人机接口内容 -->
            <div class="interface-window">
              人机接口内容区域
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.controls-wrapper {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  padding: 5px 0;
  position: relative;
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

/* 遮罩层样式 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 浮窗样式 */
.floating-window {
  position: relative;
  top: -10%;
  width: 80%;
  max-width: 800px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 100;
  overflow: hidden;
  padding: 40px 20px 20px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #333;
  font-size: 20px;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.window-content {
  max-height: 70vh;
  overflow-y: auto;
}

/* 消息提示 */
.message-tip {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  z-index: 1000;
  font-size: 14px;
}

/* 提示动画 */
.tip-enter-active,
.tip-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.tip-enter-from,
.tip-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

/* 窗口标题 */
.window-title {
  text-align: center;
  margin-top: 0;
  margin-bottom: 40px;
  font-size: 24px;
  color: #333;
}

/* 表单样式 */
.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding-top: 20px;
}

.form-group {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}

.form-label {
  flex: 0 0 120px;
  text-align: right;
  margin-right: 20px;
  font-size: 16px;
}

.form-select {
  flex: 1;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 14px;
  background-color: white;
}

.form-select:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

/* 按钮组 */
.button-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.submit-btn, .reset-btn {
  min-width: 100px;
  padding: 10px 25px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #ddd;
  transition: all 0.3s;
}

.submit-btn {
  background-color: #2c3e50;
  color: white;
  border-color: #2c3e50;
}

.reset-btn {
  background-color: white;
  color: #333;
}

.submit-btn:hover {
  background-color: #1e2a36;
}

.reset-btn:hover {
  background-color: #f5f5f5;
}

/* 各个窗口特定样式 */
.scene-window, .model-window, .interface-window {
  min-height: 450px;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from .floating-window,
.fade-leave-to .floating-window {
  transform: scale(0.95);
}
</style> 