import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Form from '../commons/Form/Form'
import Input from '../commons/Input/Input'

function ReviewsCreateGood ({
  onSubmit
}) {
  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: 'firstError"',
    shouldFocusError: true,
    shouldUnregister: false
  })

  return (
    <Box>
      <h1>Make your good review</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input multiline disabled control={control} name="review" defaultValue="Awesome movie!" />

        <Button type="submit">Create review</Button>
      </Form>
    </Box>
  )
}

ReviewsCreateGood.propTypes = {
  onSubmit: PropTypes.func
}

export default ReviewsCreateGood
