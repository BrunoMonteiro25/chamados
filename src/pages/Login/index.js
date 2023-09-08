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

import { toast } from 'react-toastify'
import Head from '../../components/Head'

const Login = ({ handleLogin }) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [emailError, setEmailError] = useState('')

  const [emailEmpty, setEmailEmpty] = useState(false)
  const [senhaEmpty, setSenhaEmpty] = useState(false)

  const [loginError, setLoginError] = useState('')

  function handleClick() {
    navigate('/nova-conta')
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (email === '') {
      setEmailEmpty(true)
    } else {
      setEmailEmpty(false)
    }

    if (senha === '') {
      setSenhaEmpty(true)
    } else {
      setSenhaEmpty(false)
    }

    if (email !== '' && senha !== '') {
      try {
        const response = await axios.post(
          'https://api-sistema-chamados.onrender.com/login',
          {
            email,
            senha,
          },
        )

        localStorage.setItem('chave_secreta_do_token', response.data.token)
        handleLogin()

        toast.success('Logado com Sucesso!', {
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })

        navigate('/')
      } catch (err) {
        setLoginError('Email ou senha incorretos. Tente novamente.')
      }
    }
  }

  function handleEmailChange(event) {
    const { value } = event.target

    // regex email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (value === '') {
      setEmailError('')
      setEmailEmpty(true)
    } else if (!regex.test(value)) {
      setEmailError('Digite um email válido!')
      setEmailEmpty(false)
    } else {
      setEmailError('')
      setEmailEmpty(false)
    }

    setEmail(value)
  }

  function handleSenhaChange(event) {
    setSenha(event.target.value)
    setSenhaEmpty(false)
  }

  return (
    <Container>
      <Head title="Entrar - " />
      <TopDiv>ENTRAR</TopDiv>
      <BottomDiv>
        <LoginForm onSubmit={handleSubmit}>
          <p
            style={{
              color: '#f1341b',
              textAlign: 'center',
              fontSize: '20px',
              marginBottom: '20px',
            }}
          >
            {loginError}
          </p>

          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            placeholder="email@email.com"
            value={email}
            onChange={handleEmailChange}
          />
          {emailEmpty && (
            <p style={{ color: '#f1341b' }}>Campo obrigatório *</p>
          )}
          {emailError && <p style={{ color: '#f1341b' }}>{emailError}</p>}

          <Label style={{ marginTop: '20px' }}>Senha</Label>
          <Input
            type="password"
            name="senha"
            placeholder="************"
            value={senha}
            onChange={handleSenhaChange}
          />
          {senhaEmpty && (
            <p style={{ color: '#f1341b' }}>Campo obrigatório *</p>
          )}

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
