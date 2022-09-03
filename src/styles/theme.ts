import { createTheme } from '@mui/material/styles'
import type {} from '@mui/x-data-grid/themeAugmentation'
// it could be your App.tsx file or theme file that is included in your tsconfig.json

const theme = {
  palette: {
    primary: {
      main: '#2d2e32',
    },
    secondary: {
      main: '#64F4AC',
    },
  },
  components: {
    MuiInputBase: {
      defaultProps: {
        disableInjectingGlobalStyles: true,
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
        },
      },
    },
  },
  typography: {
    menuTitle: {
      color: '#37374D',
      fontSize: '1rem',
      fontWeight: 700,
    },
  },
  layout: {
    width: '100%',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '73px 1fr',
    gridTemplateRows: '64px 1fr',
    gridTemplateAreas: '"header header" "menu page"',
    menu: {
      width: '100%',
      display: 'grid',
      height: 'calc(100vh - 64px)',
      gridArea: 'menu',
    },
    header: {
      width: '100%',
      display: 'grid',
      height: '64px',
      alignItems: 'center',
      borderBottom: '1px solid #E8E8E8',
      background: 'white',
      gridTemplateColumns: '73px 235px auto',
      gridTemplateAreas: '"headerLogo siteList headerNav"',
    },
    navPage: {
      width: '100%',
      display: 'grid',
      height: 'calc(100vh - 64px)',
      gridTemplateColumns: '235px 1fr',
      gridTemplateAreas: '"pageNav pageBody"',
      overflowY: 'hidden',
    },
    page: {
      width: '100%',
      padding: '3rem 3rem',
      display: 'grid',
      gridTemplateRows: '73px 1fr',
      height: 'calc(100vh - 64px)',
    },
  },
}

type CustomTheme = {
  [Key in keyof typeof theme]: typeof theme[Key]
}

declare module '@mui/material/styles/createTheme' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    menuTitle: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    menuTitle?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    menuTitle: true
  }
}

export default createTheme(theme)
