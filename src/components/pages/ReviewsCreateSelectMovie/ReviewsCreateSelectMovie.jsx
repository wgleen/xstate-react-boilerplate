import React, { useContext, useCallback, useMemo } from 'react'
import { useSelector } from '@xstate/react'
import MainContext from '../../core/Main/mainContext'
import DefaultLayout from '../../commons/Layout/DefaultLayout'
import Select from '../../commons/Select/Select'

function ReviewsCreateSelectMovie () {
  const { send, service } = useContext(MainContext)

  const movies = useSelector(service, ({ context }) => context.movies)

  const onSelectMovie = useCallback((movie) => send('ON_SELECT_MOVIE', { value: movie }))

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
    <DefaultLayout>
      <h1>Select movie</h1>

      <Select id="reviewsCreateSelectMovie" label="Select movie" onChange={onSelect} options={options} />
    </DefaultLayout>
  )
}

export default ReviewsCreateSelectMovie
