import React from 'react'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import Blade from '../../components/home/Blade'
import MyLocationIcon from '@mui/icons-material/MyLocation'
import CodeIcon from '@mui/icons-material/Code'

const bladeData = [
  {
    title: 'Design',
    text: 'Create digital product with unique idea',
    link: '20 Projects',
    icon: <CodeIcon />,
  },
  {
    title: 'Front-end',
    text: 'I develop frontend with coding super smooth',
    link: '23 projects',
    icon: <CodeIcon />,
  },
  {
    title: 'back-end',
    text: 'Boost business with SEO optimize',
    link: '12 projects',
    icon: <MyLocationIcon />,
  },
]

const Section2 = () => {
  const theme = useTheme()
  return (
    <Box mt='5rem'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box>
          {bladeData.map((item) => (
            <Blade title={item.title} text={item.text} link={item.link} icon={item.icon} />
          ))}
        </Box>
        <Box px={{ md: '3rem', lg: '5rem', xl: 5, xxl: 6 }}>
          <Typography>Introduce</Typography>
          <Typography mt='2rem' fontSize={50} sx={{ lineHeight: 1 }}>
            Hello! I'm Jasmeet Kaur
          </Typography>
          <Typography my='2rem' fontSize={20}>
            Every great design begin with an even better story
          </Typography>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default Section2
