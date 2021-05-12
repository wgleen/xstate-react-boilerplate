import React from 'react'
import PropTypes from 'prop-types'
import * as machines from '../../../machines'
import * as routerMachine from '../../../lib/routerMachine'
import * as config from '../../../config'
import { MainProvider } from './mainContext'

function Main ({ children }) {
  const [state, send, service] = routerMachine.useRouterMachine(
    machines.reviews.reviewsConfig,
    machines.reviews.reviewsOptions,
    config.routes,
    { devTools: true }
  )

  return (
    <MainProvider value={{
      service,
      send,
      matches: state.matches
    }}>
      {children}
    </MainProvider>
  )
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ])
}

export default Main
