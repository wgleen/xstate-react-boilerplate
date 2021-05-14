import * as machines from '../../src/machines'

describe('components/pages/ReviewsIndex', () => {
  const testWrapper = createTestWrapper(
    machines.reviews,
    {
      reviews: async ({ findByText }) => {
        findByText('Reviews List').should('exist')

        findByText('I hate this movie!').should('exist')
        findByText('Batman vs Superman').should('exist')

        findByText('Awesome movie!').should('exist')
        findByText('Avengers Endgame').should('exist')
      }
    },
    {
      ON_CREATE_REVIEWS: {
        exec: ({ findByText }) => {
          findByText('New review').click()
        }
      }
    }
  )

  testWrapper.testPlans.forEach(plan => {
    describe(plan.description, () => {
      plan.paths.forEach(path => {
        it(path.description, () => {
          return cy.visit('/reviews').then(() => {
            return path.test(cy)
          })
        })
      })
    })
  })
})
