import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family:
      ${({ theme }) => theme.typography.primaryFontFamily},
      ${({ theme }) => theme.typography.secondaryFontFamily},
      "Arial", sans-serif
    ;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
