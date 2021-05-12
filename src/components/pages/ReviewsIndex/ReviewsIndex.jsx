import React, { useContext, useCallback, useMemo } from 'react'
import { useSelector } from '@xstate/react'
import MainContext from '../../core/Main/mainContext'
import DefaultLayout from '../../commons/Layout/DefaultLayout'
import Row from '../../commons/Row/Row'
import Col from '../../commons/Col/Col'
import Table from '../../commons/Table/Table'
import Button from '../../commons/Button/Button'

function ReviewsIndex () {
  const { service, send } = useContext(MainContext)

  const reviews = useSelector(service, ({ context }) => context.reviews)

  const onReviewCreate = useCallback(() => send('ON_CREATE_REVIEWS'))

  const headers = useMemo(() => [
    {
      field: 'id',
      headerName: 'ID',
      width: 70
    },
    {
      field: 'review',
      headerName: 'Review',
      width: 300
    },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 200
    },
    {
      field: 'universe',
      headerName: 'Universe',
      width: 200
    }
  ])

  return (
    <DefaultLayout>
      <h1>Reviews List</h1>

      <Row>
        <Col xs={12}>
          <Table headers={headers} items={reviews} />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Button onClick={onReviewCreate}>New review</Button>
        </Col>
      </Row>
    </DefaultLayout>
  )
}

export default ReviewsIndex
