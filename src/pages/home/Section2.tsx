import React from 'react'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import Blade from '../../components/home/Blade'

const bladeData = [
  { title: 'Design', text: 'some text', link: '20 Projects', icon: 'add_circle' },
  { title: 'Front-end', text: 'some text', link: '23 projects', icon: 'add_circle' },
  { title: 'back-end', text: 'some-text', link: '12 projects', icon: 'add_circle' },
]

const Section2 = () => {
  const theme = useTheme()
  return (
    <Box>
      <Stack flexDirection='row'>
        {bladeData.map((item) => (
          <Blade title={item.title} text={item.text} link={item.text} icon={item.icon} />
        ))}
      </Stack>
    </Box>
  )
}

export default Section2
