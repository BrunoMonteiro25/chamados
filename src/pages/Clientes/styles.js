import styled from 'styled-components'

export const Container = styled.div`
  max-width: 110rem;
  margin: 50px auto 0 auto;
  display: flex;
  gap: 30px;
`

export const Content = styled.div`
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
    gap: 7px;
    font-size: 20px;
    margin-bottom: 50px;
    letter-spacing: 1px;
  }

  .radio-options {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 30px;
  }

  .radio {
    display: flex;
    align-items: center;
    margin-left: -10px;
  }

  .radio label {
    letter-spacing: 1px;
    cursor: pointer;
    font-size: 16px !important;
    margin-left: -4px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 30px;
  font-family: 'Poppins', sans-serif;

  label {
    font-size: 18px !important;
  }

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

    &:hover {
      background-color: #0e870b;
    }
  }

  .edit {
    background-color: #696fbe;

    &:hover {
      background-color: #6f74c6;
    }
  }

  .delete {
    background-color: #c22a16;
    margin-top: -5px;

    &:hover {
      background-color: #cc2c17;
    }
  }

  @media screen and (max-width: 967px) {
    width: 380px;
  }

  @media screen and (max-width: 615px) {
    width: 250px;
  }
`
