"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, ArrowRight, Bell, CalendarIcon, CheckCircle2, Clock, Plus } from "lucide-react"
import Link from "next/link"

export default function DeadlinesPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const upcomingDeadlines = [
    {
      id: "PROG-2001",
      name: "Technical Education Scholarship",
      deadline: "2023-11-05",
      daysLeft: 5,
      progress: 75,
      status: "In Progress",
      category: "Academic",
    },
    {
      id: "PROG-2002",
      name: "Graduate Research Fellowship",
      deadline: "2023-11-15",
      daysLeft: 15,
      progress: 40,
      status: "In Progress",
      category: "Research",
    },
    {
      id: "PROG-2003",
      name: "Arts and Culture Scholarship",
      deadline: "2023-11-20",
      daysLeft: 20,
      progress: 10,
      status: "Not Started",
      category: "Arts",
    },
    {
      id: "PROG-2004",
      name: "Sports Excellence Program",
      deadline: "2023-12-01",
      daysLeft: 31,
      progress: 0,
      status: "Not Started",
      category: "Sports",
    },
    {
      id: "PROG-2005",
      name: "Community Service Grant",
      deadline: "2023-12-10",
      daysLeft: 40,
      progress: 0,
      status: "Not Started",
      category: "Community",
    },
  ]

  // Function to determine badge color based on days left
  const getUrgencyColor = (daysLeft: number) => {
    if (daysLeft <= 7) return "bg-red-500/10 text-red-500 hover:bg-red-500/20"
    if (daysLeft <= 14) return "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
    return "bg-green-500/10 text-green-500 hover:bg-green-500/20"
  }

  // Function to determine status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20"
      case "In Progress":
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
      case "Not Started":
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Deadlines</h1>
          <p className="text-muted-foreground">Track and manage your application deadlines</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard/deadlines/reminders">
              <Bell className="mr-2 h-4 w-4" />
              Manage Reminders
            </Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard/applications/new">
              <Plus className="mr-2 h-4 w-4" />
              New Application
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Stay on track with your application deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {upcomingDeadlines.slice(0, 3).map((deadline) => (
                <div key={deadline.id} className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{deadline.name}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarIcon className="mr-1 h-3 w-3" />
                        <span>{new Date(deadline.deadline).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <Badge variant="outline" className={getUrgencyColor(deadline.daysLeft)}>
                          {deadline.daysLeft} days left
                        </Badge>
                      </div>
                    </div>
                    <Badge variant="outline" className={getStatusColor(deadline.status)}>
                      {deadline.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={deadline.progress} className="h-2" />
                    <span className="text-xs text-muted-foreground w-10">{deadline.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <Button asChild variant="outline">
                <Link href="#all-deadlines">
                  View All Deadlines
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Calendar View</CardTitle>
            <CardDescription>View your deadlines on a calendar</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            <div className="mt-6 space-y-2">
              <h4 className="font-medium">Deadlines on {date?.toLocaleDateString()}</h4>
              {date && date.getDate() === 5 && date.getMonth() === 10 ? (
                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Technical Education Scholarship</p>
                      <p className="text-sm text-muted-foreground">Application due today</p>
                    </div>
                    <Badge variant="outline" className="bg-red-500/10 text-red-500">
                      Due Today
                    </Badge>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No deadlines on this date</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Deadline Statistics</CardTitle>
            <CardDescription>Overview of your application deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-red-500/10 p-2">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Urgent</p>
                    <p className="text-2xl font-bold">1</p>
                    <p className="text-xs text-muted-foreground">Due within 7 days</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-amber-500/10 p-2">
                    <Clock className="h-4 w-4 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Upcoming</p>
                    <p className="text-2xl font-bold">2</p>
                    <p className="text-xs text-muted-foreground">Due within 14 days</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-green-500/10 p-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Completed</p>
                    <p className="text-2xl font-bold">8</p>
                    <p className="text-xs text-muted-foreground">Applications submitted</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-blue-500/10 p-2">
                    <CalendarIcon className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Future</p>
                    <p className="text-2xl font-bold">2</p>
                    <p className="text-xs text-muted-foreground">Due after 14 days</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" id="all-deadlines">
        <TabsList>
          <TabsTrigger value="all">All Deadlines</TabsTrigger>
          <TabsTrigger value="urgent">Urgent</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="future">Future</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>All Deadlines</CardTitle>
              <CardDescription>Complete list of all your application deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Program Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead>Days Left</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingDeadlines.map((deadline) => (
                    <TableRow key={deadline.id}>
                      <TableCell className="font-medium">{deadline.name}</TableCell>
                      <TableCell>{deadline.category}</TableCell>
                      <TableCell>{new Date(deadline.deadline).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getUrgencyColor(deadline.daysLeft)}>
                          {deadline.daysLeft} days
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(deadline.status)}>
                          {deadline.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={deadline.progress} className="h-2 w-[60px]" />
                          <span className="text-xs text-muted-foreground">{deadline.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/dashboard/applications/${deadline.id}`}>View Application</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="urgent" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Urgent Deadlines</CardTitle>
              <CardDescription>Applications due within 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-red-500/10 p-4 mb-4">
                  <AlertCircle className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-lg font-medium mb-2">Urgent Deadlines</h3>
                <p className="text-muted-foreground max-w-md mb-6">
                  You have 1 application due within the next 7 days. Make sure to complete it on time!
                </p>
                <Button asChild>
                  <Link href="/dashboard/applications/PROG-2001">View Urgent Application</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="upcoming" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Applications due within 14 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-amber-500/10 p-4 mb-4">
                  <Clock className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-lg font-medium mb-2">Upcoming Deadlines</h3>
                <p className="text-muted-foreground max-w-md mb-6">
                  You have 2 applications due within the next 14 days. Stay on track with your applications!
                </p>
                <Button asChild>
                  <Link href="/dashboard/deadlines?filter=upcoming">View Upcoming Applications</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="future" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Future Deadlines</CardTitle>
              <CardDescription>Applications due after 14 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-blue-500/10 p-4 mb-4">
                  <CalendarIcon className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium mb-2">Future Deadlines</h3>
                <p className="text-muted-foreground max-w-md mb-6">
                  You have 2 applications with deadlines more than 14 days away. Plan ahead to complete them on time!
                </p>
                <Button asChild>
                  <Link href="/dashboard/deadlines?filter=future">View Future Applications</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

