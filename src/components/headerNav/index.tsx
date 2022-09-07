import { IconButton, Stack, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { Email } from '@mui/icons-material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { headerNavLinks, headerNavSocialLinks } from 'assets/asset.js'

const typeScriptStyle = {
  letterSpacing: { lg: '0.5px', md: '0px' },
  '&:hover': {
    color: '#64F4AC',
    textDecoration: 'underline',
    textUnderlineOffset: '8px',
    transform: 'translate(0px ,0px) scale(1.02)',
  },
}

const Links = () => {
  return (
    <Stack flexDirection={{ xs: 'row', xxs: 'column' }} alignItems={{ xxs: 'center' }}>
      {headerNavLinks.map((link) => (
        <Link key={link.id} style={{ textDecoration: 'none' }} to={link.to}>
          <Typography
            mx={{ lg: 2, md: 1, sm: 1, xs: 2 }}
            mt={{ xxs: 3, xs: 2, sm: 0 }}
            sx={typeScriptStyle}
          >
            {link.title}
          </Typography>
        </Link>
      ))}
    </Stack>
  )
}

const HeaderNav = () => {
  const theme = useTheme()
  const matches = useMediaQuery('(min-width:600px)')
  return (
    <Stack
      flexDirection={{ sm: 'column', md: 'row' }}
      spacing={{ sm: 4, md: 0 }}
      py={5}
      justifyContent='space-between'
      alignItems='center'
    >
      <Stack
        flexDirection='row'
        alignItems='center'
        flex={1}
        width={{ sm: '90%' }}
        justifyContent={{ sm: 'space-between', md: 'flex-start' }}
      >
        <Stack flexDirection='row'>
          <Typography variant='h1' mr={1} fontWeight='bold'>
            {'Aman'}
          </Typography>
          <Typography variant='h1' mr={{ lg: '24px', md: '16px', sm: 1 }}>
            Jat
          </Typography>
        </Stack>
        {matches && <Links />}
      </Stack>

      <Stack flexDirection='row' alignItems='baseline' flex={1} justifyContent='flex-end'>
        {headerNavSocialLinks.map((link) => {
          return (
            <Link key={link.id} style={{ textDecoration: 'none' }} to={link.to}>
              <Stack mx={1} flexDirection='row'>
                <Typography mx={1}>{link.logo}</Typography>
                <Typography
                  display={{ xxs: 'none', xs: 'flex' }}
                  sx={typeScriptStyle}
                  variant='subtitle1'
                >
                  {link.title}
                </Typography>
              </Stack>
            </Link>
          )
        })}
        <IconButton
          sx={{
            padding: '16px',
            backgroundColor: '#333438',
          }}
        >
          <Email sx={{ color: theme.palette.secondary.light }} />
        </IconButton>
      </Stack>
      {!matches && <Links />}
    </Stack>
  )
}

export default HeaderNav
