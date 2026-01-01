'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const servicesData: Record<string, any> = {
  'editorial-shoots': {
    title: 'Editorial Shoots',
    tagline: 'Visual stories crafted with intention',
    description: 'Our editorial shoots go beyond beautiful imagery. We create visual narratives that capture the essence of your brand, combining thoughtful art direction with technical excellence to produce content that resonates and endures.',
    approach: [
      'We begin with discovery—understanding your brand, audience, and vision',
      'Develop creative concepts that align with your story and goals',
      'Scout locations and coordinate styling that enhances the narrative',
      'Execute with precision, capturing moments that matter',
      'Refine through expert post-production and retouching'
    ],
    deliverables: [
      'High-resolution imagery for print and digital',
      'Behind-the-scenes content',
      'Styled and retouched finals',
      'Licensing and usage rights'
    ],
    idealFor: [
      'Fashion and lifestyle brands',
      'Product launches',
      'Brand campaigns',
      'Editorial publications'
    ]
  },
  'content-creation': {
    title: 'Content Creation',
    tagline: 'Stories that connect and convert',
    description: 'Content is the voice of your brand. We create meaningful, strategic content that speaks directly to your audience—building trust, inspiring action, and fostering lasting connections.',
    approach: [
      'Research your audience and competitive landscape',
      'Define your unique brand voice and messaging',
      'Develop content pillars aligned with business goals',
      'Create compelling copy and visual assets',
      'Optimize for engagement and conversion'
    ],
    deliverables: [
      'Brand messaging framework',
      'Long and short-form copy',
      'Visual content assets',
      'Content style guide'
    ],
    idealFor: [
      'Brands building online presence',
      'Product storytelling',
      'Campaign launches',
      'Ongoing content needs'
    ]
  },
  'social-media': {
    title: 'Social Media Strategy and Management',
    tagline: 'Community built on authenticity',
    description: 'Social media is about relationships, not just reach. We develop thoughtful strategies that build genuine community, foster engagement, and turn followers into advocates.',
    approach: [
      'Audit current presence and identify opportunities',
      'Define platform strategy and content themes',
      'Create cohesive visual and editorial calendars',
      'Engage authentically with your community',
      'Analyze, iterate, and optimize continuously'
    ],
    deliverables: [
      'Platform-specific strategies',
      'Content calendars and scheduling',
      'Community management',
      'Monthly analytics reports'
    ],
    idealFor: [
      'Growing brands',
      'Product-based businesses',
      'Service providers',
      'Influencers and creators'
    ]
  },
  'ecommerce': {
    title: 'E-commerce',
    tagline: 'Shopping experiences that inspire',
    description: 'Your online store should be more than a transaction point—it should be an experience. We design and optimize e-commerce platforms that delight customers and drive sustainable growth.',
    approach: [
      'Understand your products, customers, and goals',
      'Design intuitive shopping experiences',
      'Optimize product presentation and photography',
      'Implement conversion-focused features',
      'Test, analyze, and continuously improve'
    ],
    deliverables: [
      'Custom e-commerce setup',
      'Product photography and styling',
      'User experience optimization',
      'Payment and shipping integration'
    ],
    idealFor: [
      'Product-based businesses',
      'Fashion and lifestyle brands',
      'Artisans and makers',
      'Growing online retailers'
    ]
  },
  'website': {
    title: 'Website',
    tagline: 'Digital homes for modern brands',
    description: 'Your website is often the first impression you make. We design and build custom websites that reflect your brand personality, engage visitors, and convert them into customers.',
    approach: [
      'Discovery sessions to understand your vision',
      'Strategic planning and sitemap development',
      'Custom design tailored to your brand',
      'Development with modern, scalable technology',
      'Launch with SEO optimization and analytics'
    ],
    deliverables: [
      'Fully responsive website',
      'Content management system',
      'SEO optimization',
      'Training and documentation'
    ],
    idealFor: [
      'Startups and established businesses',
      'Creative professionals',
      'Service-based companies',
      'Anyone needing a refresh'
    ]
  },
  'branding': {
    title: 'Branding',
    tagline: 'Identity rooted in purpose',
    description: 'Great brands are not built overnight—they are crafted with care, strategy, and deep understanding. We create complete brand identities that articulate who you are and what you stand for.',
    approach: [
      'Deep dive into your story, values, and vision',
      'Market and competitor research',
      'Strategic positioning and messaging',
      'Visual identity development',
      'Comprehensive brand guidelines'
    ],
    deliverables: [
      'Brand strategy document',
      'Logo and visual identity',
      'Typography and color system',
      'Brand guidelines and assets'
    ],
    idealFor: [
      'New businesses',
      'Rebranding initiatives',
      'Growing companies',
      'Anyone seeking clarity'
    ]
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug]

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 px-6 md:px-12 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/services" className="inline-block text-sm text-primary/60 hover:text-primary mb-8">
              Back to Services
            </Link>
            <h1 className="text-5xl md:text-7xl font-light text-primary mb-6">
              {service.title}
            </h1>
            <p className="text-2xl md:text-3xl font-light text-primary/70">
              {service.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl font-light text-primary/80 leading-relaxed"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-6 md:px-12 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-12">
              Our Approach
            </h2>
            <ul className="space-y-6">
              {service.approach.map((item: string, index: number) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="text-accent mr-4 mt-1">—</span>
                  <span className="text-lg text-primary/80 font-light">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Deliverables and Ideal For */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-light text-primary mb-8">
              What You Will Receive
            </h3>
            <ul className="space-y-4">
              {service.deliverables.map((item: string, index: number) => (
                <li key={index} className="text-primary/80 font-light flex items-start">
                  <span className="mr-3">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-light text-primary mb-8">
              Ideal For
            </h3>
            <ul className="space-y-4">
              {service.idealFor.map((item: string, index: number) => (
                <li key={index} className="text-primary/80 font-light flex items-start">
                  <span className="mr-3">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-8">
            Ready to get started?
          </h2>
          <p className="text-lg text-primary/70 mb-10 font-light">
            Let us talk about your project and how we can bring your vision to life.
          </p>
          <Link
            href="/connect"
            className="inline-block px-12 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Start a conversation
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
