import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import { Container, Content, Form, TextArea } from './styles'

import { ReactComponent as Novo } from '../../assets/icones/novo-chamado.svg'
import Label from '../../components/Label'

import DropdownAssunto from '../../components/Select/assunto'
import DropdownClientes from '../../components/Select/cliente'

import { common } from '@mui/material/colors'
import Radio from '@mui/material/Radio'

import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'

const NovoChamado = () => {
  const [selectedValue, setSelectedValue] = useState('Em aberto')
  const [clientes, setClientes] = useState([])

  const [clienteSelecionado, setClienteSelecionado] = useState('')
  const [assuntoSelecionado, setAssuntoSelecionado] = useState('')

  const [descricao, setDescricao] = useState('')

  const [resetAssunto, setResetAssunto] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Registrar')
  const [buttonOpacity, setButtonOpacity] = useState(1)

  const navigate = useNavigate()

  async function listarClientes() {
    try {
      const response = await axios.get('http://localhost:8000/clientes')
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    async function carregaClientes() {
      const data = await listarClientes()
      setClientes(data)
    }

    carregaClientes()
  }, [])

  const handleChangeRadio = (event) => {
    setSelectedValue(event.target.value)
  }

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChangeRadio,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  })

  // eslint-disable-next-line no-unused-vars
  const handleClienteSelect = (clienteSelecionado) => {
    setClienteSelecionado(clienteSelecionado)
  }

  // eslint-disable-next-line no-unused-vars
  const handleAssuntoSelect = (assuntoSelecionado) => {
    setAssuntoSelecionado(assuntoSelecionado)
  }

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value)
  }

  // eslint-disable-next-line no-unused-vars
  const handleResetAssunto = () => {
    setAssuntoSelecionado('Suporte')
    setResetAssunto(true)
  }

  const registrarChamado = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setButtonText('Registrando...')
    setButtonOpacity(0.5)

    try {
      const novoChamado = {
        cliente: clienteSelecionado._id,
        assunto: assuntoSelecionado,
        status: selectedValue,
        descricao: descricao,
      }

      await axios.post('http://localhost:8000/chamados', novoChamado)

      setResetAssunto(true)
      setSelectedValue('Em aberto')
      setDescricao('')

      toast.success(`Chamado registrado!`, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })

      // Atualiza a lista de clientes
      const data = await listarClientes()
      setClientes(data)
    } catch (error) {
      console.error('Erro ao registrar novo chamado:', error)
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
        setButtonText('Registrar')
        setButtonOpacity(1)
        setResetAssunto(false)
        navigate('/')
      }, 1200)
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <p className="title">
          <Novo />
          Novo Chamado
        </p>

        <Form>
          <Label>Cliente</Label>
          <DropdownClientes
            clientes={clientes}
            onClienteSelect={setClienteSelecionado}
          />
          {clientes.length === 0 && (
            <p className="cliente">Cadastre um cliente antes de continuar</p>
          )}

          {clientes.length !== 0 && (
            <>
              <Label>Assunto</Label>
              <DropdownAssunto
                onAssuntoSelect={setAssuntoSelecionado}
                resetAssunto={resetAssunto}
              />

              <Label>Status</Label>
              <div className="container">
                <div className="radio">
                  <Radio
                    {...controlProps('Em aberto')}
                    id="option1"
                    color="default"
                    size="small"
                    sx={{
                      color: common['white'],
                      '&.Mui-checked': {
                        color: common['white'],
                      },
                    }}
                  />
                  <label htmlFor="option1">Em aberto</label>
                </div>
                <div className="radio">
                  <Radio
                    {...controlProps('Em atendimento')}
                    id="option2"
                    color="default"
                    size="small"
                    sx={{
                      color: common['white'],
                      '&.Mui-checked': {
                        color: common['white'],
                      },
                    }}
                  />
                  <label htmlFor="option2">Em atendimento</label>
                </div>
              </div>

              <Label>Descrição</Label>
              <TextArea
                placeholder="Descreva seu problema... (opcional)"
                value={descricao}
                onChange={handleDescricaoChange}
              />

              <button
                onClick={registrarChamado}
                disabled={isSubmitting}
                style={{ opacity: buttonOpacity }}
              >
                {buttonText === 'Registrando...' ? (
                  <div className="loader">
                    <div className="loader-circle"></div>
                    <p>Registrando...</p>
                  </div>
                ) : (
                  <>
                    <div className="button-icon">
                      <Novo style={{ width: '24px', height: '24px' }} />
                    </div>
                    <span>{buttonText}</span>
                  </>
                )}
              </button>
            </>
          )}
        </Form>
      </Content>
    </Container>
  )
}

export default NovoChamado
