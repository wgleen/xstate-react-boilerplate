import React, { useContext } from 'react'
import { useSelector } from '@xstate/react'
import MainContext from '../Main/mainContext'
import ReviewsIndex from '../../pages/ReviewsIndex/ReviewsIndex'
import ReviewsCreateSelectUniverse from '../../pages/ReviewsCreateSelectUniverse/ReviewsCreateSelectUniverse'
import ReviewsCreateSelectMovie from '../../pages/ReviewsCreateSelectMovie/ReviewsCreateSelectMovie'
import ReviewsCreateGood from '../../pages/ReviewsCreateGood/ReviewsCreateGood'
import ReviewsCreateBad from '../../pages/ReviewsCreateBad/ReviewsCreateBad'
import ReviewsCreateThanks from '../../pages/ReviewsCreateThanks/ReviewsCreateThanks'

function Wizard () {
  const context = useContext(MainContext)

  const { matches } = useSelector(context.service, (state) => state)

  return (
    <>
      {matches('reviews') && (
        <ReviewsIndex />
      )}

      {matches('movies') && (
        <ReviewsCreateSelectMovie />
      )}

      {matches('universe') && (
        <ReviewsCreateSelectUniverse />
      )}

      {matches('goodReview') && (
        <ReviewsCreateGood />
      )}

      {matches('badReview') && (
        <ReviewsCreateBad />
      )}

      {matches('thanks') && (
        <ReviewsCreateThanks />
      )}
    </>
  )
}

export default Wizard
