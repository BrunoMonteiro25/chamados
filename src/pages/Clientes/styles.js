import styled from 'styled-components'

export const Container = styled.div`
  max-width: 110rem;
  margin: 50px auto 0 auto;
  display: flex;
  gap: 30px;

  @media screen and (max-width: 615px) {
    gap: 0px;
  }
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

  .input-cnpj {
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

    :focus {
      border: 2px solid #6f74c6;
    }

    ::selection {
      background-color: #6f74c6;
    }
  }

  .buttonNovo,
  .buttonEdit,
  .buttonDelete {
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

  .buttonEdit {
    background-color: #696fbe;

    &:hover {
      background-color: #6f74c6;
    }
  }

  .buttonDelete {
    background-color: #c22a16;
    margin-top: -5px;

    &:hover {
      background-color: #cc2c17;
    }
  }

  .button-icon {
    width: 24px;
    height: 24px;
  }

  .loader {
    display: flex;
    align-items: center;
  }

  .loader-circle {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 3px solid #ccc;
    border-top-color: #fff;
    animation: loader-spin 1s linear infinite;
    margin-right: 8px;
  }

  @keyframes loader-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 967px) {
    width: 380px;
  }

  @media screen and (max-width: 615px) {
    width: 250px;
  }
`
