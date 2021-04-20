import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'
import * as config from '../../../config'
import RouterRedirect from '../RouterRedirect/RouterRedirect'
import ReviewsIndex from '../../pages/ReviewsIndex'
import ReviewsCreateSelectUniverse from '../../pages/ReviewsCreateSelectUniverse'
import ReviewsCreateSelectMovie from '../../pages/ReviewsCreateSelectMovie'
import ReviewsCreateGood from '../../pages/ReviewsCreateGood'
import ReviewsCreateBad from '../../pages/ReviewsCreateBad'
import ReviewsCreateThanks from '../../pages/ReviewsCreateThanks'

function Routes ({
  onReviewCreate,
  onSelectMovie,
  onSelectUniverse,
  onSubmit,
  onBack,
  state
}) {
  return (
    <BrowserRouter>
      <RouterRedirect state={state} />

      <Route
        exact
        path={config.routes.reviewsIndex.path}
        component={() => (
          <ReviewsIndex reviews={state.context.reviews} onReviewCreate={onReviewCreate} />
        )}
      />

      <Route
        exact
        path={config.routes.reviewsCreateSelectMovie.path}
        component={() => (
          <ReviewsCreateSelectMovie movies={state.context.movies} onSelectMovie={onSelectMovie} />
        )}
      />

      <Route
        exact
        path={config.routes.reviewsCreateSelectUniverse.path}
        component={() => (
          <ReviewsCreateSelectUniverse onSelectUniverse={onSelectUniverse} />
        )}
      />

      <Route
        exact
        path={config.routes.reviewsCreateGood.path}
        component={() => (
          <ReviewsCreateGood onSubmit={onSubmit} />
        )}
      />

      <Route
        exact
        path={config.routes.reviewsCreateBad.path}
        component={() => (
          <ReviewsCreateBad onSubmit={onSubmit} />
        )}
      />

      <Route
        exact
        path={config.routes.reviewsCreateThanks.path}
        component={() => (
          <ReviewsCreateThanks onBack={onBack} />
        )}
      />
    </BrowserRouter>
  )
}

Routes.propTypes = {
  onReviewCreate: PropTypes.func,
  onSelectMovie: PropTypes.func,
  onSelectUniverse: PropTypes.func,
  onSubmit: PropTypes.func,
  onBack: PropTypes.func,
  state: PropTypes.shape({
    meta: PropTypes.shape({
      path: PropTypes.string
    }),
    context: PropTypes.shape({

      reviews: PropTypes.arrayOf(
        PropTypes.shape({
          content: PropTypes.string
        })
      ),
      movies: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          id: PropTypes.number
        })
      )
    })
  })
}

export default Routes
