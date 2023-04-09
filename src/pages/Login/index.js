import React from 'react'
import {
  Container,
  TopDiv,
  LoginForm,
  BottomDiv,
  Label,
  Input,
  NavLink,
  NewAccount,
} from './styles'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/nova-conta')
  }

  return (
    <Container>
      <TopDiv>ENTRAR</TopDiv>
      <BottomDiv>
        <LoginForm>
          <Label>Email</Label>
          <Input type="text" placeholder="email@email.com" />
          <Label style={{ marginTop: '20px' }}>Senha</Label>
          <Input type="password" placeholder="************" />
          <NavLink to="/">Acessar</NavLink>
          <NewAccount onClick={handleClick}>
            <p>Criar uma conta</p>
          </NewAccount>
        </LoginForm>
      </BottomDiv>
    </Container>
  )
}

export default Login
