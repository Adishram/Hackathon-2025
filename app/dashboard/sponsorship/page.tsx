"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight, Gift, HandCoins, IndianRupee, Plus, Search, SlidersHorizontal, Users, X } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SponsorshipPage() {
  const [showFilters, setShowFilters] = useState(false)

  const sponsorships = [
    {
      id: "NEED-1001",
      title: "Textbooks for Engineering Semester",
      description: "Need financial assistance to purchase textbooks for my engineering courses this semester.",
      amount: 8000,
      amountRaised: 5000,
      sponsors: 4,
      deadline: "2023-12-15",
      category: "academic",
      status: "active",
    },
    {
      id: "NEED-1002",
      title: "Laptop for Online Classes",
      description: "My old laptop broke down and I need a new one to attend online classes and complete assignments.",
      amount: 25000,
      amountRaised: 15000,
      sponsors: 8,
      deadline: "2023-11-30",
      category: "equipment",
      status: "active",
    },
    {
      id: "NEED-1003",
      title: "Hostel Accommodation Fees",
      description: "Need help with hostel accommodation fees for the upcoming semester.",
      amount: 12000,
      amountRaised: 12000,
      sponsors: 6,
      deadline: "2023-10-15",
      category: "living",
      status: "completed",
    },
    {
      id: "NEED-1004",
      title: "Project Materials for Final Year",
      description: "Need financial assistance to purchase materials for my final year engineering project.",
      amount: 5000,
      amountRaised: 2000,
      sponsors: 2,
      deadline: "2023-12-20",
      category: "academic",
      status: "active",
    },
    {
      id: "NEED-1005",
      title: "Transportation Expenses",
      description: "Need help with transportation expenses to commute to college daily.",
      amount: 3000,
      amountRaised: 1500,
      sponsors: 3,
      deadline: "2023-11-25",
      category: "living",
      status: "active",
    },
  ]

  const recentSponsors = [
    {
      name: "Vikram Mehta",
      amount: "₹2,000",
      date: "2023-10-20",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "Happy to help with your education. Keep up the good work!",
    },
    {
      name: "Priya Sharma",
      amount: "₹1,500",
      date: "2023-10-18",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "All the best for your studies!",
    },
    {
      name: "Rahul Patel",
      amount: "₹1,000",
      date: "2023-10-15",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "Glad to contribute to your education journey.",
    },
    {
      name: "Ananya Gupta",
      amount: "₹1,500",
      date: "2023-10-12",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "Hope this helps with your textbooks. Good luck!",
    },
    {
      name: "Kiran Reddy",
      amount: "₹1,000",
      date: "2023-10-10",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "Wishing you success in your studies.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Peer Sponsorship</h1>
          <p className="text-muted-foreground">Connect with sponsors and receive micro-grants for your education</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/sponsorship/new">
            <Plus className="mr-2 h-4 w-4" />
            New Request
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Sponsorship Overview</CardTitle>
            <CardDescription>Summary of your peer sponsorship activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <IndianRupee className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Raised</p>
                    <p className="text-2xl font-bold">₹35,500</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-green-500/10 p-3">
                    <HandCoins className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Active Requests</p>
                    <p className="text-2xl font-bold">4</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-blue-500/10 p-3">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Sponsors</p>
                    <p className="text-2xl font-bold">23</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-purple-500/10 p-3">
                    <Gift className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Completed Requests</p>
                    <p className="text-2xl font-bold">1</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search sponsorship requests..." className="w-full pl-8" />
        </div>
        <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="sm:w-auto w-full">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
          {showFilters ? <X className="ml-2 h-4 w-4" /> : null}
        </Button>
      </div>

      {showFilters && (
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="All statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All categories</SelectItem>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="equipment">Equipment</SelectItem>
                    <SelectItem value="living">Living Expenses</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Amount Range</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Any amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any amount</SelectItem>
                    <SelectItem value="under-5k">Under ₹5,000</SelectItem>
                    <SelectItem value="5k-10k">₹5,000 - ₹10,000</SelectItem>
                    <SelectItem value="over-10k">Over ₹10,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Sort By</label>
                <Select defaultValue="deadline">
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="deadline">Deadline (Soonest)</SelectItem>
                    <SelectItem value="amount">Amount (Highest)</SelectItem>
                    <SelectItem value="progress">Progress (Highest)</SelectItem>
                    <SelectItem value="recent">Recently Added</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button variant="outline" size="sm" className="mr-2">
                Reset
              </Button>
              <Button size="sm">Apply Filters</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="my-requests">
        <TabsList>
          <TabsTrigger value="my-requests">My Requests</TabsTrigger>
          <TabsTrigger value="sponsors">My Sponsors</TabsTrigger>
          <TabsTrigger value="browse">Browse Opportunities</TabsTrigger>
        </TabsList>
        <TabsContent value="my-requests" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {sponsorships.map((sponsorship, i) => (
              <motion.div
                key={sponsorship.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{sponsorship.title}</CardTitle>
                        <CardDescription>{sponsorship.description}</CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          sponsorship.status === "completed"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-blue-500/10 text-blue-500"
                        }
                      >
                        {sponsorship.status === "completed" ? "Completed" : "Active"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Category:</span>
                        <span className="font-medium capitalize">{sponsorship.category}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Deadline:</span>
                        <span className="font-medium">{new Date(sponsorship.deadline).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Sponsors:</span>
                        <span className="font-medium">{sponsorship.sponsors}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress:</span>
                          <span className="font-medium">
                            ₹{sponsorship.amountRaised.toLocaleString()} of ₹{sponsorship.amount.toLocaleString()}
                          </span>
                        </div>
                        <Progress value={(sponsorship.amountRaised / sponsorship.amount) * 100} className="h-2" />
                        <div className="flex justify-between items-center text-xs text-muted-foreground">
                          <span>{Math.round((sponsorship.amountRaised / sponsorship.amount) * 100)}% Complete</span>
                          <span>₹{(sponsorship.amount - sponsorship.amountRaised).toLocaleString()} to go</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex justify-between w-full">
                      <Button variant="outline" asChild>
                        <Link href={`/dashboard/sponsorship/${sponsorship.id}/sponsors`}>View Sponsors</Link>
                      </Button>
                      <Button asChild>
                        <Link href={`/dashboard/sponsorship/${sponsorship.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="sponsors" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>My Sponsors</CardTitle>
              <CardDescription>People who have contributed to your financial needs</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sponsor</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentSponsors.map((sponsor, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={sponsor.avatar} alt={sponsor.name} />
                            <AvatarFallback>
                              {sponsor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{sponsor.name}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          {sponsor.amount}
                        </Badge>
                      </TableCell>
                      <TableCell>{sponsor.date}</TableCell>
                      <TableCell className="max-w-xs truncate">{sponsor.message}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/dashboard/thank-sponsors?sponsor=${encodeURIComponent(sponsor.name)}`}>
                            Send Thanks
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button variant="outline" asChild>
                <Link href="/dashboard/sponsors">View All Sponsors</Link>
              </Button>
              <Button asChild>
                <Link href="/dashboard/thank-sponsors">Send Thanks to All</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="browse" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Browse Sponsorship Opportunities</CardTitle>
              <CardDescription>Discover opportunities to receive micro-grants from sponsors</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <HandCoins className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Sponsorship Opportunities</h3>
              <p className="text-muted-foreground max-w-md mb-6">
                Explore sponsorship opportunities from alumni, organizations, and individual donors who want to support
                students like you.
              </p>
              <Button asChild>
                <Link href="/dashboard/sponsorship/opportunities">
                  Browse Opportunities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

