import { Stack, useTheme } from '@mui/material'
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Home } from '../pages'

const Root = () => {
  const theme = useTheme()
  return (
    <Stack sx={{ backgroundColor: theme.palette.primary.main }}>
      <Stack sx={{ margin: { lg: '0 10%', md: '0 5%' } }}>
        <Router>
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
