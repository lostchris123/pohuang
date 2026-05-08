import React from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Target, 
  Rocket, 
  Award,
  Lightbulb,
  Heart,
  Users,
  Globe
} from 'lucide-react'

const AboutPage: React.FC = () => {
  const timeline = [
    {
      year: '2024',
      title: '公司成立',
      description: '杭州破荒人工智能科技有限公司正式成立，开启AI技术创新之路'
    },
    {
      year: '2024',
      title: '产品发布',
      description: '爆款捕手、数字人平台等核心产品相继上线，获得市场认可'
    },
    {
      year: '2025',
      title: '快速增长',
      description: '服务客户突破100家，AI知识库、招投标系统等新产品矩阵成型'
    },
    {
      year: '2025',
      title: '行业认可',
      description: '获评浙江省科技型中小企业，成为IARA国际机器人产教融合创新中心理事单位'
    },
    {
      year: '2026',
      title: '生态构建',
      description: '构建完整的AI产品生态矩阵，携手高校与企业推进AI产业化落地'
    }
  ]

  const team = [
    {
      name: '技术团队',
      count: '20+',
      description: '来自阿里巴巴、百度等一线互联网公司的AI技术专家',
      icon: <Brain className="w-8 h-8" />
    },
    {
      name: '产品团队',
      count: '5+',
      description: '资深产品经理，深耕行业多年，深刻理解企业需求',
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      name: '服务团队',
      count: '10+',
      description: '专业客户服务团队，提供7x24小时技术支持',
      icon: <Heart className="w-8 h-8" />
    },
    {
      name: '市场团队',
      count: '10+',
      description: '市场运营专家，助力企业实现商业价值最大化',
      icon: <Globe className="w-8 h-8" />
    }
  ]

  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: '求真务实',
      description: '不说假话大话，只做真需求、真价值。数据说话，结果导向。客户没受益，就是我们没做好。'
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: '深耕笃行',
      description: '不追风口不贪捷径，愿意花笨功夫把一件事做到极致。一米宽，一千米深。'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: '开放共创',
      description: '不闭门造车，和客户同行、和伙伴共赢。问题一起扛，成果一起享。'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: '破荒进取',
      description: '不安于舒适区，敢于走进无人区。破是打破常规，荒是开垦荒地——从零到一，我们先行。'
    }
  ]

  const certifications = [
    '浙江省科技型中小企业',
    'IARA国际机器人产教融合创新中心理事单位',
    '武汉市黄陂区服装行业协会AI数智化服务中心',
    '杭州电子科技大学破荒人工智能智慧教育研究院'
  ]

  const certImages = [
    '/images/certs/WechatIMG241.jpg',
    '/images/certs/WechatIMG3413.jpg',
    '/images/certs/WechatIMG3416.jpg',
    '/images/certs/WechatIMG3415.jpg',
    '/images/certs/WechatIMG3417.jpg',
    '/images/certs/WechatIMG3421.jpg',
    '/images/certs/WechatIMG3423.jpg',
    '/images/certs/WechatIMG3422.jpg'
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero区域 */}
      <section className="section-padding bg-gradient-to-br from-primary-blue/10 to-accent-purple/10 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient">关于破荒AI</span>
            </h1>
            <p className="text-xl text-secondary-lightGray max-w-3xl mx-auto leading-relaxed">
              杭州破荒人工智能科技有限公司，聚焦服装行业AI赋能，从面料选择到趋势预判、从设计打版到智能营销，用AI重新定义产业链每一个环节。深耕一域、复制千行，将行业AI方法论延伸至制造、零售、检务等领域
            </p>
          </motion.div>

          {/* 企业使命愿景 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '使命', bold: '让AI深入每一根纱线，让智能织就每一个行业', content: '从服装行业出发，用AI重新定义产业链的每一个环节——从面料选择到趋势预判，从设计打版到智能营销。先做透一个行业，再把方法论复制到千行百业。' },
              { title: '愿景', bold: '成为中国最懂行业的AI赋能平台', content: '5年内深度赋能服装产业链上下游1000+企业，形成可复制的行业AI范式，向制造、零售、检务等领域延伸，最终成为产业智能化的基础设施。' },
              { title: '价值观', bold: '求真务实 · 深耕笃行 · 开放共创 · 破荒进取', content: '破旧立新，开荒前行。不是等风来，而是自己造风。' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary-blue">{item.title}</h3>
                <p className="text-lg font-bold text-secondary-darkGray mb-2">{item.bold}</p>
                <p className="text-sm text-secondary-gray leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 装饰元素 */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent-purple/5 rounded-full blur-3xl" />
      </section>

      {/* 发展历程 */}
      <section className="section-padding">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-gradient">发展历程</span>
            </h2>
            <p className="text-xl text-secondary-lightGray">
              破荒AI的成长足迹
            </p>
          </motion.div>

          <div className="relative">
            {/* 时间轴线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-blue to-accent-purple hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                      <div className="text-3xl font-black text-gradient mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-2 text-secondary-darkGray">{item.title}</h3>
                      <p className="text-secondary-lightGray">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* 时间点 */}
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-blue to-accent-purple text-white font-bold text-sm shadow-lg">
                    {item.year}
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="section-padding bg-secondary-silver/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-gradient">核心团队</span>
            </h2>
            <p className="text-xl text-secondary-lightGray">
              专业、专注、专心的精英团队
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-blue to-accent-purple text-white mb-6">
                  {member.icon}
                </div>
                <div className="text-4xl font-black text-gradient mb-2">{member.count}</div>
                <h3 className="text-xl font-bold mb-3 text-secondary-darkGray">{member.name}</h3>
                <p className="text-secondary-lightGray text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="section-padding">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-gradient">核心价值观</span>
            </h2>
            <p className="text-xl text-secondary-lightGray">
              指引我们前行的精神力量
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-6 rounded-3xl bg-white shadow-lg mb-6">
                  <div className="text-primary-blue">{value.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary-darkGray">{value.title}</h3>
                <p className="text-secondary-lightGray">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 资质认证 */}
      <section className="section-padding bg-gradient-to-br from-secondary-darkGray to-secondary-gray text-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">资质认证</h2>
            <p className="text-xl text-secondary-silver">
              专业实力，权威认证
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <div className="text-sm font-semibold">{cert}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <img src={img} alt="资质认证" className="w-full h-48 object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage