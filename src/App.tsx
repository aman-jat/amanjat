import { CssBaseline, ThemeProvider } from '@mui/material'
import Root from 'navigation/Root'
import { appTheme } from './themes/theme'

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <Root />
    </ThemeProvider>
  )
}

export default App
