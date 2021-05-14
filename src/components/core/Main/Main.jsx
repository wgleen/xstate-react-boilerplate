import React from 'react'
import PropTypes from 'prop-types'
import * as machines from '../../../machines'
import WrapperMachine from '../WrapperMachine/WrapperMachine'

function Main ({
  children
}) {
  return (
    <WrapperMachine machine={machines.reviews}>
      {children}
    </WrapperMachine>
  )
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ])
}

export default Main
