import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { DataGrid as MaterialDataGrid } from '@material-ui/data-grid'

export const S = {
  Table: styled.div`
    height: 400px;
    background-color: #FFFFFF;
  `
}
function Table ({
  headers,
  items
}) {
  return (
    <S.Table>
      <MaterialDataGrid
        columns={headers}
        rows={items}
        pageSize={5}
      />
    </S.Table>
  )
}

Table.defaultProps = {
  headers: [],
  items: []
}

Table.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      headerName: PropTypes.string,
      width: PropTypes.number
    })
  ),
  items: PropTypes.arrayOf(
    PropTypes.shape({})
  )
}

export default Table
