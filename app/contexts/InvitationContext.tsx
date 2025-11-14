"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { supabase, isSupabaseConfigured } from "@/lib/supabase"
import { Invitation } from "@/lib/types/invitation"

interface InvitationContextType {
  invitation: Invitation | null
  loading: boolean
  error: string | null
  fetchInvitation: (inviteCode: string) => Promise<void>
  clearInvitation: () => void
}

const InvitationContext = createContext<InvitationContextType | undefined>(undefined)

const STORAGE_KEY = "invitation_data"
const STORAGE_TIMESTAMP_KEY = "invitation_data_timestamp"
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours

export function InvitationProvider({ children }: { children: ReactNode }) {
  const [invitation, setInvitation] = useState<Invitation | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return

    const stored = localStorage.getItem(STORAGE_KEY)
    const timestamp = localStorage.getItem(STORAGE_TIMESTAMP_KEY)
    
    if (stored && timestamp) {
      const age = Date.now() - parseInt(timestamp)
      if (age < CACHE_DURATION) {
        try {
          setInvitation(JSON.parse(stored))
        } catch (e) {
          console.error("Failed to parse stored invitation:", e)
        }
      } else {
        // Cache expired, clear it
        localStorage.removeItem(STORAGE_KEY)
        localStorage.removeItem(STORAGE_TIMESTAMP_KEY)
      }
    }
  }, [])

  const fetchInvitation = async (inviteCode: string) => {
    if (!isSupabaseConfigured) {
      setError("Supabase is not configured")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const { data, error: supabaseError } = await supabase
        .from("invitations")
        .select("*")
        .eq("invite_code", inviteCode)
        .single()

      if (supabaseError) throw supabaseError
      if (!data) {
        throw new Error("Invitation not found")
      }

      setInvitation(data)
      
      // Store in localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      localStorage.setItem(STORAGE_TIMESTAMP_KEY, Date.now().toString())

      // Track visit (don't block on this)
      if (data.id) {
        supabase
          .from("invitation_visits")
          .insert({
            invitation_id: data.id,
            visited_at: new Date().toISOString(),
          })
          .then(({ error }) => {
            if (error) console.error("Failed to track visit:", error)
          })
      }
    } catch (err: any) {
      setError(err.message || "Failed to fetch invitation")
      console.error("Error fetching invitation:", err)
    } finally {
      setLoading(false)
    }
  }

  const clearInvitation = () => {
    setInvitation(null)
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(STORAGE_TIMESTAMP_KEY)
  }

  return (
    <InvitationContext.Provider
      value={{ invitation, loading, error, fetchInvitation, clearInvitation }}
    >
      {children}
    </InvitationContext.Provider>
  )
}

export function useInvitation() {
  const context = useContext(InvitationContext)
  if (context === undefined) {
    throw new Error("useInvitation must be used within InvitationProvider")
  }
  return context
}

