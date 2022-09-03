import { Theme as MUITheme, ThemeOptions as MUIThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme extends MUITheme {
    color: {
      white: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions extends MUIThemeOptions {
    color?: {
      white?: string
    }
  }
  export function createTheme(options?: ThemeOptions): Theme
}
