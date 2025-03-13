"use client"

import type React from "react"

import { useState } from "react"
import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  const faqs = [
    {
      question: "How do I apply for financial aid through FinAidConnect?",
      answer:
        "To apply for financial aid, create an account, complete your profile, and use our eligibility checker to find programs that match your criteria. You can then apply directly through our platform.",
    },
    {
      question: "Is FinAidConnect available for all educational levels?",
      answer:
        "Yes, we support students from high school through postgraduate studies. Our platform has financial aid options for various educational levels and fields of study.",
    },
    {
      question: "How does the peer sponsorship system work?",
      answer:
        "Our peer sponsorship system allows students to list specific financial needs. Alumni and donors can browse these needs and contribute micro-grants. All transactions are tracked through blockchain technology for transparency.",
    },
    {
      question: "How long does the application process take?",
      answer:
        "The application process varies depending on the financial aid program. Some applications can be completed in as little as 30 minutes, while others may require additional documentation and take longer.",
    },
    {
      question: "Is my personal and financial information secure?",
      answer:
        "Absolutely. We use enterprise-grade security measures to protect your data. Your information is encrypted and only shared with the financial aid providers you choose to apply to.",
    },
    {
      question: "Can I apply for multiple financial aid programs simultaneously?",
      answer:
        "Yes, you can apply for multiple programs at once. Our dashboard helps you track all your applications in one place.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get in Touch</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Have questions or need assistance? We're here to help you navigate your financial aid journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="contact-form" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="contact-form">Contact Form</TabsTrigger>
                <TabsTrigger value="contact-info">Contact Info</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>

              <TabsContent value="contact-form" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {formSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-500/10 text-green-500 p-4 rounded-lg flex items-center"
                      >
                        <CheckCircle2 className="h-5 w-5 mr-2" />
                        <p>Thank you for your message! We'll respond shortly.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input id="first-name" placeholder="Enter your first name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input id="last-name" placeholder="Enter your last name" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Enter your email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input id="subject" placeholder="Enter the subject of your message" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Enter your message here"
                            className="min-h-[150px]"
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contact-info" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Reach out to us through any of the following channels.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Mail className="h-5 w-5 mr-3 text-primary mt-1" />
                          <div>
                            <h3 className="font-medium">Email</h3>
                            <p className="text-muted-foreground">support@finaidconnect.com</p>
                            <p className="text-muted-foreground">partnerships@finaidconnect.com</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Phone className="h-5 w-5 mr-3 text-primary mt-1" />
                          <div>
                            <h3 className="font-medium">Phone</h3>
                            <p className="text-muted-foreground">+91 1234 567 890</p>
                            <p className="text-muted-foreground">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 mr-3 text-primary mt-1" />
                          <div>
                            <h3 className="font-medium">Office Locations</h3>
                            <div className="space-y-2">
                              <div>
                                <p className="font-medium">Mumbai (Headquarters)</p>
                                <p className="text-muted-foreground">123 Tech Park, Andheri East</p>
                                <p className="text-muted-foreground">Mumbai, Maharashtra 400069</p>
                              </div>
                              <div>
                                <p className="font-medium">Bangalore</p>
                                <p className="text-muted-foreground">456 Innovation Center, Koramangala</p>
                                <p className="text-muted-foreground">Bangalore, Karnataka 560034</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg overflow-hidden h-[300px] bg-muted">
                        {/* This would be a map in a real application */}
                        <div className="w-full h-full flex items-center justify-center">
                          <p className="text-muted-foreground">Map would be displayed here</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="faq" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>Find answers to common questions about our platform and services.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <div className="mt-6 p-4 bg-muted rounded-lg">
                      <p className="text-center text-muted-foreground">
                        Can't find what you're looking for?{" "}
                        <Button variant="link" className="p-0 h-auto">
                          Contact our support team
                        </Button>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How We Can Help</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our team is ready to assist you with any questions or concerns
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Application assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Eligibility questions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Document verification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Account support</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4">Student Support</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sponsors</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Sponsorship process</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Fund tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Tax benefits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Impact reporting</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4">Sponsor Support</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Partnership inquiries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Integration support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>API documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>Business development</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4">Partner Support</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  )
}

