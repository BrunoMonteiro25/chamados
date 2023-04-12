import React from 'react'
import {
  Container,
  TopDiv,
  LoginForm,
  BottomDiv,
  NavLink,
  NewAccount,
} from './styles'

import { useNavigate } from 'react-router-dom'

import Input from '../../components/Input'
import Label from '../../components/Label'

const Cadastrar = () => {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/login')
  }

  return (
    <Container>
      <TopDiv>CADASTRAR-SE</TopDiv>
      <BottomDiv>
        <LoginForm>
          <Label>Email</Label>
          <Input type="text" placeholder="email@email.com" />

          <Label style={{ marginTop: '20px' }}>Senha</Label>
          <Input type="password" placeholder="************" />

          <Label style={{ marginTop: '20px' }}>Confirmar Senha</Label>
          <Input type="password" placeholder="************" />

          <NavLink to="/">Cadastrar</NavLink>

          <NewAccount onClick={handleClick}>
            <p>Já tem uma conta? Entre</p>
          </NewAccount>
        </LoginForm>
      </BottomDiv>
    </Container>
  )
}

export default Cadastrar
