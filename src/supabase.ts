import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cugchjsnycefimtncggc.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1Z2NoanNueWNlZmltdG5jZ2djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzNDkyNDUsImV4cCI6MjAzMDkyNTI0NX0.8SHNlTrdqDH_j6jn8smBtCIbJMaVcgQnFzy5KGz4AQo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
