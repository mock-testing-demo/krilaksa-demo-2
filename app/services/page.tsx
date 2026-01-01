"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "branding",
    title: "Branding & Identity",
    description:
      "Complete brand identities built from deep understanding of who you are and what you stand for.",
    features: [
      "Brand strategy and positioning",
      "Visual identity design",
      "Logo and typography",
      "Brand guidelines",
    ],
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description:
      "Strategic content that speaks to your audience with authenticity and purpose.",
    features: [
      "Brand storytelling",
      "Copywriting and messaging",
      "Visual content strategy",
      "Campaign development",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Strategy and Management",
    description:
      "Thoughtful social presence that builds community and trust over time.",
    features: [
      "Platform strategy and planning",
      "Content calendar management",
      "Community engagement",
      "Analytics and insights",
    ],
  },
  {
    id: "editorial-shoots",
    title: "Editorial Shoots",
    description:
      "Curated visual narratives that capture your brand essence through thoughtful composition and storytelling.",
    features: [
      "Creative direction and concept development",
      "Location scouting and styling",
      "Professional photography",
      "Post-production and retouching",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Seamless shopping experiences designed to convert browsers into loyal customers.",
    features: [
      "Store setup and optimization",
      "Product photography",
      "User experience design",
      "Conversion optimization",
    ],
  },
  {
    id: "website",
    title: "Website",
    description:
      "Digital spaces that reflect your brand personality and invite meaningful interaction.",
    features: [
      "Custom web design",
      "Development and deployment",
      "SEO optimization",
      "Ongoing maintenance",
    ],
  },
];

export default function ServicesPage() {
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-primary/70 max-w-3xl font-light leading-relaxed">
              We offer comprehensive creative solutions tailored to help your
              brand connect, communicate, and grow with intention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6 md:px-12 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.id}`}>
                  <div className="group cursor-pointer h-full border border-primary/10 p-8 hover:border-primary/30 transition-all duration-300 bg-white">
                    <h2 className="text-3xl font-light text-primary mb-4 group-hover:text-accent transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-primary/70 mb-6 font-light leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-block text-sm text-primary border-b border-primary/30 group-hover:border-primary transition-colors pb-1">
                      Learn more
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
