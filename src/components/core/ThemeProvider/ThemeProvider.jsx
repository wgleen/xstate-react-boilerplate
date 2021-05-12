import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

const colors = {
  backgroundColorPrimary: '#F5F5F5'
}

const theme = {
  colors: {
    backgroundColor: colors.backgroundColorPrimary
  },
  typography: {
    primaryFontFamily: 'Roboto',
    secondaryFontFamily: 'Helvetica'
  },
  grid: {
    gutter: 30
  }
}

function ThemeProvider ({ children }) {
  return (
    <StyledThemeProvider theme={theme} >
      {children}
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ])
}

export default ThemeProvider
