"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"
import { Invitation } from "@/lib/types/invitation"
import { generateInviteCode } from "@/lib/utils/invite-code"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  invitee_name: z.string().min(1, "Invitee name is required"),
  invite_code: z.string().min(1, "Invite code is required"),
  notes: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

interface InvitationFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  invitation?: Invitation | null
  onSuccess?: () => void
}

export function InvitationForm({
  open,
  onOpenChange,
  invitation,
  onSuccess,
}: InvitationFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      invitee_name: "",
      invite_code: "",
      notes: "",
    },
  })

  // Watch invitee_name to auto-generate code
  const inviteeName = form.watch("invitee_name")

  useEffect(() => {
    if (inviteeName && !invitation) {
      // Only auto-generate if creating new invitation
      const generatedCode = generateInviteCode(inviteeName)
      form.setValue("invite_code", generatedCode, { shouldValidate: false })
    }
  }, [inviteeName, invitation, form])

  // Load invitation data when editing
  useEffect(() => {
    if (invitation && open) {
      form.reset({
        invitee_name: invitation.invitee_name,
        invite_code: invitation.invite_code,
        notes: invitation.notes || "",
      })
    } else if (!invitation && open) {
      form.reset({
        invitee_name: "",
        invite_code: "",
        notes: "",
      })
    }
  }, [invitation, open, form])

  const onSubmit = async (values: FormValues) => {
    if (!isSupabaseConfigured) {
      toast({
        title: "Error",
        description: "Supabase is not configured. Please add your credentials to .env.local",
        variant: "destructive",
      })
      return
    }

    try {
      setIsSubmitting(true)

      if (invitation) {
        // Update existing invitation
        const { error } = await supabase
          .from("invitations")
          .update({
            invitee_name: values.invitee_name,
            invite_code: values.invite_code,
            notes: values.notes || null,
          })
          .eq("id", invitation.id)

        if (error) throw error

        toast({
          title: "Success",
          description: "Invitation updated successfully",
        })
      } else {
        // Create new invitation
        const { error } = await supabase.from("invitations").insert({
          invitee_name: values.invitee_name,
          invite_code: values.invite_code,
          notes: values.notes || null,
        })

        if (error) throw error

        toast({
          title: "Success",
          description: "Invitation created successfully",
        })
      }

      onOpenChange(false)
      onSuccess?.()
    } catch (error: any) {
      console.error("Error saving invitation:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to save invitation",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>
            {invitation ? "Edit Invitation" : "Create New Invitation"}
          </DialogTitle>
          <DialogDescription>
            {invitation
              ? "Update the invitation details below."
              : "Fill in the details to create a new invitation."}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="invitee_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Invitee Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormDescription>
                    The name of the person being invited.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="invite_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Invite Code</FormLabel>
                  <FormControl>
                    <Input placeholder="john-doe" {...field} />
                  </FormControl>
                  <FormDescription>
                    URL-friendly code for the invitation link. Auto-generated
                    from name but can be edited.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Optional notes about this invitation..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Optional internal notes (not visible to invitee).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? "Saving..."
                  : invitation
                  ? "Update"
                  : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

