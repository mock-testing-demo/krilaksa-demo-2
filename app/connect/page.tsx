'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    country: '',
    services: [] as string[],
    timeline: '',
    budget: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const serviceOptions = [
    'Editorial Shoots',
    'Content Creation',
    'Social Media Strategy and Management',
    'E-commerce',
    'Website',
    'Branding'
  ]

  const timelineOptions = [
    'ASAP',
    'Within this month',
    '2-3 months',
    'Just planning'
  ]

  const budgetOptions = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ]

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-light text-primary mb-6">
            Thank you
          </h1>
          <p className="text-xl md:text-2xl text-primary/70 font-light mb-8">
            We have received your message and we will get back to you soon.
          </p>
          <p className="text-lg text-primary/60 font-light">
            We typically respond within 24-48 hours. Looking forward to connecting with you.
          </p>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-light text-primary mb-8">
              Let Us Connect
            </h1>
            <p className="text-xl md:text-2xl text-primary/70 font-light leading-relaxed">
              Tell us about your project, and we will start a conversation about how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-12"
          >
            {/* Name */}
            <div>
              <label className="block text-lg font-light text-primary mb-3">
                What is your name?
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 border border-primary/20 focus:border-primary outline-none text-primary font-light bg-white"
                placeholder="Your name"
              />
            </div>

            {/* Location */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-lg font-light text-primary mb-3">
                  City
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-6 py-4 border border-primary/20 focus:border-primary outline-none text-primary font-light bg-white"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="block text-lg font-light text-primary mb-3">
                  State
                </label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-6 py-4 border border-primary/20 focus:border-primary outline-none text-primary font-light bg-white"
                  placeholder="State"
                />
              </div>
              <div>
                <label className="block text-lg font-light text-primary mb-3">
                  Country
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-6 py-4 border border-primary/20 focus:border-primary outline-none text-primary font-light bg-white"
                  placeholder="Country"
                />
              </div>
            </div>

            {/* Services */}
            <div>
              <label className="block text-lg font-light text-primary mb-4">
                Which services are you interested in?
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {serviceOptions.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceToggle(service)}
                    className={`px-6 py-3 text-left text-sm font-light transition-all ${
                      formData.services.includes(service)
                        ? 'bg-primary text-white'
                        : 'border border-primary/20 text-primary/70 hover:border-primary/50'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-lg font-light text-primary mb-4">
                When are you hoping to start?
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {timelineOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeline: option })}
                    className={`px-6 py-3 text-left text-sm font-light transition-all ${
                      formData.timeline === option
                        ? 'bg-primary text-white'
                        : 'border border-primary/20 text-primary/70 hover:border-primary/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-lg font-light text-primary mb-4">
                What is your budget range?
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {budgetOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: option })}
                    className={`px-6 py-3 text-left text-sm font-light transition-all ${
                      formData.budget === option
                        ? 'bg-primary text-white'
                        : 'border border-primary/20 text-primary/70 hover:border-primary/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-light text-primary mb-3">
                Tell us about your project
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-6 py-4 border border-primary/20 focus:border-primary outline-none text-primary font-light resize-none bg-white"
                placeholder="Share your vision, goals, challenges, or anything else you would like us to know..."
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-16 py-4 bg-primary text-white hover:bg-primary/90 transition-colors font-light text-lg"
              >
                Send Message
              </button>
              <p className="mt-4 text-sm text-primary/60 font-light">
                We will review your message and get back to you within 24-48 hours.
              </p>
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  )
}
