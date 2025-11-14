"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Invitation } from "@/lib/types/invitation"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { InvitationForm } from "./InvitationForm"
import { useToast } from "@/hooks/use-toast"
import { Edit, Trash2, Copy, Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function InvitationTable() {
  const [invitations, setInvitations] = useState<Invitation[]>([])
  const [loading, setLoading] = useState(true)
  const [editingInvitation, setEditingInvitation] = useState<Invitation | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [invitationToDelete, setInvitationToDelete] = useState<Invitation | null>(null)
  const { toast } = useToast()

  const fetchInvitations = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from("invitations")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) throw error
      setInvitations(data || [])
    } catch (error) {
      console.error("Error fetching invitations:", error)
      toast({
        title: "Error",
        description: "Failed to load invitations",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchInvitations()
  }, [])

  const handleEdit = (invitation: Invitation) => {
    setEditingInvitation(invitation)
    setIsFormOpen(true)
  }

  const handleDelete = async () => {
    if (!invitationToDelete) return

    try {
      const { error } = await supabase
        .from("invitations")
        .delete()
        .eq("id", invitationToDelete.id)

      if (error) throw error

      toast({
        title: "Success",
        description: "Invitation deleted successfully",
      })
      setDeleteDialogOpen(false)
      setInvitationToDelete(null)
      fetchInvitations()
    } catch (error) {
      console.error("Error deleting invitation:", error)
      toast({
        title: "Error",
        description: "Failed to delete invitation",
        variant: "destructive",
      })
    }
  }

  const handleCopyLink = (inviteCode: string) => {
    const link = `sookitaro.day/${inviteCode}`
    navigator.clipboard.writeText(link)
    toast({
      title: "Copied!",
      description: "Invitation link copied to clipboard",
    })
  }

  const handleFormClose = () => {
    setIsFormOpen(false)
    setEditingInvitation(null)
    fetchInvitations()
  }

  if (loading) {
    return <div className="text-center py-8">Loading invitations...</div>
  }

  return (
    <>
      <div className="mb-4 flex justify-end">
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Invitation
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invitee Name</TableHead>
              <TableHead>Invite Code</TableHead>
              <TableHead>Link</TableHead>
              <TableHead>Notes</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invitations.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                  No invitations found. Create your first invitation!
                </TableCell>
              </TableRow>
            ) : (
              invitations.map((invitation) => (
                <TableRow key={invitation.id}>
                  <TableCell className="font-medium">
                    {invitation.invitee_name}
                  </TableCell>
                  <TableCell>
                    <code className="text-sm bg-muted px-2 py-1 rounded">
                      {invitation.invite_code}
                    </code>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        sookitaro.day/{invitation.invite_code}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCopyLink(invitation.invite_code)}
                        className="h-8 w-8"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">
                    {invitation.notes || "-"}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(invitation)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setInvitationToDelete(invitation)
                          setDeleteDialogOpen(true)
                        }}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <InvitationForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        invitation={editingInvitation}
        onSuccess={handleFormClose}
      />

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Invitation</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the invitation for{" "}
              <strong>{invitationToDelete?.invitee_name}</strong>? This action
              cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => {
                setDeleteDialogOpen(false)
                setInvitationToDelete(null)
              }}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

