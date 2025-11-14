import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Validate that we have proper environment variables
const isValidUrl = supabaseUrl && supabaseUrl.startsWith('http')
const isValidKey = supabaseAnonKey && supabaseAnonKey.length > 0

export const isSupabaseConfigured = isValidUrl && isValidKey

if (!isSupabaseConfigured) {
  if (typeof window === 'undefined') {
    // Server-side: only warn in development
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '⚠️ Supabase credentials missing!\n' +
        'Please create a .env.local file with:\n' +
        'NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url\n' +
        'NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key'
      )
    }
  }
}

// Only create client if we have valid credentials
// Otherwise, create a client that will fail gracefully
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://placeholder.supabase.co', 'placeholder-key')

