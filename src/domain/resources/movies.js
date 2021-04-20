import * as integration from '../../integration'
import * as adapters from '../../adapters'

// Services

export const fetchMovies = () => integration.resources.movies.requests.fetchMovies({ responseAdapter: adapters.resources.movies.receiveMovies })
