import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import { Container, Content, Form } from './styles'

import { ReactComponent as ConfigIcon } from '../../assets/icones/config-user.svg'
import { ReactComponent as Salvar } from '../../assets/icones/salvar.svg'

import Input from '../../components/Input'
import Label from '../../components/Label'

import { toast } from 'react-toastify'

const Config = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState(null)
  const [count, setCount] = useState(0)
  const [emailError, setEmailError] = useState('')

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('chave_secreta_do_token')

      const response = await fetch('http://localhost:8000/usuario-logado', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await response.json()

      setNome(data.nome)
      setEmail(data.email)
      setId(data._id)
    }

    loadUser()
  }, [count])

  async function handleSave(event) {
    event.preventDefault()

    // Validar campo de e-mail
    const emailRegex = /\S+@\S+\.\S+/
    if (!email) {
      setEmailError('Campo obrigatório *')
      return
    } else if (!emailRegex.test(email)) {
      setEmailError('Digite um email válido!')
      return
    }

    try {
      const token = localStorage.getItem('chave_secreta_do_token')
      const response = await axios.put(
        `http://localhost:8000/usuarios/${id}`,
        { nome, email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      )

      setNome(response.data.nome)
      setEmail(response.data.email)
      setCount(count + 1)
      setEmailError('')

      toast.success('Usuário atualizado !', {
        position: 'bottom-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    } catch (error) {
      if (error.response.status === 400) {
        setEmailError('Este email já está em uso.')
      } else {
        console.error('Erro ao atualizar usuário:', error)
      }
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <p className="title">
          <ConfigIcon />
          Meu Perfil
        </p>

        <Form>
          <Label>Nome</Label>
          <Input
            type="text"
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

          <Label style={{ marginTop: '20px' }}>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {emailError !== undefined && (
            <p
              style={{
                color: '#f1341b',
                marginBottom: '10px',
              }}
            >
              {emailError}
            </p>
          )}
          <button onClick={handleSave}>
            <Salvar />
            <p>Salvar</p>
          </button>
        </Form>
      </Content>
    </Container>
  )
}

export default Config
