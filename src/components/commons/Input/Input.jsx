import React from 'react'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'
import MaterialInput from '@material-ui/core/TextField'

function Input ({
  control,
  name,
  ...rest
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <MaterialInput
          {...rest}
          {...field}
          fullWidth
          variant="outlined"
        />
      )}
    />
  )
}

Input.propTypes = {
  control: PropTypes.any,
  name: PropTypes.string
}

export default Input
