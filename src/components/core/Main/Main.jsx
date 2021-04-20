import React, { useCallback } from 'react'
import { useMachine } from '@xstate/react'
import * as machines from '../../../machines'
import Routes from '../Routes/Routes'

function Main () {
  const [state, send] = useMachine(machines.reviewsMachine, { devTools: true })

  const onReviewCreate = useCallback(() => send('ON_CREATE_REVIEWS'))
  const onSelectMovie = useCallback((movie) => send('ON_SELECT_MOVIE', { value: movie }))
  const onSelectUniverse = useCallback((universe) => send('ON_SELECT_UNIVERSE', { value: universe }))
  const onSubmit = useCallback((review) => send('ON_SUBMIT_REVIEW', { value: review }))
  const onBack = useCallback(() => send('ON_BACK'))

  return (
    <Routes
      onReviewCreate={onReviewCreate}
      onSelectMovie={onSelectMovie}
      onSelectUniverse={onSelectUniverse}
      onSubmit={onSubmit}
      onBack={onBack}
      state={state}
    />
  )
}

export default Main
