import { Box, Stack, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

const Section1 = () => {
  const theme = useTheme()
  return (
    <Box>
      <Stack
        direction={{ xxs: 'column-reverse', md: 'row' }}
        sx={{ alignItems: { xxs: 'center', md: 'flex-start' } }}
      >
        <Stack
          mx={{ lg: 16 }}
          mt={{ xxs: 4, md: 0 }}
          alignItems={{ xxs: 'center', md: 'flex-start' }}
          justifyContent='center'
        >
          <Box p={1} my={2} borderRadius={1} sx={{ backgroundColor: theme.palette.secondary.main }}>
            <Typography variant='h6' fontSize={14} color={theme.palette.primary.main}>
              Full-Stack Software Engineer
            </Typography>
          </Box>

          <Typography sx={{ textAlign: { xxs: 'center', md: 'left' } }} fontSize={60}>
            Talk is cheap.
          </Typography>
          <Typography sx={{ textAlign: { xxs: 'center', md: 'left' } }} fontSize={60}>
            Show me the code
          </Typography>

          <Typography sx={{ textAlign: { xxs: 'center', md: 'left' } }} variant='h6'>
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

        <Box
          sx={{
            backgroundColor: theme.palette.primary.dark,
            height: '70vh',
            width: '70vh',
            borderRadius: '100%',
            opacity: 0.4,
          }}
        />
      </Stack>
      <Stack justifyContent='center' spacing={2} direction='row' alignItems='center'>
        <Stack
          direction={{ xxs: 'column', sm: 'row' }}
          alignItems={{ xxs: 'center', md: 'baseline' }}
          ml={5}
        >
          <Typography textAlign={{ xxs: 'center', sm: 'left' }} fontSize={50} mr={1}>
            2
          </Typography>
          <Typography textAlign={{ xxs: 'center', sm: 'left' }} variant='h5'>
            YEARS EXPERIENCE
          </Typography>
        </Stack>
        <Stack
          flexDirection={{ xxs: 'column', sm: 'row' }}
          alignItems={{ xxs: 'center', md: 'baseline' }}
        >
          <Typography textAlign={{ xxs: 'center', sm: 'left' }} fontSize={50} mr={1}>
            10
          </Typography>
          <Typography textAlign={{ xxs: 'center', sm: 'left' }} variant='h5'>
            PROJECTS COMPLETED
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Section1
