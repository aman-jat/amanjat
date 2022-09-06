import { Box, Stack, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

const Section1 = () => {
  const theme = useTheme()
  return (
    <Box>
      <Stack flexDirection='row'>
        <Stack mx={16} alignItems='flex-start' justifyContent='center'>
          <Box p={1} borderRadius={1} sx={{ backgroundColor: theme.palette.secondary.main }}>
            <Typography variant='h6' fontSize={14} color={theme.palette.primary.main}>
              Full-Stack Software Enginner
            </Typography>
          </Box>
          <Stack my={4}>
            <Typography fontSize={60}>Talk is cheap.</Typography>
            <Typography fontSize={60}>Show me the code</Typography>
          </Stack>
          <Typography variant='h6'>
            I design and code beautifully simple things, and I love what I do
          </Typography>
          <Box mb={12} mt={8}>
            <Link to=''>
              <Typography
                color={theme.palette.secondary.dark}
                variant='h4'
                fontWeight='bold'
                sx={{ textDecoration: 'underline' }}
              >{`LET'S CHAT!`}</Typography>
            </Link>
          </Box>
        </Stack>

        <Stack
          sx={{
            backgroundColor: theme.palette.primary.dark,
            height: '70vh',
            width: '70vh',
            borderRadius: '100%',
            opacity: 0.4,
          }}
        />
      </Stack>
      <Stack flexDirection='row'>
        <Stack mr={4} flexDirection='row' alignItems='baseline'>
          <Typography fontSize={50} mr={1}>
            2
          </Typography>
          <Typography variant='h4'>YEARS EXPERIENCE</Typography>
        </Stack>
        <Stack flexDirection='row' alignItems='baseline'>
          <Typography fontSize={50} mr={1}>
            10
          </Typography>
          <Typography variant='h4'>PROJECTS COMPLETED</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Section1
