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
  width: 650px;
  height: max-content;
  border-radius: 6px;
  position: relative;
  padding-bottom: 20px;

  @media (max-width: 715px) {
    width: 450px;
  }

  @media (max-width: 615px) {
    width: 350px;
  }

  @media (max-width: 415px) {
    width: 280px;
  }

  @media (max-height: 666px) {
    margin-top: 100px;
  }

  @media (max-height: 530px) {
    margin-top: 50px;
  }
`

export const Content = styled.div`
  display: flex;
  margin: 0px 20px;
  width: 610px;
  flex-direction: column;
  margin-top: 20px;

  .titulo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid black; */

    p {
      font-weight: 500;
      color: #17181f;
      font-size: 20px;
      letter-spacing: 1px;
      font-family: 'Poppins', sans-serif;
    }

    .fechar {
      display: flex;
      border-radius: 50%;
      background-color: #eee;
      border: none;
      outline: none;
      cursor: pointer;
      z-index: 100;

      :hover {
        background-color: #fff;
      }
    }
  }

  .detalhes {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    margin-top: 50px;

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      color: #222222;

      span {
        font-size: 16px;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        color: #17181f;
        letter-spacing: 0.5px;
      }
    }
  }

  .desc {
    max-width: 590px;
    margin-top: 15px;
    /* border: 1px solid black; */

    span {
      font-size: 16px;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
      color: #17181f;
      letter-spacing: 0.5px;
      margin-left: -2px;
    }

    p {
      text-align: left;
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      color: #222222;
      margin-left: 2px;
      line-height: 1.4;
    }
  }

  @media (max-width: 715px) {
    width: 410px;
  }

  @media (max-width: 615px) {
    width: 310px;
  }

  @media (max-width: 415px) {
    .titulo {
      width: 240px;
    }
    .desc {
      max-width: 230px !important;
    }
  }
`
