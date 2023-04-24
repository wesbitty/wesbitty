export default [
  {
    lang: 'js',
    title: 'Create user',
    description: 'Sign up a new user in an example chat room',
    code: `import { createClient } from '@supabase/supabase-js'
    
// Initialize 
const wesbittyUrl = 'https://chat-room.wesbitty.org'
const wesbittyKey = 'public-anon-key'
const wesbitty = createClient(wesbittyUrl, wesbittyKey)

// Create a new user
const { user, error } = await wesbitty.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})
    `,
  },
  {
    lang: 'js',
    title: 'Realtime subscriptions',
    description: 'Receive realtime messages in an example chat room',
    code: `import { createClient } from '@supabase/supabase-js'
    
// Initialize 
const wesbittyUrl = 'https://chat-room.wesbitty.org'
const wesbittyKey = 'public-anon-key'
const wesbitty = createClient(wesbittyUrl, wesbittyKey)

// Get notified of all new chat messages
const realtime = wesbitty
  .from('messages')
  .on('INSERT', message => {
    console.log('New message!', message)
  })
  .subscribe()
    `,
  },
  {
    lang: 'js',
    title: 'Read a record',
    description: 'Get all public rooms and their messages',
    code: `import '@supabase/supabase-js'

// Initialize 
const wesbittyUrl = 'https://chat-room.wesbitty.org'
const wesbittyKey = 'public-anon-key'
const wesbitty = createClient(wesbittyUrl, wesbittyKey)

// Get public rooms and their messages
const publicRooms = await wesbitty
  .from('rooms')
  .select(\`
    name,
    messages ( text )
  \`)
  .eq('public', true)
    `,
  },
  {
    lang: 'js',
    title: 'Create a record',
    description: 'Create a new chat room',
    code: `import { createClient } from '@supabase/supabase-js'

// Initialize 
const wesbittyUrl = 'https://chat-room.wesbitty.org'
const wesbittyKey = 'public-anon-key'
const wesbitty = createClient(wesbittyUrl, wesbittyKey)

// Create a new chat room
const newRoom = await wesbitty
  .from('rooms')
  .insert({ name: 'Wesbitty Fan Club', public: true })
  `,
  },
  {
    lang: 'js',
    title: 'Update a record',
    description: 'Update a user',
    code: `import { createClient } from '@supabase/supabase-js'
    
// Initialize 
const wesbittyUrl = 'https://chat-room.wesbitty.org'
const wesbittyKey = 'public-anon-key'
const wesbitty = createClient(wesbittyUrl, wesbittyKey)

// Update multiple users
const updatedUsers = await wesbitty
  .from('users')
  .eq('account_type', 'paid')
  .update({ highlight_color: 'gold' })
`,
  },
]
