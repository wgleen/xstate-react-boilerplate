import React from 'react'
import Main from '../Main/Main'
import ThemeProvider from '../ThemeProvider/ThemeProvider'
import GlobalStyle from '../GlobalStyle/GlobalStyle'
import Wizard from '../Wizard/Wizard'

function App () {
  return (
    <Main>
      <ThemeProvider>
        <GlobalStyle />
        <Wizard />
      </ThemeProvider>
    </Main>
  )
}

export default App
