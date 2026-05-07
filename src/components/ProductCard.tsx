import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, UserCircle, FileText, MapPin, Database, Gavel, ArrowRight, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface ProductCardProps {
  id: number
  productId?: string
  name: string
  description: string
  features: string[]
  icon?: React.ReactNode
  color: string
  gradient: string
  isFeatured?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  productId,
  name,
  description,
  features,
  icon,
  color,
  gradient,
  isFeatured = false
}) => {
  const navigate = useNavigate()

  const icons = [
    <TrendingUp key="trend" className="w-8 h-8" />,
    <UserCircle key="user" className="w-8 h-8" />,
    <FileText key="file" className="w-8 h-8" />,
    <MapPin key="map" className="w-8 h-8" />,
    <Database key="db" className="w-8 h-8" />,
    <Gavel key="gavel" className="w-8 h-8" />
  ]

  const handleClick = () => {
    if (productId) {
      navigate(`/products#${productId}`)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative group cursor-pointer ${isFeatured ? 'md:col-span-2' : ''}`}
      onClick={handleClick}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
      
      <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-secondary-silver shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        {isFeatured && (
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-xs font-semibold text-white">爆款推荐</span>
            </div>
          </div>
        )}

        <div className={`absolute top-0 right-0 w-32 h-32 ${gradient} opacity-5 rounded-full -translate-y-16 translate-x-16`} />

        <div className="mb-6 relative">
          <div className={`inline-flex p-4 rounded-2xl ${color} bg-gradient-to-br`}>
            {icons[id - 1] || icon}
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-3 text-secondary-darkGray group-hover:text-gradient transition-colors">
          {name}
        </h3>

        <p className="text-secondary-lightGray mb-6 leading-relaxed">
          {description}
        </p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center text-sm md:text-base"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mr-3" />
              <span className="text-secondary-gray">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-6 border-t border-secondary-silver">
          <div className="text-sm text-secondary-lightGray">
            了解更多
          </div>
          <motion.div
            className="flex items-center space-x-2 text-primary-blue font-semibold group/btn"
          >
            <span>立即体验</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.div>
        </div>

        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-blue/20 rounded-2xl transition-all duration-300 pointer-events-none" />
      </div>

      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-blue/30 rounded-full"
            initial={{ 
              x: Math.random() * 100, 
              y: Math.random() * 100,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -20, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default ProductCard
