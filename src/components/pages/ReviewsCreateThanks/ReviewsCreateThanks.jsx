import React, { useContext, useCallback } from 'react'
import MainContext from '../../core/Main/mainContext'
import DefaultLayout from '../../commons/Layout/DefaultLayout'
import Button from '../../commons/Button/Button'

function ReviewsCreateThanks () {
  const { send } = useContext(MainContext)

  const onBack = useCallback(() => send('ON_BACK'))

  return (
    <DefaultLayout>
      <h1>Thanks for rate</h1>

      <Button color="default" onClick={onBack}>Back to reviews list</Button>
    </DefaultLayout>
  )
}

export default ReviewsCreateThanks
