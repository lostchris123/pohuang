import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Twitter, 
  Linkedin,
  ChevronRight 
} from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { name: '爆款捕手', path: '/products#hotspot-catcher' },
      { name: '数字人平台', path: '/products#digital-human' },
      { name: '内容工厂', path: '/products#content-factory' },
      { name: 'GEO优化', path: '/products#geo-optimization' },
      { name: 'AI知识库平台', path: '/products#ai-knowledge' }
    ],
    company: [
      { name: '关于我们', path: '/about' },
      { name: '联系我们', path: '/contact' },
      { name: '加入我们', path: '/careers' },
      { name: '新闻动态', path: '/news' }
    ],
    legal: [
      { name: '隐私政策', path: '/privacy' },
      { name: '服务条款', path: '/terms' },
      { name: 'Cookie政策', path: '/cookies' }
    ]
  }

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' }
  ]

  return (
    <footer className="bg-secondary-darkGray text-white">
      {/* 主要内容区 */}
      <div className="container-responsive section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 公司信息 */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-primary-blue to-accent-purple p-2 rounded-xl">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">破荒AI</div>
                <div className="text-xs text-secondary-silver">POHUANG.AI</div>
              </div>
            </Link>
            <p className="text-secondary-silver text-sm leading-relaxed mb-6">
              杭州破荒人工智能科技有限公司，专注于AI技术研发与应用，致力于为企业提供智能化转型解决方案。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 产品服务 */}
          <div>
            <h4 className="text-lg font-semibold mb-6">产品服务</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="flex items-center text-secondary-silver hover:text-white transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 关于公司 */}
          <div>
            <h4 className="text-lg font-semibold mb-6">关于公司</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="flex items-center text-secondary-silver hover:text-white transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="text-lg font-semibold mb-6">联系我们</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-blue mt-0.5 flex-shrink-0" />
                <span className="text-secondary-silver text-sm">
                  浙江省杭州市余杭区<br />人工智能小镇
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-blue flex-shrink-0" />
                <a 
                  href="tel:15381011072" 
                  className="text-secondary-silver hover:text-white transition-colors text-sm"
                >
                  153-8101-1072
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-blue flex-shrink-0" />
                <a 
                  href="mailto:contact@pohuang.ai" 
                  className="text-secondary-silver hover:text-white transition-colors text-sm"
                >
                  contact@pohuang.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部版权区 */}
      <div className="border-t border-white/10">
        <div className="container-responsive px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-secondary-silver">
              © {currentYear} 杭州破荒人工智能科技有限公司 版权所有
            </div>
            <div className="flex items-center space-x-6 text-sm">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-secondary-silver hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 返回顶部按钮 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-primary-blue text-white rounded-full shadow-lg hover:bg-primary-darkBlue transition-all hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <ChevronRight className="w-5 h-5 rotate-[-90deg]" />
      </button>
    </footer>
  )
}

export default Footer