import React, { useContext, useCallback } from 'react'
import MainContext from '../../core/Main/mainContext'
import DefaultLayout from '../../commons/Layout/DefaultLayout'
import Row from '../../commons/Row/Row'
import Col from '../../commons/Col/Col'
import Button from '../../commons/Button/Button'

function ReviewsCreateSelectUniverse () {
  const { send } = useContext(MainContext)

  const onSelectUniverse = useCallback((universe) => send('ON_SELECT_UNIVERSE', { value: universe }))

  return (
    <DefaultLayout>
      <h1>Select a Universe</h1>

      <Row>
        <Col>
          <Button color="primary" onClick={() => onSelectUniverse('marvel')}>Marvel</Button>
        </Col>

        <Col>
          <Button color="secondary" onClick={() => onSelectUniverse('dc')}>DC</Button>
        </Col>
      </Row>
    </DefaultLayout>
  )
}

export default ReviewsCreateSelectUniverse
