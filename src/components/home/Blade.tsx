import React from 'react'
import { Box, Typography, Stack, Icon } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  text: string
  link: string
  icon: string
}

const Blade = (props: Props) => {
  return (
    <Box>
      <Stack>
        <Typography>{props.title}</Typography>
        <Icon>{props.icon}</Icon>
      </Stack>
      <Typography>{props.text}</Typography>
      <Link to=''>
        <Typography>{props.link}</Typography>
      </Link>
    </Box>
  )
}

export default Blade
