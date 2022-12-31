import { Card, Space, Typography } from '@wesbitty/ui'
import DeveloperSignups from './DeveloperSignups'

type TeamMember = {
  name: string
  img: string
  department: string
  active: boolean

  github?: string
  twitter?: string
  linkedin?: string
}

const data: TeamMember[] = [
  {
    name: 'Caryn Marooney',
    img: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/iqltjymln82pxxcwr6kq.png',
    department: 'Board member',
    twitter: 'https://twitter.com/carynm650',
    active: true,
  },
  {
    name: 'Robertson Peter',
    github: 'https://github.com/kiwicopple',
    img: 'https://github.com/kiwicopple.png',
    department: 'Cofounder',
    twitter: 'https://twitter.com/kiwicopple',
    active: true,
  },
  {
    name: 'Laura Theodoratos',
    github: 'https://github.com/awalias',
    img: 'https://github.com/awalias.png',
    department: 'Cofounder',
    twitter: 'https://twitter.com/antwilson',
    active: true,
  },
  {
    name: 'Iam Raff',
    github: 'https://github.com/dragarcia',
    img: 'https://github.com/dragarcia.png',
    department: 'Engineering',
    active: true,
  },
]

export default data
