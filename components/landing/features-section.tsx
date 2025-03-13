"use client"

import { motion } from "framer-motion"
import { BadgeCheck, BarChart3, Calendar, FileText, Search, Shield, Upload, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: <BadgeCheck className="h-10 w-10 text-primary" />,
      title: "Eligibility Checker",
      description: "AI-powered tool that evaluates your profile and suggests relevant financial aid programs.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Interactive Dashboard",
      description: "Track applications, deadlines, and get personalized recommendations in real-time.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Peer Sponsorship",
      description: "Connect with alumni and donors for micro-grants through our transparent blockchain system.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Application Management",
      description: "Apply for financial aid, track progress, and receive real-time updates on your applications.",
    },
    {
      icon: <Upload className="h-10 w-10 text-primary" />,
      title: "Document Upload",
      description: "Securely upload and manage your documents with our intuitive drag-and-drop interface.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Deadline Reminders",
      description: "Never miss an important deadline with our smart notification system.",
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Smart Search",
      description: "Find the perfect financial aid program with our advanced search and filtering system.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security and privacy measures.",
    },
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Powerful Features for Students
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our platform offers a comprehensive suite of tools to help you find, apply for, and manage financial aid.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

