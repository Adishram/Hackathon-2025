"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export function UpcomingDeadlines() {
  const deadlines = [
    {
      id: "PROG-2001",
      name: "Technical Education Scholarship",
      deadline: "2023-11-05",
      daysLeft: 5,
      progress: 75,
      status: "In Progress",
    },
    {
      id: "PROG-2002",
      name: "Graduate Research Fellowship",
      deadline: "2023-11-15",
      daysLeft: 15,
      progress: 40,
      status: "In Progress",
    },
    {
      id: "PROG-2003",
      name: "Arts and Culture Scholarship",
      deadline: "2023-11-20",
      daysLeft: 20,
      progress: 10,
      status: "Not Started",
    },
    {
      id: "PROG-2004",
      name: "Sports Excellence Program",
      deadline: "2023-12-01",
      daysLeft: 31,
      progress: 0,
      status: "Not Started",
    },
  ]

  // Function to determine badge color based on days left
  const getUrgencyColor = (daysLeft: number) => {
    if (daysLeft <= 7) return "bg-red-500/10 text-red-500 hover:bg-red-500/20"
    if (daysLeft <= 14) return "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
    return "bg-green-500/10 text-green-500 hover:bg-green-500/20"
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Stay on track with your application deadlines</CardDescription>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/dashboard/deadlines">
              View Calendar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deadlines.map((deadline) => (
            <div key={deadline.id} className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{deadline.name}</h4>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>{new Date(deadline.deadline).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <Badge variant="outline" className={getUrgencyColor(deadline.daysLeft)}>
                      {deadline.daysLeft} days left
                    </Badge>
                  </div>
                </div>
                <Badge variant="outline">{deadline.status}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Progress value={deadline.progress} className="h-2" />
                <span className="text-xs text-muted-foreground w-10">{deadline.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

