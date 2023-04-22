import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
  height: 50px;
  padding-left: 20px;
  font-size: 16px;
  border: none;
  margin-bottom: 5px;
  border-radius: 8px;
  letter-spacing: 1px;
  background-color: #44465f;
  color: #fff;
  outline: none !important;

  ::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #ccc;
  }

  /* :hover {
    border: 2px solid #6f74c6;
  } */

  :focus {
    border: 2px solid #6f74c6;
  }

  ::selection {
    background-color: #6f74c6;
  }
`

const Input = ({ type, placeholder, name, value, onChange }) => {
  return (
    <InputStyled
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
