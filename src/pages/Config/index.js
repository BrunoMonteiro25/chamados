import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import { Container, Content, Form } from './styles'

import { ReactComponent as ConfigIcon } from '../../assets/icones/config2.svg'
import { ReactComponent as Salvar } from '../../assets/icones/salvar.svg'
// import { ReactComponent as Upload } from '../../assets/icones/upload.svg'

// import Avatar from '../../assets/avatar.jpg'

import Input from '../../components/Input'
import Label from '../../components/Label'

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
          {/* <Image>
            <label htmlFor="avatar">
              <img src={Avatar} alt="foto-perfil" className="img" />
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              className="foto"
            />
            <Upload />
          </Image> */}

          <Label>Nome</Label>
          <Input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
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
