import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Home } from '../pages'

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to='/site/new' />} />
      </Routes>
    </Router>
  )
}

export default Root
