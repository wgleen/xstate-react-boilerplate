export const receiveMovie = (data = {}) => ({
  id: data.id,
  title: data.movieTitle,
  universe: data.movieUniverse
})

export const receiveMovies = (data = []) => (
  data.map(receiveMovie)
)
