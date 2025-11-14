-- ============================================
-- Wishes Table Schema
-- ============================================

-- Create wishes table
CREATE TABLE IF NOT EXISTS wishes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Submission Information
  submitter_name TEXT NOT NULL,
  message TEXT NOT NULL,
  avatar TEXT NOT NULL, -- Avatar identifier/emoji chosen by the submitter
  client_submission_id TEXT, -- Unique ID stored in local storage to track user's own submissions
  
  -- Approval Status
  approval_status TEXT CHECK (approval_status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  approved_at TIMESTAMPTZ,
  approved_by UUID, -- Optional: track who approved (if you have admin users)
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Add avatar column if table already exists without it
-- ============================================

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'wishes' AND column_name = 'avatar'
  ) THEN
    ALTER TABLE wishes ADD COLUMN avatar TEXT NOT NULL DEFAULT '😊';
    -- Remove default after adding (since it's required for new rows)
    ALTER TABLE wishes ALTER COLUMN avatar DROP DEFAULT;
  END IF;
END $$;

-- ============================================
-- Indexes for better query performance
-- ============================================

CREATE INDEX IF NOT EXISTS idx_wishes_approval_status ON wishes(approval_status);
CREATE INDEX IF NOT EXISTS idx_wishes_client_submission_id ON wishes(client_submission_id);
CREATE INDEX IF NOT EXISTS idx_wishes_created_at ON wishes(created_at DESC);

-- ============================================
-- Function to auto-update updated_at timestamp
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- ============================================
-- Trigger to auto-update updated_at
-- ============================================

DROP TRIGGER IF EXISTS update_wishes_updated_at ON wishes;

CREATE TRIGGER update_wishes_updated_at 
BEFORE UPDATE ON wishes 
FOR EACH ROW 
EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Optional: View for approved wishes only
-- ============================================

-- Drop view if it exists (needed to change column structure)
DROP VIEW IF EXISTS approved_wishes;

CREATE VIEW approved_wishes AS
SELECT 
  id,
  submitter_name,
  message,
  avatar,
  created_at
FROM wishes
WHERE approval_status = 'approved'
ORDER BY created_at DESC;

-- ============================================
-- Row Level Security (RLS) Policies
-- ============================================

-- Enable RLS
ALTER TABLE wishes ENABLE ROW LEVEL SECURITY;

-- Policy: Public can view approved wishes
DROP POLICY IF EXISTS "Public can view approved wishes" ON wishes;
CREATE POLICY "Public can view approved wishes"
ON wishes FOR SELECT
USING (approval_status = 'approved');

-- Policy: Public can insert new wishes
DROP POLICY IF EXISTS "Public can submit wishes" ON wishes;
CREATE POLICY "Public can submit wishes"
ON wishes FOR INSERT
WITH CHECK (true);

-- Policy: Admins can do everything
-- Note: Adjust the auth.role() check based on your admin setup
DROP POLICY IF EXISTS "Admins have full access" ON wishes;
CREATE POLICY "Admins have full access"
ON wishes FOR ALL
USING (auth.role() = 'authenticated');

-- ============================================
-- Grant permissions (adjust as needed)
-- ============================================

-- Grant SELECT on view to authenticated and anon users
GRANT SELECT ON approved_wishes TO authenticated, anon;

