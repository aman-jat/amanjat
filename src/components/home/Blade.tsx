import React from 'react'
import { Box, Typography, Stack, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  text: string
  link: string
  icon: JSX.Element
}

const Blade = (props: Props) => {
  const theme = useTheme()
  return (
    <Stack
      sx={{
        direction: 'row',
        width: { md: 420, lg: 480 },
        justifyContent: 'space-between',
        p: '2rem',
        mt: 2,
        position: 'relative',
        backgroundColor: theme.palette.primary.light,
        borderRadius: 2,
        '&:hover h1': {
          color: theme.palette.secondary.main,
        },
        '&:hover': {
          backgroundColor: '#3e3e3e',
          transform: 'scaleY(1.1)',
        },
      }}
    >
      <Box>
        <Typography variant='h1'>{props.title}</Typography>
        <Typography variant='h6'>{props.text}</Typography>
        <Link to='' style={{ textDecoration: 'none' }}>
          <Typography
            variant='h6'
            sx={{ textDecoration: 'underline', marginTop: '1rem', color: '#ffffff' }}
          >
            {props.link}
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: 30,
          top: 30,
        }}
      >
        {props.icon}
      </Box>
    </Stack>
  )
}

export default Blade
