import { Stack, useTheme } from '@mui/material'
import HeaderNav from 'components/headerNav'
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Home } from '../pages'

const Root = () => {
  const theme = useTheme()
  return (
    <Stack sx={{ backgroundColor: theme.palette.primary.main }}>
      <Stack sx={{ margin: { xs: '0 10%', lg: '0 10%', md: '0 5%' } }}>
        <Router>
          <HeaderNav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Router>
      </Stack>
    </Stack>
  )
}

export default Root
