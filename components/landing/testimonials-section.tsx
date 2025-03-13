"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "FinAidConnect helped me secure a scholarship that covered 80% of my tuition fees. The platform made it easy to find and apply for opportunities I didn't even know existed.",
      author: "Priya Sharma",
      role: "Engineering Student, Delhi",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "As a first-generation college student, navigating financial aid was overwhelming. This platform simplified everything and connected me with alumni sponsors who supported my education.",
      author: "Rahul Patel",
      role: "Medical Student, Mumbai",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "The peer sponsorship feature is revolutionary. I received micro-grants from five different sponsors that helped me purchase essential textbooks and a laptop for my studies.",
      author: "Ananya Gupta",
      role: "Business Student, Bangalore",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "As an alumnus, I wanted to give back to students from my hometown. FinAidConnect made it easy to find deserving students and track exactly how my contributions were helping them.",
      author: "Vikram Mehta",
      role: "Sponsor & Tech Professional",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Success Stories</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from students and sponsors who have benefited from our platform and discover how FinAidConnect is
              changing lives.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/40 mb-4" />
                  <p className="text-lg mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

