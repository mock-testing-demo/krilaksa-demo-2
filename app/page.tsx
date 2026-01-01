'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const values = [
  {
    title: 'Creative',
    description: 'We believe creativity is not decoration. It is the foundation of every meaningful connection between a brand and its audience. We see what others miss and translate it into visual language that resonates.'
  },
  {
    title: 'Mindset',
    description: 'Strategy without soul is empty. We approach every project with intention, curiosity, and deep thinking. Our work begins not with tools, but with understanding who you are, what you believe, and why it matters.'
  },
  {
    title: 'Trust',
    description: 'The best work happens when collaboration feels effortless. We build relationships rooted in transparency, respect, and shared vision. Your story is safe with us, and together, we will tell it right.'
  }
]

const services = [
  'Editorial Shoots',
  'Content Creation',
  'Social Media Strategy',
  'E-commerce',
  'Website Design',
  'Branding'
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-primary mb-8 leading-tight">
            We create stories<br />that shape brands
          </h1>
          <p className="text-lg md:text-xl text-primary/70 max-w-2xl mx-auto font-light">
            A creative studio where ideas become visual narratives and brands find their voice
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 md:px-12 bg-cream">
        <div className="max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-32 last:mb-0"
            >
              <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
                {value.title}
              </h2>
              <p className="text-lg md:text-xl text-primary/70 max-w-3xl font-light leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-8">
              What we offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-lg text-primary/80 font-light"
                >
                  {service}
                </motion.div>
              ))}
            </div>
            <Link
              href="/services"
              className="inline-block mt-12 text-primary border-b border-primary/30 hover:border-primary transition-colors pb-1"
            >
              Explore our services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 md:px-12 bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-8">
            Let us create something meaningful
          </h2>
          <p className="text-lg md:text-xl text-primary/70 mb-12 font-light">
            Every brand has a story waiting to be told. We would love to help you tell yours.
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
