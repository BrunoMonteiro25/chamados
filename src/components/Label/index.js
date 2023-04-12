import React from 'react'
import styled from 'styled-components'

const LabelStyled = styled.label`
  font-size: 20px;
  margin-bottom: 5px;
  letter-spacing: 1px;
  color: #fff;
`

const Label = ({ children, style }) => {
  return <LabelStyled style={style}>{children}</LabelStyled>
}

export default Label
