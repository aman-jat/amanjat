import { Theme as MUITheme, ThemeOptions as MUIThemeOptions } from '@mui/material/styles'

type TYPE = {
  width: string
  height: string
  display: string
  gridTemplateColumns: string
  gridTemplateRows: string
  gridTemplateAreas: string
  menu: {
    width: string
    display: string
    height: string
    gridArea: string
  }
  header: {
    width: string
    display: string
    height: string
    alignItems: string
    borderBottom: string
    background: string
    gridTemplateColumns: string
    gridTemplateAreas: string
  }
  navPage: {
    width: string
    display: string
    height: string
    gridTemplateColumns: string
    gridTemplateAreas: string
    overflowY: string
  }
  page: {
    width: string
    padding: string
    display: string
    gridTemplateRows: string
    height: string
  }
}

declare module '@mui/material/styles' {
  interface CustomTheme extends MUITheme {
    layout: TYPE
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends MUIThemeOptions {
    layout: TYPE
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme
}
