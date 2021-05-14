import { Machine, assign } from 'xstate'
import * as domain from '../domain'

export const config = {
  id: 'ReviewsMachine',
  initial: 'fetchingReviews',
  context: {
    reviews: [],
    review: null,
    movies: [],
    movie: null,
    universe: null
  },
  states: {
    fetchingReviews: {
      invoke: {
        id: 'fetchingReviews',
        src: 'fetchReviews',
        onDone: {
          target: 'reviews',
          actions: 'receiveReviews'
        }
      }
    },
    reviews: {
      on: {
        ON_CREATE_REVIEWS: {
          target: 'fetchingMovies'
        }
      }
    },
    fetchingMovies: {
      invoke: {
        id: 'fetchingMovies',
        src: 'fetchMovies',
        onDone: {
          target: 'movies',
          actions: 'receiveMovies'
        }
      }
    },
    movies: {
      on: {
        ON_SELECT_MOVIE: {
          target: 'universe',
          actions: 'receiveMovie'
        }
      }
    },
    universe: {
      on: {
        ON_SELECT_UNIVERSE: [
          {
            target: 'goodReview',
            cond: 'isGoodReview',
            actions: 'receiveUniverse'
          },
          {
            target: 'badReview',
            actions: 'receiveUniverse'
          }
        ]
      }
    },
    goodReview: {
      on: {
        ON_SUBMIT_REVIEW: {
          target: 'submitingReview',
          actions: 'receiveReview'
        }
      }
    },
    badReview: {
      on: {
        ON_SUBMIT_REVIEW: {
          target: 'submitingReview',
          actions: 'receiveReview'
        }
      }
    },
    submitingReview: {
      invoke: {
        id: 'submitingReview',
        src: 'submitReview',
        onDone: {
          target: 'thanks'
        }
      }
    },
    thanks: {
      on: {
        ON_BACK: {
          target: 'fetchingReviews',
          actions: 'clearReview'
        }
      }
    }
  }
}

export const options = {
  guards: {
    isGoodReview: (ctx, e) => domain.resources.reviews.isGoodReview(ctx.movie, e.value)
  },
  actions: {
    receiveUniverse: assign({ universe: (_, e) => e.value }),
    receiveMovies: assign({ movies: (_, e) => e.data }),
    receiveMovie: assign({ movie: (_, e) => e.value }),
    receiveReviews: assign({ reviews: (_, e) => e.data }),
    receiveReview: assign({ review: (_, e) => e.value }),
    clearReview: assign({
      review: null,
      movies: [],
      movie: null,
      universe: null
    })
  },
  services: {
    fetchReviews: () => domain.resources.reviews.fetchReviews,
    fetchMovies: () => domain.resources.movies.fetchMovies,
    submitReview: (ctx) => {
      const {
        review,
        movie,
        universe
      } = ctx

      return domain.resources.reviews.submitReview({
        review,
        movie,
        universe
      })
    }
  }
}

export const reviewsMachine = Machine(config, options)
