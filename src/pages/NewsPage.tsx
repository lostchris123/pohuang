import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Tag } from 'lucide-react'

const newsList = [
  {
    id: 1,
    title: '破荒AI携六大核心产品亮相2026人工智能大会',
    summary: '杭州破荒人工智能科技有限公司携爆款捕手、数字人平台、内容工厂、GEO优化、AI知识库平台、AI招投标系统六大核心产品参展，全方位展示AI技术在企业数字化转型中的创新应用。',
    date: '2026-04-25',
    tag: '展会动态',
    tagColor: 'bg-blue-100 text-blue-600'
  },
  {
    id: 2,
    title: 'AI招投标系统正式发布，赋能企业高效中标',
    summary: '破荒AI正式推出AI招投标系统，基于AI技术实现专业标书编写、合规审查与法规知识库集成，助力企业提升中标率与招投标效率。',
    date: '2026-04-20',
    tag: '产品发布',
    tagColor: 'bg-green-100 text-green-600'
  },
  {
    id: 3,
    title: '破荒AI知识库平台完成全面升级',
    summary: 'AI知识库平台完成重大版本更新，新增智能检索引擎、知识图谱构建等核心功能，进一步提升企业知识管理效率。',
    date: '2026-04-15',
    tag: '产品更新',
    tagColor: 'bg-purple-100 text-purple-600'
  },
  {
    id: 4,
    title: '破荒AI与多家头部企业达成战略合作',
    summary: '杭州破荒人工智能科技有限公司与多家行业头部企业签署战略合作协议，共同推进AI技术在多领域的深度应用与商业化落地。',
    date: '2026-04-10',
    tag: '合作动态',
    tagColor: 'bg-orange-100 text-orange-600'
  },
  {
    id: 5,
    title: '数字人平台月活用户突破10万',
    summary: '破荒AI数字人平台持续高速增长，月活跃用户数正式突破10万大关，覆盖直播带货、智能客服、虚拟宣讲等多元场景。',
    date: '2026-04-05',
    tag: '里程碑',
    tagColor: 'bg-red-100 text-red-600'
  },
  {
    id: 6,
    title: '爆款捕手3.0版本上线，AI分析能力再升级',
    summary: '爆款捕手迎来3.0大版本更新，AI大数据分析引擎全面升级，爆款挖掘准确率提升至95%以上，趋势预判周期缩短至24小时。',
    date: '2026-03-28',
    tag: '产品更新',
    tagColor: 'bg-purple-100 text-purple-600'
  }
]

const NewsPage: React.FC = () => {
  return (
    <div className='overflow-hidden'>
      <section className='section-padding bg-gradient-to-br from-primary-blue/10 to-accent-purple/10'>
        <div className='container-responsive'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center'
          >
            <h1 className='text-5xl md:text-6xl font-black mb-6'>
              <span className='text-gradient'>新闻动态</span>
            </h1>
            <p className='text-xl text-secondary-lightGray max-w-3xl mx-auto'>
              了解破荒AI最新资讯、产品动态与行业洞察
            </p>
          </motion.div>
        </div>
      </section>

      <section className='section-padding'>
        <div className='container-responsive'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {newsList.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group cursor-pointer'
              >
                <div className='flex items-center space-x-3 mb-4'>
                  <span className={'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ' + news.tagColor}>
                    <Tag className='w-3 h-3 mr-1' />
                    {news.tag}
                  </span>
                  <span className='flex items-center text-sm text-secondary-lightGray'>
                    <Calendar className='w-4 h-4 mr-1' />
                    {news.date}
                  </span>
                </div>

                <h3 className='text-xl font-bold mb-3 text-secondary-darkGray group-hover:text-primary-blue transition-colors'>
                  {news.title}
                </h3>

                <p className='text-secondary-gray leading-relaxed mb-6'>
                  {news.summary}
                </p>

                <div className='flex items-center text-primary-blue font-semibold text-sm group-hover:translate-x-1 transition-transform'>
                  <span>阅读全文</span>
                  <ArrowRight className='w-4 h-4 ml-1' />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsPage
