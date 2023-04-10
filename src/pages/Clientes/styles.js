import styled from 'styled-components'

export const Container = styled.div`
  max-width: 110rem;
  margin: 50px auto 0 auto;
  display: flex;
  gap: 30px;
`

export const New = styled.div`
  background-color: #2b2b4b;
  width: 100%;
  color: #fff;
  padding: 30px 0px 30px 30px;
  font-family: 'Poppins', sans-serif;
  border-radius: 6px;
  height: max-content;

  .title {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 20px;
    margin-bottom: 50px;
    letter-spacing: 1px;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 30px;
  font-family: 'Poppins', sans-serif;

  button {
    padding: 15px;
    width: 187px;
    border-radius: 6px;
    background-color: #0d830b;
    border: none;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    margin-top: 10px;
  }

  @media screen and (max-width: 967px) {
    width: 380px;
  }

  @media screen and (max-width: 615px) {
    width: 250px;
  }
`

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
  letter-spacing: 1px;
  color: #fff;
`

export const Input = styled.input`
  height: 50px;
  padding-left: 20px;
  font-size: 16px;
  border: none;
  margin-bottom: 16px;
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

  :focus {
    border: 2px solid #6f74c6;
  }

  ::selection {
    background-color: #6f74c6;
  }
`
