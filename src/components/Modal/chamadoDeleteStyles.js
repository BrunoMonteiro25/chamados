import styled from 'styled-components'

export const ModalDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
  position: fixed;
`

export const Container = styled.div`
  margin-top: 250px;
  background-color: #eee;
  color: #17181f;
  width: 550px;
  height: max-content;
  border-radius: 6px;
  position: relative;
  padding-bottom: 15px;

  @media (max-width: 615px) {
    width: 350px;
  }

  @media (max-height: 525px) {
    margin-top: 130px;
  }

  .fechar {
    display: flex;
    right: calc(-100% + 52px);
    border-radius: 50%;
    background-color: #eee;
    border: none;
    outline: none;
    position: relative;
    margin-top: 20px;
    cursor: pointer;
    z-index: 100;

    :hover {
      background-color: #fff;
    }
  }
`

export const Content = styled.div`
  display: flex;
  margin: 20px 21px 5px 20px;
  flex-direction: column;

  .titulo {
    font-weight: 500;
    display: flex;
    align-items: flex-start;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: #17181f;
    margin-bottom: 10px;
  }

  .containerButton {
    display: flex;
    gap: 15px;
    justify-content: flex-end;
  }

  button {
    padding: 10px 20px;
    width: max-content;
    border-radius: 6px;
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
    margin-top: 40px;
  }

  .cancelar {
    background-color: #d04735;

    :hover {
      background-color: #d34c3b;
    }
  }

  .excluir {
    background-color: #0d830b;

    :hover {
      background-color: #0e870b;
    }
  }
`
