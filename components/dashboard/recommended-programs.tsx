"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, IndianRupee } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function RecommendedPrograms() {
  const programs = [
    {
      id: "PROG-1001",
      name: "National Merit Scholarship",
      provider: "Ministry of Education",
      amount: "₹75,000",
      deadline: "2023-12-15",
      matchScore: 95,
      tags: ["Merit-Based", "Undergraduate"],
    },
    {
      id: "PROG-1002",
      name: "Women in Engineering Grant",
      provider: "Tech Foundation India",
      amount: "₹50,000",
      deadline: "2023-11-30",
      matchScore: 92,
      tags: ["Women", "Engineering", "STEM"],
    },
    {
      id: "PROG-1003",
      name: "Rural Student Support Program",
      provider: "Rural Development Trust",
      amount: "₹40,000",
      deadline: "2023-12-10",
      matchScore: 88,
      tags: ["Rural", "Need-Based"],
    },
    {
      id: "PROG-1004",
      name: "First Generation College Fund",
      provider: "Education For All Foundation",
      amount: "₹60,000",
      deadline: "2024-01-15",
      matchScore: 85,
      tags: ["First-Gen", "Need-Based"],
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Recommended Programs</h3>
          <p className="text-sm text-muted-foreground">Based on your profile and eligibility score</p>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/dashboard/programs">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {programs.map((program, i) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{program.name}</CardTitle>
                  <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {program.matchScore}% Match
                  </Badge>
                </div>
                <CardDescription>{program.provider}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <IndianRupee className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{program.amount}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Deadline: {new Date(program.deadline).toLocaleDateString()}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {program.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button asChild className="w-full">
                  <Link href={`/dashboard/programs/${program.id}`}>Apply Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

