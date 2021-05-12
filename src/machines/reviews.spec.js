import { interpret } from 'xstate'
import * as reviews from './reviews'

describe('machines/reviews', () => {
  it('should reach "fetchingReviews" has initial state', () => {
    expect(reviews.reviewsMachine.initialState.matches('fetchingReviews')).toBeTrue()
  })

  it('should eventually reach "reviews" given "fetchingReviews" service success', (done) => {
    const response = [
      {
        id: 1,
        review: 'Best movie!',
        movie: 'Movie Title One',
        universe: 'Movie universe one'
      }
    ]

    const reviewsMachineMock = reviews.reviewsMachine.withConfig({
      services: {
        fetchReviews: () => Promise.resolve(response)
      }
    })

    const fetchingReviews = interpret(reviewsMachineMock)
      .onTransition((state) => {
        if (state.matches('reviews')) {
          expect(state.context.reviews).toEqual(response)

          done()
        }
      })

    fetchingReviews.start()
  })

  it('should reach "fetchingMovies" given "reviews" when the "ON_CREATE_REVIEWS" event occurs', () => {
    const state = reviews.reviewsMachine.transition('reviews', { type: 'ON_CREATE_REVIEWS' })

    expect(state.matches('fetchingMovies')).toBeTruthy()
  })

  it('should eventually reach "movies" given "fetchingMovies" service success', (done) => {
    const response = [
      {
        id: 1,
        title: 'Batman vs Superman',
        universe: 'dc'
      }
    ]

    const reviewsMachineMock = reviews.reviewsMachine.withConfig({
      services: {
        fetchReviews: () => Promise.resolve({}),
        fetchMovies: () => Promise.resolve(response)
      }
    })

    const fetchingMovies = interpret(reviewsMachineMock)
      .onTransition((state) => {
        if (state.matches('reviews')) {
          fetchingMovies.send({ type: 'ON_CREATE_REVIEWS' })
        }

        if (state.matches('movies')) {
          expect(state.context.movies).toEqual(response)

          done()
        }
      })

    fetchingMovies.start()
  })

  it('should reach "universe" and persist movie given "movies" when the "ON_SELECT_MOVIE" event occurs', () => {
    const movie = {
      id: 1,
      title: 'Batman vs Superman',
      universe: 'dc'
    }

    const state = reviews.reviewsMachine.transition('movies', { type: 'ON_SELECT_MOVIE', value: movie })

    expect(state.matches('universe')).toBeTruthy()
    expect(state.context.movie).toEqual(movie)
  })

  it('should reach "goodReview" and persist universe given "universe" when the "ON_SELECT_UNIVERSE" event occurs and current movie universe is equal to current universe', () => {
    const universe = 'dc'

    const movie = {
      id: 1,
      title: 'Batman vs Superman',
      universe
    }

    const reviewsMachineMock = reviews.reviewsMachine.withContext({
      movie
    })

    const state = reviewsMachineMock.transition('universe', { type: 'ON_SELECT_UNIVERSE', value: universe })

    expect(state.matches('goodReview')).toBeTruthy()
    expect(state.context.universe).toEqual(universe)
  })

  it('should reach "badReview" and persist universe given "universe" when the "ON_SELECT_UNIVERSE" event occurs and current movie universe is not equal to current universe', () => {
    const universe = 'dc'

    const movie = {
      id: 1,
      title: 'Batman vs Superman',
      universe: 'marvel'
    }

    const reviewsMachineMock = reviews.reviewsMachine.withContext({
      movie
    })

    const state = reviewsMachineMock.transition('universe', { type: 'ON_SELECT_UNIVERSE', value: universe })

    expect(state.matches('badReview')).toBeTruthy()
    expect(state.context.universe).toEqual(universe)
  })

  it('should reach "submitingReview" and persist review given "goodReview" when the "ON_SUBMIT_REVIEW" event occurs', () => {
    const review = 'Great movie!'

    const state = reviews.reviewsMachine.transition('goodReview', { type: 'ON_SUBMIT_REVIEW', value: review })

    expect(state.matches('submitingReview')).toBeTruthy()
    expect(state.context.review).toEqual(review)
  })

  it('should reach "submitingReview" and persist review given "badReview" when the "ON_SUBMIT_REVIEW" event occurs', () => {
    const review = 'Bad movie!'

    const state = reviews.reviewsMachine.transition('badReview', { type: 'ON_SUBMIT_REVIEW', value: review })

    expect(state.matches('submitingReview')).toBeTruthy()
    expect(state.context.review).toEqual(review)
  })

  it('should eventually reach "thanks" given "submitingReview" service success', (done) => {
    const movie = {
      id: 1,
      title: 'Batman vs Superman',
      universe: 'dc'
    }

    const review = 'Bad movie!'

    const reviewsMachineMock = reviews.reviewsMachine
      .withContext({
        movie,
        review
      })
      .withConfig({
        services: {
          fetchReviews: () => Promise.resolve({}),
          fetchMovies: () => Promise.resolve({}),
          submitReview: () => Promise.resolve({})
        }
      })

    const fetchingMovies = interpret(reviewsMachineMock)
      .onTransition((state) => {
        if (state.matches('reviews')) {
          fetchingMovies.send({ type: 'ON_CREATE_REVIEWS' })
        }

        if (state.matches('movies')) {
          fetchingMovies.send({ type: 'ON_SELECT_MOVIE' })
        }

        if (state.matches('universe')) {
          fetchingMovies.send({ type: 'ON_SELECT_UNIVERSE' })
        }

        if (state.matches('goodReview')) {
          fetchingMovies.send({ type: 'ON_SUBMIT_REVIEW' })
        }

        if (state.matches('thanks')) {
          done()
        }
      })

    fetchingMovies.start()
  })
})
