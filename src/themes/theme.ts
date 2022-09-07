import { green } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxs: true // removes the `xs` breakpoint
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
  }
}

export const appTheme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 360,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#2D2E32',
    },
    secondary: green,
  },
  typography: {
    h1: {
      color: '#262626',
    },
    h2: {
      color: '#262626',
    },
    h3: {
      color: '#262626',
    },
    h4: {
      color: '#262626',
    },
    h5: {
      color: '#f2f2f3',
    },
    h6: {
      color: '#262626',
    },
    subtitle1: {
      color: '#99999b',
      fontSize: '13px',
      fontWeight: '500',
    },
    subtitle2: {
      color: '#262626',
    },
    fontFamily: ['DM Sans'].join(','),
    allVariants: {
      color: '#f2f2f3',
    },
  },
})
