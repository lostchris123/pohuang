// 类型定义
export interface Product {
  id: number;
  name: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
  isFeatured?: boolean;
  link?: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  pattern: string;
  cta: string;
}

export interface TeamMember {
  name: string;
  count: string;
  description: string;
  icon: React.ReactNode;
}

export interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// 常量数据
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: '爆款捕手',
    description: 'AI驱动的爆款挖掘与趋势预判平台，助力企业精准捕捉市场机遇，实现高效转化',
    features: ['AI大数据分析', '爆款挖掘引擎', '趋势预判系统', '精准转化优化'],
    color: 'from-blue-500 to-cyan-500 text-white',
    gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    isFeatured: true,
    link: 'https://101.43.94.39:25443/'
  },
  {
    id: 2,
    name: '数字人平台',
    description: '高仿真数字人解决方案，支持直播带货、智能客服、虚拟宣讲等多场景应用',
    features: ['高仿真数字人', '多场景适配', '一键部署', '实时交互'],
    color: 'from-purple-500 to-pink-500 text-white',
    gradient: 'bg-gradient-to-br from-purple-500 to-pink-500',
    link: 'https://ai.jiyigpt.com/'
  },
  {
    id: 3,
    name: '内容工厂',
    description: 'AI内容生成平台，实现文案、图片、视频等多形式内容高效量产与定制化生产',
    features: ['AI智能生成', '多内容形式', '高效量产', '行业定制'],
    color: 'from-orange-500 to-red-500 text-white',
    gradient: 'bg-gradient-to-br from-orange-500 to-red-500'
  },
  {
    id: 4,
    name: 'GEO优化',
    description: '基于AI算法的地域优化平台，提升地域曝光、优化流量转化、精准触达目标用户',
    features: ['AI算法优化', '精准地域定位', '流量转化提升', '目标用户触达'],
    color: 'from-green-500 to-emerald-500 text-white',
    gradient: 'bg-gradient-to-br from-green-500 to-emerald-500'
  },
  {
    id: 5,
    name: 'AI知识库平台',
    description: '企业级智能知识管理平台，实现知识沉淀、智能问答、知识复用的高效管理',
    features: ['智能检索引擎', '知识图谱构建', '智能问答系统', '知识复用管理'],
    color: 'from-indigo-500 to-purple-500 text-white',
    gradient: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    link: 'https://111.228.5.238:8843/'
  },
  {
    id: 6,
    name: 'AI招投标系统',
    description: 'AI驱动的智能招投标平台，专业标书编写、合规审查与法规支持，助力企业高效中标',
    features: ['专业标书编写', '合规审查', '法规知识库', '智能审核'],
    color: 'from-teal-500 to-blue-600 text-white',
    gradient: 'bg-gradient-to-br from-teal-500 to-blue-600'
  }
];

export const CORE_VALUES: ValueItem[] = [
  {
    icon: '🧠',
    title: '智能驱动',
    description: '深度学习算法赋能业务决策'
  },
  {
    icon: '🎯',
    title: '精准赋能',
    description: '精准定位企业核心需求'
  },
  {
    icon: '⚡',
    title: '高效转化',
    description: '最大化投入产出比'
  },
  {
    icon: '🚀',
    title: '创新突破',
    description: '持续技术创新引领行业'
  }
];

export const CONTACT_INFO = {
  address: '浙江省杭州市临安区科技大道浩源创新工场三号楼501',
  phone: '153-8101-1072',
  email: 'pohuangai@163.com',
  businessHours: '周一至周五 9:00-18:00'
};

export const SUBJECT_OPTIONS = [
  '产品咨询',
  '技术支持',
  '商务合作',
  '媒体采访',
  '加入我们',
  '其他'
];