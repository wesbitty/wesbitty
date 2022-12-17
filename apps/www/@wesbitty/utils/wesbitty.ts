import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const SUPABASE_URL = 'https://obuldanrptloktxcffvn.wesbitty.com'
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9idWxkYW5ycHRsb2t0eGNmZnZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk3MjcwMTIsImV4cCI6MTk4NTMwMzAxMn0.SZLqryz_-stF8dgzeVXmzZWPOqdOrBwqJROlFES8v3I'

const wesbitty = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export type SupabaseClient = typeof wesbitty

export default wesbitty
