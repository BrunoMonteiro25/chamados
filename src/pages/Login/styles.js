import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* margin-top: 60px; */
`

export const TopDiv = styled.div`
  width: 616px;
  height: 148px;
  background-color: #696fbe;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 48px;
  border-radius: 23px 23px 0 0;
  letter-spacing: 5px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  box-shadow: 5px -5px 15px rgba(0, 0, 0, 0.5),
    -5px -5px 15px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 632px) {
    width: 400px;
  }

  @media screen and (max-width: 410px) {
    width: 330px;
  }
`

export const BottomDiv = styled.div`
  width: 616px;
  height: max-content;
  background-color: #1e203c;
  display: flex;
  justify-content: center;
  border-radius: 0 0 23px 23px;
  padding-bottom: 30px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 632px) {
    width: 400px;
  }

  @media screen and (max-width: 410px) {
    width: 330px;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 30px;
  font-family: 'Poppins', sans-serif;

  @media screen and (max-width: 632px) {
    width: 300px;
  }

  @media screen and (max-width: 410px) {
    width: 250px;
  }
`

export const Button = styled.button`
  height: 48px;
  width: 500px;
  background-color: #696fbe;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background-color: #6f74c6;
  }

  @media screen and (max-width: 632px) {
    width: 300px;
  }

  @media screen and (max-width: 410px) {
    width: 250px;
  }
`

export const NewAccount = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  p {
    color: #fff;
    font-size: 16px;
    text-decoration: underline;
    cursor: pointer;
  }

  &:hover {
    opacity: 0.9;
  }
`
