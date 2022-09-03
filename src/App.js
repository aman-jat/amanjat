import { ThemeProvider } from '@emotion/react'
import { createContext, useMemo, useState } from 'react'
import { createTheme } from '@mui/material'
import Root from 'navigation/Root'
import './App.css'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

const App = () => {
  const [mode, setMode] = useState(localStorage.getItem('mode') ?? 'light')
  const colorMode = useMemo(
    () => ({
      toggleMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
        localStorage.setItem('mode', mode === 'light' ? 'dark' : 'light')
      },
    }),
    [mode]
  )

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#62b769',
            },
            color: '#1a1a1a',
          },
        },
      },
    },
    typography: {
      body: {
        color: '#f2f2f3',
      },
      h1: {
        color: '#1a1a1a',
      },
      h2: {
        color: '#1e1e1e',
      },
      h3: {
        color: '#262626',
      },
      h4: {
        color: '#333333',
      },
      h5: {
        color: '#3a3a3a',
      },
      h6: {
        fontWeight: 600,
        color: mode === 'light' ? '#404040' : '#a6a6a6',
      },
      subtitle1: {
        color: '#1a1a1a',
      },
      subtitle2: {
        color: '#1a1a1a',
      },
      textColor: 'red',
      fontFamily: ['DM Sans'].join(','),
      allVariants: {
        color: mode === 'light' ? '#f2f2f3' : '#f2f2f3',
      },
    },
    palette: {
      mode: mode,
      text: {
        primary: '#f2f2f3',
      },
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: {
              main: '#2d2e32',
            }, // 50%
            primaryLight: '#62b769', //60%
            primaryLightTransparent: '#62b76940',
            primaryDark: '#306936', //35%
            primaryDarker: '#29562b',
            primaryDarkest: '#204623',
            white: '#ffffff',
            black: '#1a1a1a', // 10% black
            light: '#fff',
            dark: '#000',
            grey1: '#a6a6a6',
            grey2: '#737373',
            h1: '#1a1a1a',
            h2: '#1e1e1e',
            h3: '#262626',
            h4: '#333333',
            h5: '#3a3a3a',
            h6: '#404040',
            info: { main: '#e6e6e6' },
            success: { main: '#008000' },
            error: { main: '#e62e00' },
            warning: { main: '#ffc107' },
            disabled: '#e6e6e6',
            background: '#f2f2f2',
            darkerBackground: '#e6e6e6',
            darkerBackground2: '#d9d9d9',
            transparent: 'transparent',
          }
        : {
            // palette values for dark mode
            primary: {
              main: '#2d2e32',
            },
            primaryLight: '#62b769', //60%
            primaryLightTransparent: '#102312f9',
            primaryDark: '#306936', //35%
            primaryDarker: '#29562b',
            primaryDarkest: '#204623',
            white: '#ffffff',
            black: '#1a1a1a', // 10% black
            light: '#000',
            dark: '#fff',
            grey1: '#a6a6a6',
            grey2: '#737373',
            h1: '#f2f2f2',
            h2: '#e6e6e6',
            h3: '#d9d9d9',
            h4: '#bfbfbf',
            h5: '#b3b3b3',
            h6: '#a6a6a6',
            info: { main: '#e6e6e6' },
            success: { main: '#008000' },
            error: { main: '#e62e00' },
            warning: { main: '#ffc107' },
            disabled: '#e6e6e6',
            background: '#1a1a1a',
            darkerBackground: '#262626',
            darkerBackground2: '#333333',
            transparent: 'transparent',
          }),
    },
  })

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
