'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type FilterType = 'all' | 'fashion' | 'product' | 'jewelry' | 'ecommerce'
type ContentType = 'all' | 'video' | 'shoot' | 'website' | 'branding'

interface PortfolioItem {
  id: number
  title: string
  category: FilterType[]
  type: ContentType[]
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Minimalist Fashion Editorial', category: ['fashion'], type: ['shoot'] },
  { id: 2, title: 'Artisan Jewelry Branding', category: ['jewelry'], type: ['branding'] },
  { id: 3, title: 'Skincare E-commerce Platform', category: ['ecommerce', 'product'], type: ['website'] },
  { id: 4, title: 'Fashion Campaign Video', category: ['fashion'], type: ['video'] },
  { id: 5, title: 'Luxury Watch Product Shoot', category: ['product', 'jewelry'], type: ['shoot'] },
  { id: 6, title: 'Sustainable Fashion Brand Identity', category: ['fashion'], type: ['branding'] },
  { id: 7, title: 'Jewelry E-commerce Site', category: ['jewelry', 'ecommerce'], type: ['website'] },
  { id: 8, title: 'Product Launch Campaign', category: ['product'], type: ['video', 'shoot'] },
  { id: 9, title: 'Boutique Fashion Store', category: ['fashion', 'ecommerce'], type: ['website'] },
  { id: 10, title: 'Heritage Jewelry Collection', category: ['jewelry'], type: ['shoot'] },
  { id: 11, title: 'Wellness Product Branding', category: ['product'], type: ['branding'] },
  { id: 12, title: 'Fashion Week Behind Scenes', category: ['fashion'], type: ['video'] },
]

export default function PortfolioPage() {
  const [industryFilter, setIndustryFilter] = useState<FilterType>('all')
  const [typeFilter, setTypeFilter] = useState<ContentType>('all')

  const filteredItems = portfolioItems.filter(item => {
    const matchesIndustry = industryFilter === 'all' || item.category.includes(industryFilter)
    const matchesType = typeFilter === 'all' || item.type.includes(typeFilter)
    return matchesIndustry && matchesType
  })

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-light text-primary mb-8">
              Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-primary/70 max-w-3xl font-light leading-relaxed">
              A curated selection of our work across industries and mediums.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-6 md:px-12 bg-cream sticky top-20 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Industry Filter */}
            <div>
              <h3 className="text-sm font-light text-primary mb-4">Industry</h3>
              <div className="flex flex-wrap gap-3">
                {(['all', 'fashion', 'product', 'jewelry', 'ecommerce'] as FilterType[]).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setIndustryFilter(filter)}
                    className={`px-4 py-2 text-sm font-light transition-all ${
                      industryFilter === filter
                        ? 'bg-primary text-white'
                        : 'border border-primary/20 text-primary/70 hover:border-primary/50'
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <h3 className="text-sm font-light text-primary mb-4">Type</h3>
              <div className="flex flex-wrap gap-3">
                {(['all', 'video', 'shoot', 'website', 'branding'] as ContentType[]).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setTypeFilter(filter)}
                    className={`px-4 py-2 text-sm font-light transition-all ${
                      typeFilter === filter
                        ? 'bg-primary text-white'
                        : 'border border-primary/20 text-primary/70 hover:border-primary/50'
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                {/* Image Placeholder */}
                <div className="bg-cream aspect-[3/4] mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-primary/30 text-sm">Portfolio Image</span>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-light text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                
                {/* Meta */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.type.map((t) => (
                    <span key={t} className="text-xs text-primary/50 font-light">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-lg text-primary/60 font-light">
                No items match your current filters.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}
