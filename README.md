# 工业数据可视化大屏项目

## 项目概述
本项目是一个基于Vue3、Ant Design Vue和AntV的工业数据可视化大屏前端项目。并集成Unity WebGL动画演示功能。项目采用单页面应用设计，界面分为左中右三列布局。项目已实现登录认证保护，仅授权用户可访问数据大屏。

## 已完成的工作
- ✅ 使用Vite创建Vue3+TypeScript项目框架
- ✅ 安装核心依赖包：
  - Ant Design Vue（UI组件库）
  - AntV系列（G2、G6、L7图表库）
  - Pinia（状态管理）
  - Axios（HTTP客户端）
- ✅ 创建基础项目目录结构
- ✅ 设置基本布局框架
- ✅ 实现基本页面布局与组件
- ✅ 开发面板组件和控制按钮
- ✅ Unity WebGL集成相关功能
- ✅ 实现登录认证功能
- ✅ 添加路由保护和验证

## 技术栈
- **前端框架**: Vue 3 (3.5.x) + TypeScript + Vite (6.2.x)
- **UI组件库**: Ant Design Vue (4.2.x)
- **可视化图表**: AntV (G2, G6, L7)
- **3D动画**: Unity WebGL
- **状态管理**: Pinia (3.0.x)
- **HTTP客户端**: Axios (1.8.x)
- **图标**: @ant-design/icons-vue (7.0.x)
- **路由**: Vue Router (4.5.x)

## 项目结构
```
├── public/                 # 静态资源
│   ├── unity/              # Unity WebGL 资源 (待添加)
│   └── images/             # 静态图片资源 (待添加)
├── src/
│   ├── assets/             # 项目资源文件
│   │   └── styles/         # 全局样式文件
│   ├── components/         # 通用组件
│   │   ├── layouts/        # 布局组件
│   │   │   ├── AppHeader.vue       # 应用头部组件
│   │   │   ├── MainLayout.vue      # 主布局组件
│   │   │   └── PanelComponent.vue  # 通用面板组件
│   │   ├── charts/         # 图表组件
│   │   │   └── ChartPlaceholder.vue # 图表占位组件
│   │   ├── controls/       # 控制组件
│   │   │   └── ControlButtons.vue   # 控制按钮组件
│   │   └── display/        # 显示组件
│   │       ├── ResourcesPanel.vue   # 资源面板组件
│   │       └── UnityContainer.vue   # Unity容器组件
│   ├── views/              # 页面视图
│   │   ├── DashboardView.vue       # 主仪表盘视图
│   │   └── LoginView.vue           # 登录页面
│   ├── services/           # API服务
│   │   ├── AuthService.ts          # 认证服务
│   │   └── UnityService.ts         # Unity交互服务
│   ├── router/             # 路由配置
│   │   └── index.ts                # 路由定义与保护
│   ├── stores/             # Pinia状态管理 (待开发)
│   ├── utils/              # 工具函数 (待开发)
│   ├── types/              # 类型定义
│   ├── App.vue             # 根组件
│   └── main.ts             # 入口文件
├── .gitignore              # Git忽略文件
├── .env.example            # 环境变量示例文件
├── index.html              # HTML模板
├── package.json            # 项目依赖
├── tsconfig.json           # TypeScript配置
├── vite.config.ts          # Vite配置
└── README.md               # 项目说明
```

## 界面布局设计
根据实际实现，页面分为三列布局：
- **左侧列**: 展示各类数据可视化图表，当前已有占位图表
- **中间列**: 上半部分为Unity WebGL内容展示区域，下半部分为控制区域，包含操作按钮和资源信息
- **右侧列**: 展示各类数据可视化图表，当前已有占位图表

## 认证与路由
系统实现了基本的用户认证和路由保护：
- 使用Vue Router管理路由
- 未登录用户会被重定向到登录页
- 已登录用户访问登录页会自动跳转到仪表盘
- AuthService封装了认证相关功能，便于未来扩展

## 已实现功能
- 主界面三列布局
- Unity WebGL容器集成与加载
- 控制按钮面板
- 资源信息显示面板
- 通用面板组件（带标题和可定制的边框）
- 图表占位组件
- 用户登录认证
- 受保护的路由

## 后续开发计划

### 近期任务
1. 完善各类可视化图表组件（雷达图、拓扑图、状态卡片等）
2. 实现服务端API对接
3. 配置状态管理存储

### 中期目标
1. 优化移动端和不同分辨率的适配
2. 增强Unity与Vue应用的交互功能
3. 实现数据动态更新和实时显示

## 环境配置
项目使用环境变量进行配置，需要在项目根目录创建`.env`文件：
```
# 复制.env.example并重命名为.env
cp .env.example .env

# 编辑.env文件，设置用户名和密码
```

## 开始使用
```bash
# 安装依赖
npm install

# 开发模式启动
npm run dev

# 构建生产版本
npm run build
```

## 登录与认证
系统实现了基本的登录认证功能：
- 默认用户名和密码存储在`.env`文件中，格式如下：
  ```
  VITE_APP_USERNAME=your_username
  VITE_APP_PASSWORD=your_password
  ```
- 登录后会在localStorage中存储登录状态
- 登录后自动跳转到数据大屏页面
- 退出登录可通过在URL中添加`?logout=true`参数实现，例如：
  ```
  http://localhost:5173/dashboard?logout=true
  ```

## 注意事项
- Unity WebGL资源需单独打包并放置在public/unity目录下
- 大屏设计基于1920x1080分辨率，适配其他分辨率仍在优化中
- 环境变量文件(.env)不应提交到版本控制系统，已在.gitignore中配置忽略