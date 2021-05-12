import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MaterialButton from '@material-ui/core/Button'

const S = {
  Button: styled.div`
    ${({ margin }) => margin && `margin: ${margin}`}
  `
}

function Button ({
  onClick,
  type,
  color,
  margin,
  children
}) {
  return (
    <S.Button margin={margin}>
      <MaterialButton
        variant="contained"
        type={type}
        color={color}
        onClick={onClick}
      >
        {children}
      </MaterialButton>
    </S.Button>
  )
}

Button.defaultProps = {
  type: 'button',
  color: 'primary'
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ])
}

export default Button
