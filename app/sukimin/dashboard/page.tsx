"use client"

import { PasswordProtection } from "./components/PasswordProtection"
import { InvitationTable } from "./components/InvitationTable"
import { Toaster } from "@/components/ui/toaster"

export default function DashboardPage() {
  return (
    <PasswordProtection>
      <div className="min-h-screen bg-background p-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Invitation Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Manage your wedding invitations
            </p>
          </div>
          <InvitationTable />
        </div>
      </div>
      <Toaster />
    </PasswordProtection>
  )
}

