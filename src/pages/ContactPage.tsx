import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: '公司地址',
      content: '浙江省杭州市余杭区人工智能小镇',
      details: '杭州市余杭区文一西路998号'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: '联系电话',
      content: '153-8101-1072',
      details: '工作日 9:00-18:00'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: '电子邮箱',
      content: 'contact@pohuang.ai',
      details: '商务合作：business@pohuang.ai'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '工作时间',
      content: '周一至周五 9:00-18:00',
      details: '周末及节假日休息'
    }
  ]

  const subjectOptions = [
    '产品咨询',
    '技术支持',
    '商务合作',
    '媒体采访',
    '加入我们',
    '其他'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // 实际开发中这里应该调用真实的API
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="overflow-hidden">
      {/* Hero区域 */}
      <section className="section-padding bg-gradient-to-br from-primary-blue/10 to-accent-purple/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient">联系我们</span>
            </h1>
            <p className="text-xl text-secondary-lightGray max-w-3xl mx-auto">
              我们期待与您交流，为您提供专业的AI解决方案与服务支持
            </p>
          </motion.div>
        </div>
      </section>

      {/* 联系信息 */}
      <section className="section-padding">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 联系表单 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold mb-8 text-secondary-darkGray">
                发送消息
              </h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-green-800">消息发送成功！</div>
                      <div className="text-green-600 text-sm">我们将在24小时内回复您</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
                >
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <div>
                      <div className="font-semibold text-red-800">发送失败</div>
                      <div className="text-red-600 text-sm">请稍后重试或直接通过电话联系我们</div>
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-gray mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-secondary-silver focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all outline-none"
                      placeholder="请输入您的姓名"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-gray mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-secondary-silver focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all outline-none"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-gray mb-2">
                      联系电话
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-secondary-silver focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all outline-none"
                      placeholder="请输入您的联系电话"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary-gray mb-2">
                      公司名称
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-secondary-silver focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all outline-none"
                      placeholder="请输入您的公司名称"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-gray mb-2">
                    咨询类型 *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-secondary-silver focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all outline-none"
                  >
                    <option value="">请选择咨询类型</option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-gray mb-2">
                    详细需求 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-secondary-silver focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 transition-all outline-none resize-none"
                    placeholder="请详细描述您的需求..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 bg-gradient-to-r from-primary-blue to-accent-purple text-white font-bold rounded-xl hover:shadow-xl transition-all flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>发送中...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>发送消息</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* 联系信息 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-secondary-darkGray">
                  联系信息
                </h2>
                <p className="text-secondary-lightGray mb-8">
                  无论您有任何问题或需求，我们都将竭诚为您提供帮助。选择最适合您的联系方式，我们期待与您交流。
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-primary-blue to-accent-purple text-white">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-secondary-darkGray">
                        {info.title}
                      </h3>
                      <p className="text-primary-blue font-medium mb-1">{info.content}</p>
                      <p className="text-sm text-secondary-lightGray">{info.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 地图占位 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-secondary-silver to-white rounded-2xl p-8 text-center"
              >
                <h3 className="text-xl font-bold mb-4 text-secondary-darkGray">
                  地理位置
                </h3>
                <div className="aspect-video bg-gradient-to-br from-primary-blue/20 to-accent-purple/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary-blue mx-auto mb-4" />
                    <p className="font-medium text-secondary-gray">杭州市余杭区人工智能小镇</p>
                    <p className="text-sm text-secondary-lightGray mt-2">实际开发中可集成地图组件</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ区域 */}
      <section className="section-padding bg-secondary-silver/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-gradient">常见问题</span>
            </h2>
            <p className="text-xl text-secondary-lightGray">
              您可能关心的问题都在这里
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: '如何开始使用破荒AI的产品？',
                answer: '您可以通过官网注册账号，选择适合您的产品套餐，我们的客户经理会为您提供一对一的实施指导。'
              },
              {
                question: '产品支持定制化开发吗？',
                answer: '是的，我们支持根据企业特定需求进行定制化开发，请联系商务团队获取详细方案。'
              },
              {
                question: '技术支持响应时间是多少？',
                answer: '我们提供7x24小时技术支持，紧急问题30分钟内响应，一般问题2小时内解决。'
              },
              {
                question: '产品数据安全如何保障？',
                answer: '我们采用银行级别的数据加密技术，通过ISO 27001安全认证，确保客户数据安全。'
              },
              {
                question: '是否有免费试用版本？',
                answer: '所有产品都提供14天免费试用，无需绑定信用卡，体验完整功能。'
              },
              {
                question: '如何获取产品报价？',
                answer: '请通过联系表单或直接致电商务团队，我们将根据您的需求提供定制化报价。'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-bold mb-3 text-secondary-darkGray">
                  {faq.question}
                </h3>
                <p className="text-secondary-lightGray">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="section-padding">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary-blue to-accent-purple rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                立即开启AI赋能之旅
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                选择破荒AI，选择专业、高效、可靠的AI技术合作伙伴
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.a
                  href="tel:15381011072"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary-blue font-bold rounded-full hover:shadow-xl transition-all"
                >
                  立即致电
                </motion.a>
                <motion.a
                  href="mailto:contact@pohuang.ai"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
                >
                  发送邮件
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage