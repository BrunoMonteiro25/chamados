import React, { useState } from 'react'
import {
  Container,
  TopDiv,
  LoginForm,
  BottomDiv,
  Button,
  NewAccount,
} from './styles'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Label from '../../components/Label'
import axios from 'axios'

import { toast } from 'react-toastify'

const Cadastrar = () => {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [emailError, setEmailError] = useState('')

  const [nomeEmpty, setNomeEmpty] = useState(false)
  const [emailEmpty, setEmailEmpty] = useState(false)
  const [senhaEmpty, setSenhaEmpty] = useState(false)

  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (nome === '') {
      setNomeEmpty(true)
    } else {
      setNomeEmpty(false)
    }

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

    if (nome !== '' && email !== '' && senha !== '') {
      try {
        const response = await axios.post('http://localhost:8000/usuarios', {
          nome,
          email,
          senha,
        })

        toast.success('Cadastro Realizado !', {
          position: 'bottom-right',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
        console.log(response.data)
        navigate('/login')
      } catch (err) {
        if (err.response.status === 400) {
          setErrorMsg('Email já cadastrado !')
        } else {
          console.log(err)
        }
      }
    }
  }

  function handleClick() {
    navigate('/login')
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

  return (
    <Container>
      <TopDiv>CADASTRAR-SE</TopDiv>
      <BottomDiv>
        <LoginForm onSubmit={handleSubmit}>
          {errorMsg !== undefined && (
            <p
              style={{
                color: '#f1341b',
                textAlign: 'center',
                fontSize: '20px',
                marginBottom: '20px',
              }}
            >
              {errorMsg}
            </p>
          )}
          <Label>Nome</Label>
          <Input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) =>
              setNome(
                e.target.value
                  .toLowerCase()
                  .split(' ')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' '),
              )
            }
          />
          {nomeEmpty && <p style={{ color: '#f1341b' }}>Campo obrigatório *</p>}

          <Label style={{ marginTop: '20px' }}>Email</Label>
          <Input
            type="text"
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
            placeholder="************"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {senhaEmpty && (
            <p style={{ color: '#f1341b' }}>Campo obrigatório *</p>
          )}

          <Button type="submit">Cadastrar</Button>

          <NewAccount onClick={handleClick}>
            <p>Já tem uma conta? Entre</p>
          </NewAccount>
        </LoginForm>
      </BottomDiv>
    </Container>
  )
}

export default Cadastrar
