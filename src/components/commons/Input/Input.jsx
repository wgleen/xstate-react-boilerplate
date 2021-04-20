import React from 'react'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'
import { Input as MaterialInput } from '@material-ui/core/'

function Input ({
  control,
  name,
  ...props
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <MaterialInput {...props} {...field} />}
    />
  )
}

Input.propTypes = {
  control: PropTypes.any,
  name: PropTypes.string
}

export default Input
