import { assign } from 'xstate'
import * as integration from '../../integration'
import * as adapters from '../../adapters'

// Guards

export const isGoodReview = (ctx, e) => {
  return ctx.movie && ctx.movie.universe === e.value
}

// Actions

export const receiveUniverse = assign({ universe: (_, e) => e.value })

export const receiveMovies = assign({ movies: (_, e) => e.data })

export const receiveMovie = assign({ movie: (_, e) => e.value })

export const receiveReviews = assign({ reviews: (_, e) => e.data })

export const receiveReview = assign({ review: (_, e) => e.value })

export const clearReview = assign({
  review: null,
  movies: [],
  movie: null,
  universe: null
})

// Services

export const fetchReviews = () => integration.resources.reviews.requests.fetchReviews({ responseAdapter: adapters.resources.reviews.receiveReviews })

export const submitReview = (ctx) => integration.resources.reviews.requests.submitReview(ctx.review)
