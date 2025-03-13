import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { ArrowRight, Users, BookOpen, Award, BarChart3 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Our Mission to Transform
                    <span className="block text-primary">Financial Aid in India</span>
                  </h1>
                  <p className="mt-4 text-lg text-muted-foreground">
                    FinAidConnect is dedicated to making education accessible to all students across India by
                    simplifying the financial aid process and connecting students with the resources they need.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg">
                    <Link href="/register">Join Our Community</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Students collaborating"
                  className="rounded-lg shadow-xl"
                />
                {/* Decorative elements */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                How FinAidConnect began and our journey to transform financial aid in India
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Our founding story"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <p className="text-lg">
                  FinAidConnect was founded in 2020 by a group of education enthusiasts who experienced firsthand the
                  challenges of navigating financial aid in India.
                </p>
                <p className="text-lg">
                  Our founders, who came from diverse backgrounds across India, recognized that many talented students
                  were missing educational opportunities simply because they couldn't find or access appropriate
                  financial aid.
                </p>
                <p className="text-lg">
                  What began as a simple database of scholarships has evolved into a comprehensive platform that not
                  only connects students with traditional financial aid but also pioneers innovative solutions like
                  peer-to-peer sponsorship.
                </p>
                <p className="text-lg font-medium text-primary">
                  Today, we've helped over 50,000 students across India secure more than ₹100 crore in financial aid.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
              <p className="mt-4 text-lg text-muted-foreground">The principles that guide our mission and operations</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                  <p className="text-muted-foreground">
                    We believe financial aid should be accessible to all students regardless of background or location.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    We're committed to educating students about financial literacy and aid opportunities.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Transparency</h3>
                  <p className="text-muted-foreground">
                    We maintain complete transparency in our processes, especially in our peer sponsorship system.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously innovate to create better solutions for financial aid distribution.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Impact</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The difference we're making in students' lives across India
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">50,000+</div>
                <p className="text-lg font-medium">Students Helped</p>
                <p className="text-muted-foreground">Students who found financial aid through our platform</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">₹100+ Cr</div>
                <p className="text-lg font-medium">Aid Facilitated</p>
                <p className="text-muted-foreground">Total financial aid secured by students</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">5,000+</div>
                <p className="text-lg font-medium">Peer Sponsors</p>
                <p className="text-muted-foreground">Alumni and donors contributing to student needs</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">28</div>
                <p className="text-lg font-medium">States Covered</p>
                <p className="text-muted-foreground">Reaching students across India</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
              <p className="mt-4 text-lg text-muted-foreground">Meet the passionate individuals behind FinAidConnect</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Priya Sharma",
                  role: "Founder & CEO",
                  bio: "Former education policy advisor with a passion for making education accessible to all.",
                  avatar: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "Rahul Patel",
                  role: "CTO",
                  bio: "Tech entrepreneur with expertise in blockchain and financial technology.",
                  avatar: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "Ananya Gupta",
                  role: "Head of Partnerships",
                  bio: "10+ years experience in building educational partnerships across India.",
                  avatar: "/placeholder.svg?height=200&width=200",
                },
                {
                  name: "Vikram Mehta",
                  role: "Head of Student Success",
                  bio: "Former university counselor dedicated to student achievement.",
                  avatar: "/placeholder.svg?height=200&width=200",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="mt-2 text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Partners</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Organizations that collaborate with us to make education accessible
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="/placeholder-logo.svg" alt={`Partner ${i}`} className="h-12 md:h-16" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Our Mission</h2>
              <p className="mt-4 text-lg opacity-90">
                Whether you're a student seeking financial aid, an alumnus wanting to give back, or an organization
                looking to partner with us, we'd love to hear from you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/register">Create Account</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  )
}

