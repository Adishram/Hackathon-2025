"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, IndianRupee, Plus } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function PeerSponsorshipOverview() {
  const sponsorships = [
    {
      id: "NEED-1001",
      title: "Textbooks for Engineering Semester",
      amount: 8000,
      amountRaised: 5000,
      sponsors: 4,
      deadline: "2023-12-15",
    },
    {
      id: "NEED-1002",
      title: "Laptop for Online Classes",
      amount: 25000,
      amountRaised: 15000,
      sponsors: 8,
      deadline: "2023-11-30",
    },
  ]

  const recentSponsors = [
    {
      name: "Vikram Mehta",
      amount: "₹2,000",
      date: "2023-10-20",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Priya Sharma",
      amount: "₹1,500",
      date: "2023-10-18",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Rahul Patel",
      amount: "₹1,000",
      date: "2023-10-15",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Your Financial Needs</CardTitle>
              <CardDescription>Track your peer sponsorship requests</CardDescription>
            </div>
            <Button asChild size="sm">
              <Link href="/dashboard/sponsorship/new">
                <Plus className="mr-2 h-4 w-4" />
                New Request
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sponsorships.map((sponsorship, i) => (
              <motion.div
                key={sponsorship.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="rounded-lg border p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{sponsorship.title}</h4>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    {sponsorship.sponsors} Sponsors
                  </Badge>
                </div>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <IndianRupee className="h-4 w-4 text-muted-foreground" />
                  <span>
                    ₹{sponsorship.amountRaised.toLocaleString()} raised of ₹{sponsorship.amount.toLocaleString()}
                  </span>
                </div>
                <Progress value={(sponsorship.amountRaised / sponsorship.amount) * 100} className="h-2 mb-2" />
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>Deadline: {new Date(sponsorship.deadline).toLocaleDateString()}</span>
                  <span>{Math.round((sponsorship.amountRaised / sponsorship.amount) * 100)}% Complete</span>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/dashboard/sponsorship">
              View All Requests
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Sponsors</CardTitle>
          <CardDescription>People who have contributed to your needs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentSponsors.map((sponsor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-center justify-between"
              >
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
                    <p className="text-sm text-muted-foreground">{sponsor.date}</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-green-500/10 text-green-500">
                  {sponsor.amount}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/dashboard/sponsors">View All Sponsors</Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard/thank-sponsors">Send Thanks</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

