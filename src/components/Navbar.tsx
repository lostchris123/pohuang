import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/products', label: '产品中心' },
    { path: '/about', label: '企业简介' },
    { path: '/news', label: '新闻动态' },
    { path: '/contact', label: '联系我们' },
  ]

  const isActive = (path: string) => location.pathname === path

  const navigate = useNavigate()

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-white/10">
      <div className="container-responsive px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 bg-gradient-to-r from-primary-blue to-accent-purple rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"
              />
              <img src="/logo.png" alt="破荒AI" className="w-10 h-10 rounded-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-gradient">
                破荒AI
              </span>
              <span className="text-xs text-secondary-lightGray">
                杭州破荒人工智能科技有限公司
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-1 py-2 text-sm font-medium transition-colors hover:text-primary-blue ${
                  isActive(item.path) ? 'text-primary-blue' : 'text-secondary-gray'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-blue to-accent-purple rounded-full"
                  />
                )}
              </Link>
            ))}
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-primary-blue to-accent-purple text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>免费试用</span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary-silver transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-secondary-gray" />
            ) : (
              <Menu className="w-6 h-6 text-secondary-gray" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary-blue/10 text-primary-blue'
                      : 'hover:bg-secondary-silver text-secondary-gray'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false)
                  navigate("/contact")
                }}
                className="px-4 py-3 bg-gradient-to-r from-primary-blue to-accent-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                免费试用
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
