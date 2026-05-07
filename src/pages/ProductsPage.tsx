import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  TrendingUp, UserCircle, FileText, MapPin, Database, CheckCircle, ArrowRight,
  BarChart3, Target, Sparkles, ArrowUpRight,
  User, Layout, Rocket, MessageCircle,
  Wand2, FileImage, Zap, Palette,
  Brain, Navigation, LineChart, Users,
  Search, Network, Bot, BookOpen,
  Gavel, ShieldCheck, Scale, FileCheck
} from 'lucide-react'
import ImageGallery from '../components/ImageGallery'

const ProductsPage: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [galleryConfig, setGalleryConfig] = useState<{
    isOpen: boolean
    images: string[]
  }>({
    isOpen: false,
    images: []
  })

  const hotspotImages = [
    '/images/hotvideo/bushou1.jpg',
    '/images/hotvideo/bushou2.jpg',
    '/images/hotvideo/bushou3.jpg',
    '/images/hotvideo/bushou4.jpg',
    '/images/hotvideo/bushou5.jpg',
    '/images/hotvideo/bushou6.jpg',
    '/images/hotvideo/bushou7.jpg',
    '/images/hotvideo/bushou8.jpg',
    '/images/hotvideo/bushou9.jpg',
    '/images/hotvideo/bushou10.jpg'
  ]

  const digitalHumanImages = [
    '/images/shuziren/shuziren1.jpg',
    '/images/shuziren/shuziren2.jpg',
    '/images/shuziren/shuziren3.jpg',
    '/images/shuziren/shuziren4.jpg'
  ]

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location])

  const handleTrial = (trialUrl: string | null, productName: string) => {
    if (trialUrl) {
      window.open(trialUrl, '_blank')
    } else {
      alert(`${productName}试用功能正在开发中，敬请期待！`)
    }
  }

  const aiknowledgeImages = [
    '/images/aiknowledge/1.jpg',
    '/images/aiknowledge/2.jpg',
    '/images/aiknowledge/3.jpg',
    '/images/aiknowledge/4.jpg'
  ]

  const zhaotoubiaoImages = [
    '/images/zhaotoubiao/1.jpg',
    '/images/zhaotoubiao/2.jpg',
    '/images/zhaotoubiao/3.jpg',
    '/images/zhaotoubiao/4.jpg'
  ]

  const handleDetails = (productId: string) => {
    if (productId === 'hotspot-catcher') {
      setGalleryConfig({ isOpen: true, images: hotspotImages })
    } else if (productId === 'digital-human') {
      setGalleryConfig({ isOpen: true, images: digitalHumanImages })
    } else if (productId === 'ai-knowledge') {
      setGalleryConfig({ isOpen: true, images: aiknowledgeImages })
    } else if (productId === 'ai-bidding') {
      setGalleryConfig({ isOpen: true, images: zhaotoubiaoImages })
    } else {
      alert(`${productId}详情功能正在开发中，敬请期待！`)
    }
  }

  const handleContact = () => {
    navigate('/contact')
  }

  const products = [
    {
      id: 'hotspot-catcher',
      name: '爆款捕手',
      subtitle: 'AI驱动的爆款挖掘与趋势预判平台',
      description: '基于AI大数据分析技术，精准捕捉市场爆款，预判行业趋势，助力企业实现高效转化与商业价值最大化。',
      icon: <TrendingUp className="w-12 h-12" />,
      color: 'from-blue-500 to-cyan-500',
      trialUrl: 'https://101.43.94.39:25443/',
      features: [
        { title: 'AI大数据分析', description: '深度分析全网数据，挖掘潜在爆款商品', icon: <BarChart3 className="w-8 h-8 text-blue-500" /> },
        { title: '爆款挖掘引擎', description: '智能识别爆款特征，精准预测爆款趋势', icon: <Target className="w-8 h-8 text-cyan-500" /> },
        { title: '趋势预判系统', description: '基于机器学习算法，提前预判市场走向', icon: <Sparkles className="w-8 h-8 text-purple-500" /> },
        { title: '精准转化优化', description: '数据驱动决策，最大化转化率提升', icon: <ArrowUpRight className="w-8 h-8 text-green-500" /> }
      ],
      benefits: [
        '提升爆款识别准确率300%',
        '缩短选品决策周期70%',
        '降低库存风险60%',
        '提高销售转化率150%'
      ],
      useCases: ['电商选品', '内容创作', '广告投放', '市场分析']
    },
    {
      id: 'digital-human',
      name: '数字人平台',
      subtitle: '高仿真数字人解决方案',
      description: '打造高仿真数字人，支持直播带货、智能客服、虚拟宣讲等多场景应用，提升用户体验与品牌价值。',
      icon: <UserCircle className="w-12 h-12" />,
      color: 'from-purple-500 to-pink-500',
      trialUrl: 'https://111.228.5.238',
      features: [
        { title: '高仿真数字人', description: '逼真的外观与表情，沉浸式交互体验', icon: <User className="w-8 h-8 text-purple-500" /> },
        { title: '多场景适配', description: '直播、客服、宣讲等多场景无缝切换', icon: <Layout className="w-8 h-8 text-pink-500" /> },
        { title: '一键部署', description: '快速集成到现有系统，即开即用', icon: <Rocket className="w-8 h-8 text-orange-500" /> },
        { title: '实时交互', description: '支持实时对话与情感识别，智能响应', icon: <MessageCircle className="w-8 h-8 text-blue-500" /> }
      ],
      benefits: [
        '降低人工成本80%',
        '提升服务效率200%',
        '增强用户互动体验',
        '实现24小时不间断服务'
      ],
      useCases: ['直播带货', '智能客服', '虚拟宣讲', '品牌代言人']
    },
    {
      id: 'content-factory',
      name: '内容工厂',
      subtitle: 'AI内容生成平台',
      description: '基于AI技术的内容生成平台，实现文案、图片、视频等多形式内容高效量产与定制化生产。',
      icon: <FileText className="w-12 h-12" />,
      color: 'from-orange-500 to-red-500',
      trialUrl: 'https://111.228.5.238',
      features: [
        { title: 'AI智能生成', description: '一键生成高质量文案、图片、视频', icon: <Wand2 className="w-8 h-8 text-orange-500" /> },
        { title: '多内容形式', description: '支持文本、图像、视频、音频等多种形式', icon: <FileImage className="w-8 h-8 text-red-500" /> },
        { title: '高效量产', description: '批量生成内容，满足大规模需求', icon: <Zap className="w-8 h-8 text-yellow-500" /> },
        { title: '行业定制', description: '针对不同行业特点，定制化内容生成', icon: <Palette className="w-8 h-8 text-pink-500" /> }
      ],
      benefits: [
        '提升内容生产效率10倍',
        '降低内容制作成本90%',
        '保证内容质量一致性',
        '快速响应市场变化'
      ],
      useCases: ['营销文案', '产品描述', '社交媒体', '广告创意']
    },
    {
      id: 'geo-optimization',
      name: 'GEO优化',
      subtitle: '基于AI算法的地域优化平台',
      description: '运用AI算法技术，精准定位目标地域，提升地域曝光、优化流量转化，实现精准营销。',
      icon: <MapPin className="w-12 h-12" />,
      color: 'from-green-500 to-emerald-500',
      trialUrl: null,
      features: [
        { title: 'AI算法优化', description: '智能算法持续优化地域投放策略', icon: <Brain className="w-8 h-8 text-green-500" /> },
        { title: '精准地域定位', description: '精准锁定目标用户所在地域', icon: <Navigation className="w-8 h-8 text-emerald-500" /> },
        { title: '流量转化提升', description: '优化流量分配，提高转化效率', icon: <LineChart className="w-8 h-8 text-blue-500" /> },
        { title: '目标用户触达', description: '精准触达目标用户群体', icon: <Users className="w-8 h-8 text-purple-500" /> }
      ],
      benefits: [
        '提升地域曝光率200%',
        '优化流量转化率150%',
        '降低获客成本50%',
        '提高ROI 300%'
      ],
      useCases: ['本地营销', '区域推广', '门店引流', '地域广告']
    },
    {
      id: 'ai-knowledge',
      name: 'AI知识库平台',
      subtitle: '企业级智能知识管理平台',
      description: '打造企业专属知识库，实现知识沉淀、智能问答、知识复用，提升团队协作效率与知识价值。',
      icon: <Database className="w-12 h-12" />,
      color: 'from-indigo-500 to-purple-500',
      trialUrl: 'http://122.51.222.202:15173/',
      features: [
        { title: '智能检索引擎', description: '快速检索所需知识，毫秒级响应', icon: <Search className="w-8 h-8 text-indigo-500" /> },
        { title: '知识图谱构建', description: '自动构建知识关联图谱', icon: <Network className="w-8 h-8 text-purple-500" /> },
        { title: '智能问答系统', description: 'AI驱动的智能问答助手', icon: <Bot className="w-8 h-8 text-blue-500" /> },
        { title: '知识复用管理', description: '沉淀企业知识资产，实现价值复用', icon: <BookOpen className="w-8 h-8 text-green-500" /> }
      ],
      benefits: [
        '提升知识检索效率90%',
        '降低重复工作70%',
        '加速新人培训周期60%',
        '提升团队协作效率200%'
      ],
      useCases: ['企业培训', '客户服务', '知识沉淀', '智能问答']
    },
    {
      id: 'ai-bidding',
      name: 'AI招投标系统',
      subtitle: 'AI驱动的智能招投标平台',
      description: '基于AI技术，实现专业标书编写、合规性审查与法规知识库集成，助力企业提升中标率与招投标效率。',
      icon: <Gavel className="w-12 h-12" />,
      color: 'from-teal-500 to-blue-600',
      trialUrl: 'http://111.228.5.238:5173/',
      features: [
        { title: '专业标书编写', description: '基于招标文件智能生成专业标书，覆盖商务、技术、资信全模块', icon: <FileCheck className="w-8 h-8 text-teal-500" /> },
        { title: '合规审查', description: '对标书进行合规性、技术性全面审核，降低废标风险', icon: <ShieldCheck className="w-8 h-8 text-blue-600" /> },
        { title: '法规知识库', description: '集成法律法规和行业标准库，为标书编写提供权威法规支撑', icon: <Scale className="w-8 h-8 text-indigo-500" /> },
        { title: '智能审核引擎', description: 'AI驱动的标书质量评估，自动识别遗漏与风险点', icon: <Gavel className="w-8 h-8 text-purple-500" /> }
      ],
      benefits: [
        '提升标书编写效率80%',
        '降低废标风险90%',
        '缩短投标周期60%',
        '提高中标率50%'
      ],
      useCases: ['政府采购', '工程投标', '企业采购', '服务招标']
    }
  ]

  return (
    <div className="overflow-hidden">
      <ImageGallery
        isOpen={galleryConfig.isOpen}
        images={galleryConfig.images}
        onClose={() => setGalleryConfig({ isOpen: false, images: [] })}
      />
      
      <section className="section-padding bg-gradient-to-br from-primary-blue/10 to-accent-purple/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient">产品中心</span>
            </h1>
            <p className="text-xl text-secondary-lightGray max-w-3xl mx-auto">
              六大核心AI产品矩阵，为企业数字化转型提供全方位技术支持
            </p>
          </motion.div>
        </div>
      </section>

      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`section-padding ${index % 2 === 1 ? 'bg-secondary-silver/30' : ''}`}
        >
          <div className="container-responsive">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${product.color} text-white mb-6`}>
                  {product.icon}
                </div>

                <h2 className="text-4xl md:text-5xl font-black mb-3 text-secondary-darkGray">
                  {product.name}
                </h2>
                <p className="text-xl text-primary-blue font-semibold mb-6">
                  {product.subtitle}
                </p>
                <p className="text-lg text-secondary-gray mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {product.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                      <span className="text-sm text-secondary-gray">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.button
                    onClick={() => handleTrial(product.trialUrl, product.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 bg-gradient-to-r ${product.color} text-white font-bold rounded-full hover:shadow-xl transition-all flex items-center justify-center space-x-2`}
                  >
                    <span>立即试用</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    onClick={() => handleDetails(product.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-secondary-gray text-secondary-gray font-bold rounded-full hover:border-primary-blue hover:text-primary-blue transition-all"
                  >
                    了解详情
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="text-lg font-bold mb-2 text-secondary-darkGray">{feature.title}</h3>
                      <p className="text-sm text-secondary-lightGray">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold mb-6 text-secondary-darkGray">应用场景</h3>
              <div className="flex flex-wrap gap-3">
                {product.useCases.map((useCase, idx) => (
                  <span
                    key={idx}
                    className={`px-6 py-2 bg-gradient-to-r ${product.color} text-white rounded-full text-sm font-semibold`}
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-gradient-to-br from-secondary-darkGray to-secondary-gray text-white">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              找到适合您的解决方案
            </h2>
            <p className="text-xl text-secondary-silver mb-8 max-w-2xl mx-auto">
              不确定哪款产品最适合您的需求？我们的专家团队随时为您提供专业咨询
            </p>
            <motion.button
              onClick={handleContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-blue to-accent-purple text-white font-bold rounded-full hover:shadow-xl transition-all"
            >
              联系我们
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
