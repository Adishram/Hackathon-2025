"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle2, HelpCircle, LifeBuoy, MessageSquare, Search } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function SupportPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  // Support form state
  const [subject, setSubject] = useState("")
  const [category, setCategory] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setSubject("")
      setCategory("")
      setMessage("")
      toast({
        title: "Support ticket submitted",
        description: "We've received your request and will get back to you soon.",
      })
    }, 1000)
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

  const supportTickets = [
    {
      id: "TICKET-1001",
      subject: "Unable to upload documents",
      status: "open",
      date: "2023-10-25",
      lastUpdate: "2023-10-26",
    },
    {
      id: "TICKET-1002",
      subject: "Question about eligibility criteria",
      status: "closed",
      date: "2023-10-15",
      lastUpdate: "2023-10-18",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
          <p className="text-muted-foreground">Get help with your financial aid journey</p>
        </div>
        <Button asChild>
          <Link href="#contact-support">
            <MessageSquare className="mr-2 h-4 w-4" />
            Contact Support
          </Link>
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search for help articles..." className="w-full pl-8" />
      </div>

      <Tabs defaultValue="faq">
        <TabsList>
          <TabsTrigger value="faq" className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </TabsTrigger>
          <TabsTrigger value="tickets" className="flex items-center gap-2">
            <LifeBuoy className="h-4 w-4" />
            My Tickets
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Contact Us
          </TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to common questions about our platform</CardDescription>
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
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <p className="text-center text-sm text-muted-foreground">
                Can't find what you're looking for?{" "}
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link href="#contact-support">Contact our support team</Link>
                </Button>
              </p>
            </CardFooter>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Application Help</CardTitle>
                <CardDescription>Guides for applying to financial aid programs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      How to complete your profile
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      Required documents for applications
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      Tips for writing a strong application
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      Understanding eligibility criteria
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Peer Sponsorship</CardTitle>
                <CardDescription>Learn about our peer sponsorship system</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      Creating effective sponsorship requests
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      How funds are transferred and tracked
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      Thanking your sponsors
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      Becoming a sponsor yourself
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account & Security</CardTitle>
                <CardDescription>Manage your account and security settings</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      Updating your profile information
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      Changing your password
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      Managing notification preferences
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      Data privacy and security
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tickets" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>My Support Tickets</CardTitle>
              <CardDescription>View and manage your support requests</CardDescription>
            </CardHeader>
            <CardContent>
              {supportTickets.length > 0 ? (
                <div className="space-y-4">
                  {supportTickets.map((ticket) => (
                    <div key={ticket.id} className="rounded-lg border p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{ticket.subject}</h3>
                            <Badge
                              variant="outline"
                              className={
                                ticket.status === "open"
                                  ? "bg-green-500/10 text-green-500"
                                  : "bg-gray-500/10 text-gray-500"
                              }
                            >
                              {ticket.status === "open" ? "Open" : "Closed"}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Ticket ID: {ticket.id} • Created: {ticket.date} • Last update: {ticket.lastUpdate}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/dashboard/support/tickets/${ticket.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-muted p-4 mb-4">
                    <LifeBuoy className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No Support Tickets</h3>
                  <p className="text-muted-foreground max-w-md mb-6">
                    You haven't created any support tickets yet. If you need help, please contact our support team.
                  </p>
                  <Button asChild>
                    <Link href="#contact-support">Contact Support</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="mt-6" id="contact-support">
          <Card>
            <form onSubmit={handleSubmitTicket}>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Submit a support ticket and we'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Brief description of your issue"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="account">Account Issues</SelectItem>
                      <SelectItem value="application">Application Help</SelectItem>
                      <SelectItem value="documents">Document Upload</SelectItem>
                      <SelectItem value="sponsorship">Peer Sponsorship</SelectItem>
                      <SelectItem value="technical">Technical Problems</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your issue in detail"
                    className="min-h-[150px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attachments">Attachments (Optional)</Label>
                  <Input id="attachments" type="file" multiple />
                  <p className="text-xs text-muted-foreground">
                    You can attach screenshots or documents to help us understand your issue better. Maximum 5 files,
                    2MB each.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-muted-foreground">Typical response time: 24-48 hours</span>
                </div>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Submit Ticket"}
                </Button>
              </CardFooter>
            </form>
          </Card>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Alternative ways to reach our support team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-muted p-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-muted-foreground">support@finaidconnect.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-muted p-2">
                    <LifeBuoy className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Phone Support</p>
                    <p className="text-sm text-muted-foreground">+91 1234 567 890 (Mon-Fri, 9AM-6PM IST)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Support Team</CardTitle>
                <CardDescription>Meet our dedicated support specialists</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Priya Sharma" />
                      <AvatarFallback>PS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Priya Sharma</p>
                      <p className="text-sm text-muted-foreground">Application Specialist</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Rahul Patel" />
                      <AvatarFallback>RP</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Rahul Patel</p>
                      <p className="text-sm text-muted-foreground">Technical Support</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Ananya Gupta" />
                      <AvatarFallback>AG</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Ananya Gupta</p>
                      <p className="text-sm text-muted-foreground">Sponsorship Coordinator</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

