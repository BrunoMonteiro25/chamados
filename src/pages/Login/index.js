import React, { useState } from 'react'
import {
  Container,
  TopDiv,
  LoginForm,
  BottomDiv,
  NewAccount,
  Button,
} from './styles'

import { useNavigate } from 'react-router-dom'

import Input from '../../components/Input'
import Label from '../../components/Label'

import axios from 'axios'

const Login = ({ handleLogin }) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function handleClick() {
    navigate('/nova-conta')
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await axios.post('http://localhost:8000/login', {
        email,
        senha,
      })

      localStorage.setItem('chave_secreta_do_token', response.data.token)
      handleLogin()
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <TopDiv>ENTRAR</TopDiv>
      <BottomDiv>
        <LoginForm onSubmit={handleSubmit}>
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Label style={{ marginTop: '20px' }}>Senha</Label>
          <Input
            type="password"
            name="senha"
            placeholder="************"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <Button type="submit">Acessar</Button>
          <NewAccount onClick={handleClick}>
            <p>Criar uma conta</p>
          </NewAccount>
        </LoginForm>
      </BottomDiv>
    </Container>
  )
}

export default Login
