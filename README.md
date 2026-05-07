# 杭州破荒人工智能科技有限公司官方网站

基于React 18 + TypeScript + Tailwind CSS + Framer Motion构建的现代化企业官网，兼具科技感与设计感，适配PC端与移动端响应式布局。

## ✨ 项目特色

- 🎨 **高级科技感设计** - 金属灰、科技蓝主色调，融入线条光影、粒子特效等科技元素
- 📱 **完美响应式** - 支持PC、平板、手机多端适配，浏览体验一致
- ⚡ **极致性能** - Vite构建，代码分割，图片懒加载，快速加载体验
- 🎬 **流畅动画** - Framer Motion实现丝滑过渡效果，增强交互体验
- 🌐 **SEO优化** - 语义化HTML，结构化数据，社交媒体优化
- 🔧 **现代化技术栈** - React 18, TypeScript, Tailwind CSS, Framer Motion

## 🚀 快速开始

### 环境要求
- Node.js 18+ 
- npm 或 yarn 或 pnpm

### 安装依赖
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发模式
```bash
npm run dev
```
访问 http://localhost:3000

### 生产构建
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

## 📁 项目结构

```
pohuang-ai-website/
├── public/              # 静态资源
├── src/
│   ├── components/      # 可复用组件
│   │   ├── Navbar.tsx   # 导航栏
│   │   ├── Footer.tsx   # 页脚
│   │   ├── HeroCarousel.tsx # 轮播图
│   │   └── ProductCard.tsx # 产品卡片
│   ├── pages/          # 页面组件
│   │   ├── HomePage.tsx    # 首页
│   │   ├── ProductsPage.tsx # 产品中心
│   │   ├── AboutPage.tsx   # 企业简介
│   │   └── ContactPage.tsx # 联系我们
│   ├── styles/         # 样式文件
│   │   └── globals.css # 全局样式
│   ├── utils/          # 工具函数
│   │   ├── constants.ts # 常量数据
│   │   └── helpers.ts   # 辅助函数
│   ├── App.tsx         # 应用入口
│   └── main.tsx        # 应用启动
├── index.html          # HTML模板
├── vite.config.ts      # Vite配置
├── tailwind.config.js  # Tailwind配置
├── tsconfig.json       # TypeScript配置
└── package.json        # 项目配置
```

## 🎨 设计系统

### 色彩体系
- **主色调**: 科技蓝 (`#1A73E8`)、金属灰 (`#3C4043`)、纯白 (`#FFFFFF`)
- **辅助色**: 深空蓝 (`#0D47A1`)、银灰 (`#E8EAED`)
- **强调色**: 活力蓝 (`#4285F4`)、科技绿 (`#34A853`)

### 字体系统
- **中文字体**: Noto Sans SC、PingFang SC
- **英文字体**: system-ui, sans-serif
- **代码字体**: SF Mono, Monaco

### 间距系统
基础单位: 8px
间距倍数: 8px, 16px, 24px, 32px, 48px, 64px

## 📱 响应式断点

| 断点 | 尺寸 | 描述 |
|------|------|------|
| `sm` | 640px | 移动端 |
| `md` | 768px | 平板端 |
| `lg` | 1024px | 小桌面 |
| `xl` | 1280px | 大桌面 |
| `2xl`| 1536px | 超大桌面 |

## 🌐 页面功能

### 首页 (`/`)
- ✅ 响应式导航栏
- ✅ 自动轮播图 (3-4张)
- ✅ 核心价值展示
- ✅ 产品聚合卡片
- ✅ 统计数据展示
- ✅ CTA区域

### 产品中心 (`/products`)
- ✅ 五大产品详细介绍
- ✅ 功能特性卡片
- ✅ 应用场景标签
- ✅ 效益数据展示
- ✅ 试用按钮

### 企业简介 (`/about`)
- ✅ 发展历程时间线
- ✅ 核心团队介绍
- ✅ 核心价值观
- ✅ 资质认证展示

### 联系我们 (`/contact`)
- ✅ 联系信息卡片
- ✅ 联系表单 (带验证)
- ✅ 常见问题FAQ
- ✅ 地图占位区域

## 🔧 技术特性

### 性能优化
- ✅ 图片懒加载
- ✅ 代码分割
- ✅ 字体子集化
- ✅ 预加载关键资源

### SEO优化
- ✅ 语义化HTML标签
- ✅ 结构化数据 (JSON-LD)
- ✅ 社交媒体元标签
- ✅ 网站地图 (可配置)

### 无障碍访问
- ✅ ARIA标签
- ✅ 键盘导航支持
- ✅ 屏幕阅读器优化
- ✅ 高对比度支持

### 浏览器兼容
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📦 部署指南

### Vercel部署
```bash
# 安装Vercel CLI
npm i -g vercel

# 部署
vercel
```

### Netlify部署
```bash
# 构建项目
npm run build

# 部署dist目录
netlify deploy --prod --dir=dist
```

### 自定义服务器部署
```bash
# 构建
npm run build

# 部署dist目录到您的服务器
```

## 🔄 更新与维护

### 内容更新
- 产品信息: 更新 `src/utils/constants.ts`
- 轮播图: 修改 `src/components/HeroCarousel.tsx`
- 联系信息: 更新 `src/pages/ContactPage.tsx`

### 样式定制
- 主题颜色: 修改 `tailwind.config.js`
- 全局样式: 更新 `src/styles/globals.css`
- 组件样式: 使用Tailwind类名

### 功能扩展
- 添加新页面: 在 `src/pages/` 创建新组件
- 添加新路由: 在 `src/App.tsx` 注册路由
- 添加新组件: 在 `src/components/` 创建组件

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目基于 MIT 许可证开源。

## 📞 技术支持

如有技术问题，请：
1. 查看 [问题追踪](https://github.com/your-repo/issues)
2. 发送邮件至: contact@pohuang.ai
3. 拨打热线: 153-8101-1072

---

**杭州破荒人工智能科技有限公司** © 2024