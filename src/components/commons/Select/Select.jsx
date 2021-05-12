import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180
  }
}))

function ReviewsCreateSelectUniverse ({
  onChange,
  id,
  label,
  options
}) {
  const classes = useStyles()

  const handleChange = useCallback(e => {
    if (!onChange) return

    const value = options.find((option) => option.value === e.target.value)

    if (!value) return

    return onChange(value)
  }, [onChange])

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id={id}>{label}</InputLabel>

      <Select
        id={id}
        labelId={id}
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={`${id}-${option.name}`} value={option.value}>{option.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

ReviewsCreateSelectUniverse.defaultProps = {
  options: []
}

ReviewsCreateSelectUniverse.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  )
}

export default ReviewsCreateSelectUniverse
