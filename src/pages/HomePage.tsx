import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import ProductCard from '../components/ProductCard'
import { Brain, Zap, Target, Rocket } from 'lucide-react'

const HomePage: React.FC = () => {
  const navigate = useNavigate()

  const products = [
    {
      id: 1,
      productId: 'hotspot-catcher',
      name: '爆款捕手',
      description: 'AI驱动的爆款挖掘与趋势预判平台，助力企业精准捕捉市场机遇，实现高效转化',
      features: ['AI大数据分析', '爆款挖掘引擎', '趋势预判系统', '精准转化优化'],
      color: 'from-blue-500 to-cyan-500 text-white',
      gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      isFeatured: false
    },
    {
      id: 2,
      productId: 'digital-human',
      name: '数字人平台',
      description: '高仿真数字人解决方案，支持直播带货、智能客服、虚拟宣讲等多场景应用',
      features: ['高仿真数字人', '多场景适配', '一键部署', '实时交互'],
      color: 'from-purple-500 to-pink-500 text-white',
      gradient: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      id: 3,
      productId: 'content-factory',
      name: '内容工厂',
      description: 'AI内容生成平台，实现文案、图片、视频等多形式内容高效量产与定制化生产',
      features: ['AI智能生成', '多内容形式', '高效量产', '行业定制'],
      color: 'from-orange-500 to-red-500 text-white',
      gradient: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      id: 4,
      productId: 'geo-optimization',
      name: 'GEO优化',
      description: '基于AI算法的地域优化平台，提升地域曝光、优化流量转化、精准触达目标用户',
      features: ['AI算法优化', '精准地域定位', '流量转化提升', '目标用户触达'],
      color: 'from-green-500 to-emerald-500 text-white',
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    {
      id: 5,
      productId: 'ai-knowledge',
      name: 'AI知识库平台',
      description: '企业级智能知识管理平台，实现知识沉淀、智能问答、知识复用的高效管理',
      features: ['智能检索引擎', '知识图谱构建', '智能问答系统', '知识复用管理'],
      color: 'from-indigo-500 to-purple-500 text-white',
      gradient: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      productId: 'ai-bidding',
      name: 'AI招投标系统',
      description: 'AI驱动的智能招投标平台，专业标书编写、合规审查与法规支持，助力企业高效中标',
      features: ['专业标书编写', '合规审查', '法规知识库', '智能审核'],
      color: 'from-teal-500 to-blue-600 text-white',
      gradient: 'bg-gradient-to-br from-teal-500 to-blue-600'
    }
  ]

  const coreValues = [
    { icon: <Brain className="w-8 h-8" />, title: '智能驱动', description: '深度学习算法赋能业务决策' },
    { icon: <Target className="w-8 h-8" />, title: '精准赋能', description: '精准定位企业核心需求' },
    { icon: <Zap className="w-8 h-8" />, title: '高效转化', description: '最大化投入产出比' },
    { icon: <Rocket className="w-8 h-8" />, title: '创新突破', description: '持续技术创新引领行业' }
  ]

  const handleFreeConsult = () => {
    navigate('/contact')
  }

  const handleViewCases = () => {
    alert('案例展示功能正在开发中，敬请期待！')
  }

  return (
    <div className="overflow-hidden">
      <section className="section-padding">
        <div className="container-responsive">
          <HeroCarousel />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-blue/5 to-accent-purple/5">
        <div className="container-responsive px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-white shadow-lg mb-4">
                  <div className="text-primary-blue">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary-darkGray">{value.title}</h3>
                <p className="text-secondary-lightGray text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-gradient">核心产品矩阵</span>
            </h2>
            <p className="text-xl text-secondary-lightGray max-w-2xl mx-auto">
              六大核心产品体系，全面赋能企业数字化转型
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} icon={null as any} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-secondary-darkGray to-secondary-gray text-white">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: '服务客户' },
              { number: '500万+', label: '处理数据' },
              { number: '99.9%', label: '系统可用性' },
              { number: '24/7', label: '技术支持' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black mb-2 text-gradient">{stat.number}</div>
                <div className="text-secondary-silver text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary-blue to-accent-purple rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-4">准备好开启AI之旅了吗？</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                立即联系我们，获取专属解决方案，让AI技术为您的企业赋能
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button
                  onClick={handleFreeConsult}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-blue font-bold rounded-full hover:shadow-xl transition-all"
                >
                  免费咨询
                </motion.button>
                <motion.button
                  onClick={handleViewCases}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
                >
                  查看案例
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
