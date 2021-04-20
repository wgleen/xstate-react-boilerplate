import { Machine } from 'xstate'
import * as config from '../config'
import * as domain from '../domain'

export const reviewsSchema = {
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
      meta: {
        path: config.routes.reviewsIndex.path
      },
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
      meta: {
        path: config.routes.reviewsCreateSelectMovie.path
      },
      on: {
        ON_SELECT_MOVIE: {
          target: 'universe',
          actions: 'receiveMovie'
        }
      }
    },
    universe: {
      meta: {
        path: config.routes.reviewsCreateSelectUniverse.path
      },
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
      meta: {
        path: config.routes.reviewsCreateGood.path
      },
      on: {
        ON_SUBMIT_REVIEW: {
          target: 'submitingReview',
          actions: 'receiveReview'
        }
      }
    },
    badReview: {
      meta: {
        path: config.routes.reviewsCreateBad.path
      },
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
      meta: {
        path: config.routes.reviewsCreateThanks.path
      },
      on: {
        ON_BACK: {
          target: 'fetchingReviews',
          actions: 'clearReview'
        }
      }
    }
  }
}

export const reviewsConfig = {
  guards: {
    isGoodReview: domain.resources.reviews.isGoodReview
  },
  actions: {
    receiveUniverse: domain.resources.reviews.receiveUniverse,
    receiveMovies: domain.resources.reviews.receiveMovies,
    receiveMovie: domain.resources.reviews.receiveMovie,
    receiveReviews: domain.resources.reviews.receiveReviews,
    receiveReview: domain.resources.reviews.receiveReview,
    clearReview: domain.resources.reviews.clearReview
  },
  services: {
    fetchReviews: domain.resources.reviews.fetchReviews,
    fetchMovies: domain.resources.movies.fetchMovies,
    submitReview: domain.resources.reviews.submitReview
  }
}

export const reviewsMachine = Machine(reviewsSchema, reviewsConfig)
