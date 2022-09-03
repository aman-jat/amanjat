import { Twitter, GitHub, LinkedIn } from '@mui/icons-material'

export const headerNavLinks = [
  {
    id: 1,
    title: 'Projects',
    to: '/projects',
  },
  {
    id: 2,
    title: 'Services',
    to: '/services',
  },
  {
    id: 3,
    title: 'Feedback',
    to: '/feedback',
  },
  {
    id: 4,
    title: 'Contacts',
    to: '/contacts',
  },
]

export const headerNavSocialLinks = [
  {
    id: 1,
    title: 'Twitter',
    to: '/twitter',
    logo: <Twitter fontSize='small' />,
  },
  {
    id: 2,
    title: 'LinkedIn',
    to: '/linkedin',
    logo: <LinkedIn fontSize='small' />,
  },
  {
    id: 3,
    title: 'Github',
    to: '/github',
    logo: <GitHub fontSize='small' />,
  },
]
