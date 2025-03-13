"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Calendar, FileText, Home, LifeBuoy, Settings, Upload, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ComponentType<{ className?: string }>
  }[]
}

export function DashboardSidebar({ className }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Applications",
      href: "/dashboard/applications",
      icon: FileText,
    },
    {
      title: "Documents",
      href: "/dashboard/documents",
      icon: Upload,
    },
    {
      title: "Eligibility",
      href: "/dashboard/eligibility",
      icon: BarChart3,
    },
    {
      title: "Deadlines",
      href: "/dashboard/deadlines",
      icon: Calendar,
    },
    {
      title: "Peer Sponsorship",
      href: "/dashboard/sponsorship",
      icon: Users,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
    {
      title: "Help & Support",
      href: "/dashboard/support",
      icon: LifeBuoy,
    },
  ]

  return (
    <nav className={cn("hidden border-r bg-background md:block w-64 overflow-hidden", className)}>
      <div className="flex h-full flex-col">
        <ScrollArea className="flex-1 py-4">
          <div className="px-3 py-2">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href
                      ? "bg-secondary text-secondary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground",
                  )}
                  asChild
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </ScrollArea>
        <div className="mt-auto p-4">
          <div className="rounded-lg border bg-card p-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <LifeBuoy className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Need help?</h4>
                <p className="text-xs text-muted-foreground">Contact support</p>
              </div>
            </div>
            <Button className="mt-4 w-full text-xs" size="sm" asChild>
              <Link href="/dashboard/support">Get Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

