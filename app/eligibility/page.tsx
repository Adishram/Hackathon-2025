"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function EligibilityPage() {
  const [step, setStep] = useState(1)
  const [showResults, setShowResults] = useState(false)

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Financial Aid Eligibility Checker
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Answer a few questions to discover financial aid programs you're eligible for
              </p>
            </div>

            {!showResults ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Step {step} of 3</CardTitle>
                    <div className="flex items-center space-x-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${step >= 1 ? "bg-primary" : "bg-muted"}`}></span>
                      <span className={`h-2.5 w-2.5 rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"}`}></span>
                      <span className={`h-2.5 w-2.5 rounded-full ${step >= 3 ? "bg-primary" : "bg-muted"}`}></span>
                    </div>
                  </div>
                  <CardDescription>
                    {step === 1 && "Tell us about your education"}
                    {step === 2 && "Financial information"}
                    {step === 3 && "Personal details"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="education-level">Education Level</Label>
                        <Select defaultValue="undergraduate">
                          <SelectTrigger id="education-level">
                            <SelectValue placeholder="Select education level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high-school">High School</SelectItem>
                            <SelectItem value="undergraduate">Undergraduate</SelectItem>
                            <SelectItem value="postgraduate">Postgraduate</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="field-of-study">Field of Study</Label>
                        <Select defaultValue="engineering">
                          <SelectTrigger id="field-of-study">
                            <SelectValue placeholder="Select field of study" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="engineering">Engineering</SelectItem>
                            <SelectItem value="medicine">Medicine</SelectItem>
                            <SelectItem value="arts">Arts & Humanities</SelectItem>
                            <SelectItem value="science">Science</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="law">Law</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="institution">Current Institution</Label>
                        <Input id="institution" placeholder="Enter your college/university name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cgpa">Current CGPA/Percentage</Label>
                        <div className="flex items-center gap-4">
                          <Slider defaultValue={[8.5]} max={10} step={0.1} className="flex-1" />
                          <span className="w-12 text-center font-medium">8.5</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="family-income">Annual Family Income (₹)</Label>
                        <Select defaultValue="200000-500000">
                          <SelectTrigger id="family-income">
                            <SelectValue placeholder="Select income range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="below-200000">Below ₹2,00,000</SelectItem>
                            <SelectItem value="200000-500000">₹2,00,000 - ₹5,00,000</SelectItem>
                            <SelectItem value="500000-800000">₹5,00,000 - ₹8,00,000</SelectItem>
                            <SelectItem value="800000-1000000">₹8,00,000 - ₹10,00,000</SelectItem>
                            <SelectItem value="above-1000000">Above ₹10,00,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="financial-need">Financial Need</Label>
                        <Select defaultValue="tuition">
                          <SelectTrigger id="financial-need">
                            <SelectValue placeholder="Select primary need" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tuition">Tuition Fees</SelectItem>
                            <SelectItem value="living">Living Expenses</SelectItem>
                            <SelectItem value="books">Books & Supplies</SelectItem>
                            <SelectItem value="equipment">Equipment (Laptop, etc.)</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="existing-loans">Existing Educational Loans</Label>
                        <Select defaultValue="none">
                          <SelectTrigger id="existing-loans">
                            <SelectValue placeholder="Select loan status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="below-100000">Below ₹1,00,000</SelectItem>
                            <SelectItem value="100000-300000">₹1,00,000 - ₹3,00,000</SelectItem>
                            <SelectItem value="300000-500000">₹3,00,000 - ₹5,00,000</SelectItem>
                            <SelectItem value="above-500000">Above ₹5,00,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="scholarship-amount">Scholarship Amount Needed (₹)</Label>
                        <Input id="scholarship-amount" type="number" placeholder="Enter amount" defaultValue="50000" />
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="gender">Gender</Label>
                          <Select defaultValue="female">
                            <SelectTrigger id="gender">
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                              <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category">Category</Label>
                          <Select defaultValue="general">
                            <SelectTrigger id="category">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General</SelectItem>
                              <SelectItem value="sc">SC</SelectItem>
                              <SelectItem value="st">ST</SelectItem>
                              <SelectItem value="obc">OBC</SelectItem>
                              <SelectItem value="ews">EWS</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State of Residence</Label>
                        <Select defaultValue="maharashtra">
                          <SelectTrigger id="state">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maharashtra">Maharashtra</SelectItem>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="karnataka">Karnataka</SelectItem>
                            <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                            <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location Type</Label>
                        <Select defaultValue="urban">
                          <SelectTrigger id="location">
                            <SelectValue placeholder="Select location type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urban">Urban</SelectItem>
                            <SelectItem value="rural">Rural</SelectItem>
                            <SelectItem value="semi-urban">Semi-Urban</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="achievements">Achievements & Extracurriculars</Label>
                        <Input id="achievements" placeholder="List any notable achievements or activities" />
                      </div>
                    </motion.div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handleBack} disabled={step === 1}>
                    Back
                  </Button>
                  <Button onClick={handleNext}>{step === 3 ? "Check Eligibility" : "Next"}</Button>
                </CardFooter>
              </Card>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Card className="mb-6">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Your Eligibility Results</CardTitle>
                    <CardDescription>
                      Based on your profile, we've found several financial aid programs you're eligible for
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 rounded-lg bg-muted p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-semibold">Eligibility Score</h3>
                        <span className="text-lg font-bold text-primary">85%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted-foreground/20">
                        <div className="h-2 rounded-full bg-primary" style={{ width: "85%" }}></div>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Your profile is a strong match for many financial aid programs
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Tabs defaultValue="all" className="mb-6">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all">All (12)</TabsTrigger>
                    <TabsTrigger value="scholarships">Scholarships (8)</TabsTrigger>
                    <TabsTrigger value="grants">Grants (3)</TabsTrigger>
                    <TabsTrigger value="loans">Loans (1)</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-4 space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <CardTitle>National Merit Scholarship</CardTitle>
                                <CardDescription>Ministry of Education, Government of India</CardDescription>
                              </div>
                              <div className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                                98% Match
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="grid gap-2 text-sm">
                              <div className="grid grid-cols-2">
                                <div className="text-muted-foreground">Amount:</div>
                                <div className="font-medium">₹50,000 - ₹100,000 per year</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="text-muted-foreground">Deadline:</div>
                                <div className="font-medium">December 15, 2023</div>
                              </div>
                              <div className="grid grid-cols-2">
                                <div className="text-muted-foreground">Eligibility:</div>
                                <div className="font-medium">CGPA 8.0+, Family income below ₹8L</div>
                              </div>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                              <div className="flex items-center text-xs text-green-500">
                                <CheckCircle2 className="mr-1 h-3 w-3" />
                                <span>Academic criteria met</span>
                              </div>
                              <div className="flex items-center text-xs text-green-500">
                                <CheckCircle2 className="mr-1 h-3 w-3" />
                                <span>Income criteria met</span>
                              </div>
                              <div className="flex items-center text-xs text-green-500">
                                <CheckCircle2 className="mr-1 h-3 w-3" />
                                <span>Location criteria met</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full" asChild>
                              <Link href="/dashboard/applications/new">
                                Apply Now
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </TabsContent>
                  <TabsContent value="scholarships" className="mt-4 space-y-4">
                    {/* Scholarship content would go here */}
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-center text-muted-foreground">Showing scholarship programs</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="grants" className="mt-4 space-y-4">
                    {/* Grants content would go here */}
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-center text-muted-foreground">Showing grant programs</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="loans" className="mt-4 space-y-4">
                    {/* Loans content would go here */}
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-center text-muted-foreground">Showing loan programs</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                  <Button variant="outline" onClick={() => setShowResults(false)}>
                    Modify Criteria
                  </Button>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Button variant="outline" asChild>
                      <Link href="/dashboard/eligibility">Save Results</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/register">Create Account to Apply</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  )
}

