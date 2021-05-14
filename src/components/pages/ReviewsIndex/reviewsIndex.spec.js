/* eslint-disable react/react-in-jsx-scope */
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react'
import * as machines from '../../../machines'
import WrapperMachine from '../../core/WrapperMachine/WrapperMachine'
import ThemeProvider from '../../core/ThemeProvider/ThemeProvider'
import ReviewsIndex from './ReviewsIndex'

describe('components/pages/ReviewsIndex', () => {
  const testWrapper = createTestWrapper(
    machines.reviews,
    {
      reviews: async ({ getByText }) => {
        expect(getByText('Reviews List')).toBeInTheDocument()

        await waitFor(() => {
          expect(getByText('I hate this movie!')).toBeInTheDocument()
          expect(getByText('Batman vs Superman')).toBeInTheDocument()

          expect(getByText('Awesome movie!')).toBeInTheDocument()
          expect(getByText('Avengers Endgame')).toBeInTheDocument()
        })
      }
    },
    {
      ON_CREATE_REVIEWS: {
        exec: ({ getByText }) => {
          fireEvent.click(getByText('New review'))
        }
      }
    }
  )

  testWrapper.testPlans.forEach(plan => {
    describe(plan.description, () => {
      afterEach(cleanup)

      plan.paths.forEach(path => {
        it(path.description, () => {
          const rendered = render(
            <WrapperMachine machine={machines.reviews}>
              <ThemeProvider>
                <ReviewsIndex />
              </ThemeProvider>
            </WrapperMachine>
          )
          return path.test(rendered)
        })
      })
    })
  })
})
