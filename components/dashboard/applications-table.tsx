"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Eye, FileEdit, Trash2 } from "lucide-react"
import Link from "next/link"

export function ApplicationsTable() {
  const applications = [
    {
      id: "APP-1234",
      name: "National Scholarship Program",
      status: "approved",
      amount: "₹50,000",
      date: "2023-10-15",
      deadline: "2023-09-30",
    },
    {
      id: "APP-1235",
      name: "Merit-Based Engineering Scholarship",
      status: "pending",
      amount: "₹75,000",
      date: "2023-10-10",
      deadline: "2023-10-31",
    },
    {
      id: "APP-1236",
      name: "Women in STEM Grant",
      status: "pending",
      amount: "₹25,000",
      date: "2023-10-05",
      deadline: "2023-11-15",
    },
    {
      id: "APP-1237",
      name: "Rural Education Support Fund",
      status: "rejected",
      amount: "₹35,000",
      date: "2023-09-28",
      deadline: "2023-09-15",
    },
    {
      id: "APP-1238",
      name: "First Generation Student Aid",
      status: "approved",
      amount: "₹40,000",
      date: "2023-09-20",
      deadline: "2023-09-10",
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
    <Card>
      <CardHeader>
        <CardTitle>Recent Applications</CardTitle>
        <CardDescription>Track the status of your recent financial aid applications.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Application ID</TableHead>
              <TableHead>Program Name</TableHead>
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
                <TableCell>
                  <Badge variant="outline" className={`${getStatusColor(application.status)} capitalize`}>
                    {application.status}
                  </Badge>
                </TableCell>
                <TableCell>{application.amount}</TableCell>
                <TableCell>{new Date(application.date).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(application.deadline).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        <span>View Details</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileEdit className="mr-2 h-4 w-4" />
                        <span>Edit Application</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 flex justify-end">
          <Button asChild variant="outline">
            <Link href="/dashboard/applications">View All Applications</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

