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
    secondary: {
      light: '#71f4a8',
      main: '#6EF3A5',
      dark: '#6EF7A5',
    },
  },
  typography: {
    h1: {
      fontSize: '25px',
      color: '#ffffff',
    },
    h2: {
      fontSize: '23px',
      color: '#f2f2f2',
    },
    h3: {
      fontSize: '21px',
      color: '#e6e6e6',
    },
    h4: {
      fontSize: '19px',
      color: '#d9d9d9',
    },
    h5: {
      fontSize: '17px',
      color: '#cccccc',
    },
    h6: {
      fontSize: '15px',
      color: '#bfbfbf',
    },
    subtitle1: {
      color: '#99999b',
      fontSize: '13px',
      fontWeight: '500',
    },
    subtitle2: {
      fontSize: '12px',
      color: '#262626',
    },

    fontFamily: ['DM Sans'].join(','),
    allVariants: {
      color: '#f2f2f3',
    },
  },
})
