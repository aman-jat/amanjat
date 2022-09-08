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
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      sx={{
        p: '2rem',
        mt: 2,
        position: 'relative',
        backgroundColor: theme.palette.primary.light,
        borderRadius: 2,
      }}
      width={{ md: 420, lg: 480 }}
    >
      <Box>
        <Typography fontSize={28}>{props.title}</Typography>
        <Typography>{props.text}</Typography>
        <Link to='' style={{ textDecoration: 'none' }}>
          <Typography fontSize={12} sx={{ textDecoration: 'underline', marginTop: '1rem' }}>
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
