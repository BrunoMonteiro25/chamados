import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import { Container, Content, Form } from './styles'

import { ReactComponent as ConfigIcon } from '../../assets/icones/config-user.svg'
import { ReactComponent as Salvar } from '../../assets/icones/salvar.svg'

import Input from '../../components/Input'
import Label from '../../components/Label'

import { toast } from 'react-toastify'
import HeaderMobile from '../../components/HeaderMobile'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Head from '../../components/Head'

const Config = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState(null)
  const [count, setCount] = useState(0)
  const [emailError, setEmailError] = useState('')
  const [nomeError, setNomeError] = useState('')

  const [menuIsVisible, setMenuIsVisible] = useState(false)

  const [width, setWidth] = useState(window.innerWidth)

  const [showSkeleton, setShowSkeleton] = useState(true)

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('chave_secreta_do_token')

      const response = await fetch(
        'https://api-sistema-chamados.onrender.com/usuario-logado',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      const data = await response.json()

      // setTimeout(() => {
      //   setNome(data.nome)
      //   setEmail(data.email)
      //   setId(data._id)
      // }, 190000 * 10000000)

      setNome(data.nome)
      setEmail(data.email)
      setId(data._id)
      setShowSkeleton(false)
    }

    loadUser()
  }, [count])

  async function handleSave(event) {
    event.preventDefault()

    // Validar campo de nome
    if (nome.trim() === '') {
      setNomeError('Campo obrigatório *')
      return
    } else {
      setNomeError('')
    }

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
        `https://api-sistema-chamados.onrender.com/usuarios/${id}`,
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
      setNomeError('')
      setEmailError('')

      toast.success('Usuário atualizado!', {
        position: 'top-right',
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

  function handleNomeChange(e) {
    setNome(
      e.target.value
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    )
    setNomeError('')
  }

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container>
      <Head title="Meu Perfil - " />
      <HeaderMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />

      <Header setMenuIsVisible={setMenuIsVisible} />

      <Content>
        <p className="title">
          <ConfigIcon />
          Meu Perfil
        </p>

        <Form>
          <Label>Nome</Label>
          {showSkeleton ? (
            <Skeleton
              baseColor="#5B5E80"
              highlightColor="#6E7199"
              count={1}
              height="50px"
              style={{
                borderRadius: '8px',
                width: width > 967 && '500px',
              }}
            />
          ) : (
            <Input type="text" value={nome} onChange={handleNomeChange} />
          )}

          {nomeError !== '' && (
            <p
              style={{
                color: '#f1341b',
              }}
            >
              {nomeError}
            </p>
          )}

          <Label style={{ marginTop: '20px' }}>Email</Label>
          {showSkeleton ? (
            <Skeleton
              baseColor="#5B5E80"
              highlightColor="#6E7199"
              count={1}
              height="50px"
              style={{
                borderRadius: '8px',
                width: width > 967 && '500px',
              }}
            />
          ) : (
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}

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
