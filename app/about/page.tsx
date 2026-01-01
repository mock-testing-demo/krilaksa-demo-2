'use client'

import { motion } from 'framer-motion'

const story = [
  {
    heading: 'Why we exist',
    content: 'Krilaksa was born from a simple belief: brands deserve better than template solutions and empty promises. In a world saturated with noise, we saw an opportunity to create something different—a studio that values ideas over trends, and relationships over transactions.'
  },
  {
    heading: 'Our philosophy',
    content: 'We approach every project as storytellers first. Before we design, before we strategize, we listen. We believe the best work emerges when we truly understand not just what you do, but why you do it. Your brand story is unique, and it deserves to be told with care, intention, and authenticity.'
  },
  {
    heading: 'How we work',
    content: 'Collaboration is at the heart of everything we create. We do not believe in the agency-client divide. Instead, we see ourselves as partners in your journey—bringing creative expertise, strategic thinking, and unwavering commitment to your vision. We ask questions, challenge assumptions, and push boundaries, always with your best interests at heart.'
  },
  {
    heading: 'What drives us',
    content: 'We are driven by the belief that good design can change perceptions, build communities, and create lasting impact. We measure success not in clicks or impressions, but in the meaningful connections your brand makes with the people who matter most.'
  }
]

const team = [
  {
    name: 'Creative Direction',
    description: 'We guide the visual and conceptual direction of every project, ensuring consistency, beauty, and purpose.'
  },
  {
    name: 'Strategy',
    description: 'Behind every creative decision is thoughtful strategy that aligns with your business goals and audience needs.'
  },
  {
    name: 'Craft',
    description: 'We obsess over details—from typography to user experience—because excellence lives in the margins.'
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-light text-primary mb-8">
              About Us
            </h1>
            <p className="text-2xl md:text-3xl font-light text-primary/70 leading-relaxed">
              We are a creative studio that believes in the power of stories to shape brands and build lasting connections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-32">
          {story.map((section, index) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={index % 2 === 1 ? 'md:ml-auto md:max-w-3xl' : ''}
            >
              <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">
                {section.heading}
              </h2>
              <p className="text-lg md:text-xl text-primary/70 font-light leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-32 px-6 md:px-12 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-8 text-center">
              What makes us different
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-2xl font-light text-primary mb-4">
                  {item.name}
                </h3>
                <p className="text-primary/70 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-12">
              Our values
            </h2>
            <div className="space-y-8">
              {[
                { title: 'Authenticity', description: 'We believe in honest work that reflects who you truly are, not who you think you should be.' },
                { title: 'Excellence', description: 'Good enough is never enough. We pursue excellence in every detail, every interaction, every deliverable.' },
                { title: 'Empathy', description: 'Understanding comes before creation. We take time to listen, learn, and see the world through your eyes.' },
                { title: 'Evolution', description: 'The best brands grow and adapt. We create foundations that endure while leaving room for evolution.' }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-accent pl-6"
                >
                  <h3 className="text-xl font-light text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-primary/70 font-light">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-8">
            We would love to hear your story
          </h2>
          <p className="text-lg text-primary/70 mb-10 font-light">
            Whether you are just starting out or looking to evolve, let us explore what we can create together.
          </p>
          <a
            href="/connect"
            className="inline-block px-12 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Get in touch
          </a>
        </motion.div>
      </section>
    </main>
  )
}
