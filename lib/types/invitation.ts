export interface Invitation {
  id: string
  invitee_name: string
  invite_code: string
  notes: string | null
  created_at: string
  updated_at: string
}

export interface InvitationInsert {
  invitee_name: string
  invite_code: string
  notes?: string | null
}

export interface InvitationUpdate {
  invitee_name?: string
  invite_code?: string
  notes?: string | null
}

