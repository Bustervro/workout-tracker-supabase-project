import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://owfrtdvcrmbnhvoandip.supabase.co'
const supabaseKey = 'sb_publishable_6Qcfub0shee3Sv27ofFqMg_kVr6A_9P'

export const supabase = createClient(supabaseUrl, supabaseKey)
