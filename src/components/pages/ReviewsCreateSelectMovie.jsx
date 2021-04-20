import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Select from '../commons/Select/Select'

function ReviewsCreateSelectMovie ({
  onSelectMovie,
  movies
}) {
  const options = useMemo(() => movies.map((movie) => ({
    name: movie.title,
    value: movie.id
  })), [movies])

  const onSelect = useCallback((selected) => {
    const selectedMovie = movies.find((movie) => movie.id === selected.value)

    if (!selectedMovie) return

    return onSelectMovie(selectedMovie)
  })

  return (
    <Box>
      <h1>Select movie</h1>

      <Select id="reviewsCreateSelectMovie" label="Select movie" onChange={onSelect} options={options} />
    </Box>
  )
}

ReviewsCreateSelectMovie.defaultProps = {
  movies: []
}

ReviewsCreateSelectMovie.propTypes = {
  onSelectMovie: PropTypes.func,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number
    })
  )
}

export default ReviewsCreateSelectMovie
