"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { CheckCircle2, Clock, FileEdit, FileText, Plus, Search, SlidersHorizontal, Trash2, X } from "lucide-react"
import Link from "next/link"

export default function ApplicationsPage() {
  const [showFilters, setShowFilters] = useState(false)

  const applications = [
    {
      id: "APP-1234",
      name: "National Scholarship Program",
      provider: "Ministry of Education",
      status: "approved",
      amount: "₹50,000",
      date: "2023-10-15",
      deadline: "2023-09-30",
      category: "merit",
    },
    {
      id: "APP-1235",
      name: "Merit-Based Engineering Scholarship",
      provider: "Technical Education Board",
      status: "pending",
      amount: "₹75,000",
      date: "2023-10-10",
      deadline: "2023-10-31",
      category: "merit",
    },
    {
      id: "APP-1236",
      name: "Women in STEM Grant",
      provider: "Women Empowerment Foundation",
      status: "pending",
      amount: "₹25,000",
      date: "2023-10-05",
      deadline: "2023-11-15",
      category: "diversity",
    },
    {
      id: "APP-1237",
      name: "Rural Education Support Fund",
      provider: "Rural Development Trust",
      status: "rejected",
      amount: "₹35,000",
      date: "2023-09-28",
      deadline: "2023-09-15",
      category: "need-based",
    },
    {
      id: "APP-1238",
      name: "First Generation Student Aid",
      provider: "Education For All Foundation",
      status: "approved",
      amount: "₹40,000",
      date: "2023-09-20",
      deadline: "2023-09-10",
      category: "need-based",
    },
    {
      id: "APP-1239",
      name: "Computer Science Excellence Award",
      provider: "Tech Industry Association",
      status: "pending",
      amount: "₹60,000",
      date: "2023-09-15",
      deadline: "2023-10-20",
      category: "merit",
    },
    {
      id: "APP-1240",
      name: "Minority Student Scholarship",
      provider: "Diversity in Education Fund",
      status: "approved",
      amount: "₹45,000",
      date: "2023-09-10",
      deadline: "2023-08-31",
      category: "diversity",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20"
      case "pending":
        return "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
      case "rejected":
        return "bg-red-500/10 text-red-500 hover:bg-red-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Applications</h1>
          <p className="text-muted-foreground">Manage and track your financial aid applications</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/applications/new">
            <Plus className="mr-2 h-4 w-4" />
            New Application
          </Link>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search applications..." className="w-full pl-8" />
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
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
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
                    <SelectItem value="merit">Merit-based</SelectItem>
                    <SelectItem value="need-based">Need-based</SelectItem>
                    <SelectItem value="diversity">Diversity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Date Range</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="All time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All time</SelectItem>
                    <SelectItem value="last-month">Last month</SelectItem>
                    <SelectItem value="last-3-months">Last 3 months</SelectItem>
                    <SelectItem value="last-year">Last year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Amount</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Any amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any amount</SelectItem>
                    <SelectItem value="under-25k">Under ₹25,000</SelectItem>
                    <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                    <SelectItem value="over-50k">Over ₹50,000</SelectItem>
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

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Applications</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>All Applications</CardTitle>
              <CardDescription>View and manage all your financial aid applications</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Application ID</TableHead>
                    <TableHead>Program Name</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Applied On</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell className="font-medium">{application.id}</TableCell>
                      <TableCell>{application.name}</TableCell>
                      <TableCell>{application.provider}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`${getStatusColor(application.status)} capitalize`}>
                          {application.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{application.amount}</TableCell>
                      <TableCell>{new Date(application.date).toLocaleDateString()}</TableCell>
                      <TableCell>{new Date(application.deadline).toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={`/dashboard/applications/${application.id}`}>
                              <FileText className="h-4 w-4" />
                              <span className="sr-only">View</span>
                            </Link>
                          </Button>
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={`/dashboard/applications/${application.id}/edit`}>
                              <FileEdit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Link>
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-500">
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending" className="mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Pending Applications</CardTitle>
              <CardDescription>Applications that are currently under review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-amber-500/10 p-4 mb-4">
                  <Clock className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-lg font-medium mb-2">Pending Applications</h3>
                <p className="text-muted-foreground max-w-md mb-6">
                  You have 3 applications pending review. We'll notify you when there are updates.
                </p>
                <Button asChild>
                  <Link href="/dashboard/applications/pending">View Pending Applications</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="approved" className="mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Approved Applications</CardTitle>
              <CardDescription>Applications that have been approved</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-green-500/10 p-4 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-lg font-medium mb-2">Approved Applications</h3>
                <p className="text-muted-foreground max-w-md mb-6">
                  You have 3 approved applications. Congratulations on your successful applications!
                </p>
                <Button asChild>
                  <Link href="/dashboard/applications/approved">View Approved Applications</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rejected" className="mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Rejected Applications</CardTitle>
              <CardDescription>Applications that were not approved</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-red-500/10 p-4 mb-4">
                  <X className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-lg font-medium mb-2">Rejected Applications</h3>
                <p className="text-muted-foreground max-w-md mb-6">
                  You have 1 rejected application. Don't worry, we can help you find other opportunities.
                </p>
                <Button asChild>
                  <Link href="/dashboard/applications/rejected">View Rejected Applications</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

