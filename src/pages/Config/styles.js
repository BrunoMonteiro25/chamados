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
    margin-bottom: 40px;
    letter-spacing: 1px;
  }
`

export const Image = styled.div`
  border: 8px solid white;
  width: 174px;
  height: 174px;
  border-radius: 50%;
  margin-bottom: 20px;

  .img {
    width: 158px;
    height: 158px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }

  .img:hover {
    opacity: 0.4;
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

  @media screen and (max-width: 967px) {
    width: 380px;
  }

  @media screen and (max-width: 615px) {
    width: 250px;
  }
`
