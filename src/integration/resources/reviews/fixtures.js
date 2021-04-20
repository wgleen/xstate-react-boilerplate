export const reviewsListSuccess = {
  status: 200,
  data: [
    {
      id: 1,
      content: 'I hate this movie!',
      movies: {
        id: 1,
        title: 'Batman vs Superman',
        universe: 'dc'
      }
    },
    {
      id: 2,
      content: 'Awesome movie!',
      movies: {
        id: 2,
        title: 'Avengers Endgame',
        universe: 'marvel'
      }
    }
  ]
}

export const reviewsCreateSuccess = {
  status: 200,
  message: 'Create review with success'
}
