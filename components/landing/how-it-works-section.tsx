"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up and complete your profile with academic, financial, and personal information.",
    },
    {
      number: "02",
      title: "Discover Opportunities",
      description: "Our AI-powered system matches you with relevant financial aid programs based on your profile.",
    },
    {
      number: "03",
      title: "Apply with Ease",
      description: "Submit applications directly through our platform with guided application processes.",
    },
    {
      number: "04",
      title: "Track & Manage",
      description: "Monitor application status, receive updates, and manage documents all in one place.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Getting financial aid has never been easier. Follow these simple steps to get started.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step number */}
              <div className="text-7xl font-bold text-primary/10">{step.number}</div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-muted -z-10 transform -translate-x-8" />
              )}

              {/* Checkmark */}
              <div className="mt-4 flex items-center text-primary">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                <span className="text-sm font-medium">Simple & Guided</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Smart Peer Sponsorship System</h3>
              <p className="mt-4 text-muted-foreground">
                Our unique peer sponsorship system connects students with sponsors who can provide micro-grants as small
                as ₹100-₹500. The blockchain-based tracking ensures complete transparency and prevents misuse of funds.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "List your specific financial needs",
                  "Get matched with potential sponsors",
                  "Receive micro-grants directly",
                  "Track fund usage transparently",
                  "Build a community of support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl border">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Peer Sponsorship System"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

