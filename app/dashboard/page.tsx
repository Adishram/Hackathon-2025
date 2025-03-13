import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { ApplicationsTable } from "@/components/dashboard/applications-table"
import { RecommendedPrograms } from "@/components/dashboard/recommended-programs"
import { UpcomingDeadlines } from "@/components/dashboard/upcoming-deadlines"
import { PeerSponsorshipOverview } from "@/components/dashboard/peer-sponsorship-overview"
import Link from "next/link"
import { Plus } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your financial aid applications.</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/applications/new">
            <Plus className="mr-2 h-4 w-4" />
            New Application
          </Link>
        </Button>
      </div>

      <DashboardStats />

      <Tabs defaultValue="applications" className="space-y-4">
        <TabsList>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="deadlines">Deadlines</TabsTrigger>
          <TabsTrigger value="sponsorship">Peer Sponsorship</TabsTrigger>
        </TabsList>
        <TabsContent value="applications" className="space-y-4">
          <ApplicationsTable />
        </TabsContent>
        <TabsContent value="recommendations" className="space-y-4">
          <RecommendedPrograms />
        </TabsContent>
        <TabsContent value="deadlines" className="space-y-4">
          <UpcomingDeadlines />
        </TabsContent>
        <TabsContent value="sponsorship" className="space-y-4">
          <PeerSponsorshipOverview />
        </TabsContent>
      </Tabs>
    </div>
  )
}

