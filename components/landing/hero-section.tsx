"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Connecting Students with{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Financial Aid
              </span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover, apply, and track financial aid opportunities across India. Our platform connects students with
              scholarships, grants, and peer sponsors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/register">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link href="/eligibility">Check Eligibility</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 relative"
          >
            <div className="relative mx-auto rounded-xl overflow-hidden shadow-2xl border">
              <div className="bg-muted/30 backdrop-blur-sm absolute top-0 left-0 right-0 h-12 flex items-center px-4 border-b">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="mx-auto text-sm font-medium">FinAidConnect Dashboard</div>
              </div>
              <img
                src="/logo_index.svg?height=600&width=1200"
                alt="FinAidConnect Dashboard"
                className="w-full max-w-4xl"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-8 -left-8 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-70" />
            <div className="absolute -z-10 -bottom-8 -right-8 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-70" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

