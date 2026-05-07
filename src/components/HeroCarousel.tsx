import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 1,
    title: '破荒AI · 赋能产业数字化升级',
    description: '以先进的AI技术驱动产业变革，助力企业实现智能化转型',
    bgColor: 'from-primary-blue/20 to-accent-purple/10',
    pattern: 'particles',
    cta: '探索产品',
    link: '/products'
  },
  {
    id: 2,
    title: '以AI技术，破局行业痛点',
    description: '深度理解行业需求，提供精准高效的AI解决方案',
    bgColor: 'from-accent-green/20 to-primary-blue/10',
    pattern: 'waves',
    cta: '了解技术',
    link: '/products'
  },
  {
    id: 3,
    title: '智能驱动，精准赋能',
    description: '五大核心产品体系，全面覆盖企业数字化转型需求',
    bgColor: 'from-purple-500/20 to-pink-500/10',
    pattern: 'grid',
    cta: '查看产品',
    link: '/products'
  },
  {
    id: 4,
    title: '破荒前行，智创未来',
    description: '携手共创人工智能新时代，引领科技创新浪潮',
    bgColor: 'from-orange-500/20 to-yellow-500/10',
    pattern: 'circuits',
    cta: '联系我们',
    link: '/contact'
  }
]

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary-silver to-white shadow-2xl">
      <div className="relative h-[500px] md:h-[600px]">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${slide.bgColor} bg-gradient-to-br`}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(26,115,232,0.3)_0%,transparent_50%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(138,43,226,0.2)_0%,transparent_50%)]" />
                </div>

                <div className="relative h-full flex items-center">
                  <div className="container-responsive px-8 lg:px-16">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="max-w-2xl"
                    >
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                        <span className="text-gradient">{slide.title}</span>
                      </h1>
                      <p className="text-lg md:text-xl text-secondary-gray mb-8 leading-relaxed">
                        {slide.description}
                      </p>
                      <motion.a
                        href={slide.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-8 py-3 bg-gradient-to-r from-primary-blue to-accent-purple text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300"
                      >
                        {slide.cta}
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-gradient-to-r from-primary-blue to-accent-purple'
                    : 'bg-secondary-silver hover:bg-secondary-lightGray'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary-silver">
          <motion.div
            key={currentSlide}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
            className="h-full bg-gradient-to-r from-primary-blue to-accent-purple"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel
