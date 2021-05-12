export const reviewsListSuccess = {
  status: 200,
  data: [
    {
      id: 1,
      review_content: 'I hate this movie!',
      review_movie: {
        id: 1,
        title: 'Batman vs Superman',
        universe: 'dc'
      }
    },
    {
      id: 2,
      review_content: 'Awesome movie!',
      review_movie: {
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
