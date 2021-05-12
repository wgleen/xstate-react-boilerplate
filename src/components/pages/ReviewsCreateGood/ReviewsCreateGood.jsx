import React, { useContext, useCallback } from 'react'
import MainContext from '../../core/Main/mainContext'
import { useForm } from 'react-hook-form'
import DefaultLayout from '../../commons/Layout/DefaultLayout'
import Row from '../../commons/Row/Row'
import Col from '../../commons/Col/Col'
import Form from '../../commons/Form/Form'
import Input from '../../commons/Input/Input'
import Button from '../../commons/Button/Button'

function ReviewsCreateGood () {
  const { send } = useContext(MainContext)

  const onSubmit = useCallback(({ review }) => send('ON_SUBMIT_REVIEW', { value: review }))

  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false
  })

  return (
    <DefaultLayout>
      <h1>Make your good review</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              multiline
              rows={4}
              control={control}
              name="review"
              defaultValue="Awesome movie!"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button type="submit">Create good review</Button>
          </Col>
        </Row>
      </Form>
    </DefaultLayout>
  )
}

export default ReviewsCreateGood
