"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    name: "Minimalist Fashion Co.",
    industry: "Fashion",
    description:
      "A complete brand transformation for a sustainable fashion startup, from visual identity to editorial content strategy.",
    services: ["Branding", "Editorial Shoots", "Website"],
    challenge:
      "Create a premium brand presence that communicates sustainability without compromising on style.",
    outcome:
      "300% increase in social engagement, featured in major fashion publications.",
  },
  {
    id: 2,
    name: "Artisan Jewelry Studio",
    industry: "Jewelry",
    description:
      "E-commerce platform and content strategy for a handcrafted jewelry brand seeking to scale their online presence.",
    services: ["E-commerce", "Content Creation", "Social Media"],
    challenge:
      "Translate the tactile, intimate experience of handmade jewelry into a digital shopping environment.",
    outcome:
      "250% revenue growth in 6 months, established loyal community of 50k+ followers.",
  },
  {
    id: 3,
    name: "Wellness Collective",
    industry: "Wellness",
    description:
      "Brand strategy and visual identity for a holistic wellness platform connecting practitioners with mindful consumers.",
    services: ["Branding", "Website", "Content Creation"],
    challenge:
      "Position the brand as both approachable and premium in a crowded wellness market.",
    outcome:
      "Successfully launched with 1000+ practitioners, recognized for design excellence.",
  },
  {
    id: 4,
    name: "Heritage Coffee Roasters",
    industry: "Food and Beverage",
    description:
      "Complete rebranding and social strategy for a third-generation coffee roasting company entering modern markets.",
    services: ["Branding", "Social Media", "Editorial Shoots"],
    challenge:
      "Honor heritage while appealing to contemporary coffee enthusiasts.",
    outcome: "Expanded to 15 new markets, social following grew by 400%.",
  },
];

const clients = [
  "Brand1.png",
  "Brand2.png",
  "Brand3.png",
  "Brand13.png",
  "Brand5.png",
  "Brand6.png",
  "Brand7.png",
  "Brand8.png",
  "Brand9.png",
  "Brand12.png",
  "Brand11.png",
  "Brand10.png",
  "Brand4.png",
  "Brand14.png",
  "Brand15.png",
  "Brand16.png",
  "Brand17.png",
];

const clientsLeftToRight = clients.slice(0, 8);
const clientsRightToLeft = clients.slice(8);

export default function WorkPage() {
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
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-primary/70 max-w-3xl font-light leading-relaxed">
              Case studies that showcase our approach to building meaningful
              brands and creating work that endures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-20 px-6 md:px-12 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-light text-primary mb-1 text-center">
              Trusted by Brands
            </h2>
            <h2 className="text-sm font-light text-primary mb-12 text-center">
              before Krilaksa was officially born 
            </h2>
            <div className="space-y-10">
              <div className="marquee marquee--ltr [--marquee-duration:30s]">
                <div className="marquee__inner">
                  <div className="marquee__group">
                    {clientsLeftToRight.map((client) => (
                      <div
                        key={client}
                        className={`relative h-32 w-40 flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity`}
                      >
                        <Image
                          src={`/assets/img/${client}`}
                          alt={`${client.replace(/\.[^.]+$/, "")} logo`}
                          fill
                          sizes={client === "Brand4.png" ? "224px" : "160px"}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="marquee__group" aria-hidden="true">
                    {clientsLeftToRight.map((client) => (
                      <div
                        key={`${client}-dup`}
                        className={`relative h-32 w-40 flex-shrink-0 opacity-90`}
                      >
                        <Image
                          src={`/assets/img/${client}`}
                          alt=""
                          fill
                          sizes={client === "Brand4.png" ? "224px" : "160px"}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="marquee marquee--rtl [--marquee-duration:30s]">
                <div className="marquee__inner">
                  <div className="marquee__group">
                    {clientsRightToLeft.map((client) => (
                      <div
                        key={client}
                        className="relative h-32 w-40 flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity"
                      >
                        <Image
                          src={`/assets/img/${client}`}
                          alt={`${client.replace(/\.[^.]+$/, "")} logo`}
                          fill
                          sizes="160px"
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="marquee__group" aria-hidden="true">
                    {clientsRightToLeft.map((client) => (
                      <div
                        key={`${client}-dup`}
                        className="relative h-32 w-40 flex-shrink-0 opacity-90"
                      >
                        <Image
                          src={`/assets/img/${client}`}
                          alt=""
                          fill
                          sizes="160px"
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`mb-32 last:mb-0 ${
                index % 2 === 1 ? "md:ml-auto md:max-w-5xl" : ""
              }`}
            >
              {/* Image Placeholder */}
              <div className="bg-cream aspect-[4/3] mb-8 flex items-center justify-center">
                <span className="text-primary/30 text-sm">Project Visual</span>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-light text-primary mb-2">
                    {study.name}
                  </h3>
                  <p className="text-sm text-primary/60 font-light">
                    {study.industry}
                  </p>
                </div>

                <p className="text-lg text-primary/80 font-light leading-relaxed">
                  {study.description}
                </p>

                <div>
                  <h4 className="text-sm font-light text-primary mb-3">
                    Services
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {study.services.map((service) => (
                      <span
                        key={service}
                        className="px-4 py-2 border border-primary/20 text-sm text-primary/70 font-light"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 pt-6">
                  <div>
                    <h4 className="text-lg font-light text-primary mb-3">
                      Challenge
                    </h4>
                    <p className="text-primary/70 font-light">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-primary mb-3">
                      Outcome
                    </h4>
                    <p className="text-primary/70 font-light">
                      {study.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
            Your project could be next
          </h2>
          <p className="text-lg text-primary/70 mb-10 font-light">
            We would love to hear about your brand and explore how we can work
            together.
          </p>
          <a
            href="/connect"
            className="inline-block px-12 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Let us talk
          </a>
        </motion.div>
      </section>
    </main>
  );
}
