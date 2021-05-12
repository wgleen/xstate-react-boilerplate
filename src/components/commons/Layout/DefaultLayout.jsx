import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const S = {
  DefaultLayout: styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    display: flex;
    justify-content: center;
    flexGrow: 1;
    box-sizing: border-box;
    padding: 24px 12px;
    width: 100vw;
    height: 100vh;
  `,
  Wrapper: styled.div`
    min-height: 400px;
    width: 772px;
  `
}

function DefaultLayout ({
  children
}) {
  return (
    <S.DefaultLayout>
      <S.Wrapper>
        {children}
      </S.Wrapper>
    </S.DefaultLayout>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ])
}

export default DefaultLayout
