import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Validate that we have proper environment variables
const isValidUrl = supabaseUrl && supabaseUrl.startsWith('http')
const isValidKey = supabaseAnonKey && supabaseAnonKey.length > 0

if (!isValidUrl || !isValidKey) {
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

// Use placeholder values that won't cause errors but will fail gracefully on API calls
export const supabase = createClient(
  isValidUrl ? supabaseUrl : 'https://placeholder.supabase.co',
  isValidKey ? supabaseAnonKey : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
)

