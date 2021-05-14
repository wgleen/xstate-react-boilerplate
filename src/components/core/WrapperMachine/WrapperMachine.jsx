import React from 'react'
import PropTypes from 'prop-types'
import { MainProvider } from '../Main/mainContext'
import * as routerMachine from '../../../lib/routerMachine'
import * as config from '../../../config'

function Main ({
  children,
  machine,
  machineProvider: MachineProvider
}) {
  const [state, send, service] = routerMachine.useRouterMachine(
    machine.config,
    machine.options,
    config.routes,
    { devTools: true }
  )

  return (
    <MachineProvider value={{
      service,
      send,
      matches: state.matches
    }}>
      {children}
    </MachineProvider>
  )
}

Main.defaultProps = {
  machineProvider: MainProvider
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ]),
  machine: PropTypes.shape({
    config: PropTypes.shape({}),
    options: PropTypes.shape({})
  }),
  machineProvider: PropTypes.elementType
}

export default Main
