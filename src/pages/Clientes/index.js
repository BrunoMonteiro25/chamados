import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Container, Content, Form } from './styles'

import { ReactComponent as NovoCliente } from '../../assets/icones/clientes-novo.svg'
import { ReactComponent as EditarCliente } from '../../assets/icones/editar.svg'
import { ReactComponent as ExcluirCliente } from '../../assets/icones/delete.svg'
import { ReactComponent as Novo } from '../../assets/icones/novo.svg'

import Header from '../../components/Header'
import Input from '../../components/Input'
import Label from '../../components/Label'
import Dropdown from '../../components/Select'

import { common } from '@mui/material/colors'
import Radio from '@mui/material/Radio'

import InputMask from 'react-input-mask'
import { toast } from 'react-toastify'
import DropdownClientes from '../../components/Select/cliente'

const Clientes = () => {
  const [nome, setNome] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [endereco, setEndereco] = useState('')

  const [selectedValue, setSelectedValue] = useState('novo')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Cadastrar')
  const [buttonTextEdit, setButtonTextEdit] = useState('Atualizar')
  const [buttonOpacity, setButtonOpacity] = useState(1)

  const [nomeError, setNomeError] = useState('')
  const [cnpjError, setCnpjError] = useState('')
  const [cnpjErrorEdit, setCnpjErrorEdit] = useState(null)

  const [clientes, setClientes] = useState([])
  const [clienteSelecionado, setClienteSelecionado] = useState(null)
  const [clienteSelecionadoDelete, setClienteSelecionadoDelete] = useState(null)

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

  function validateCNPJ(cnpj) {
    // eslint-disable-next-line no-useless-escape
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/
    if (!cnpj) {
      return false
    } else if (!cnpjRegex.test(cnpj)) {
      return false
    } else {
      // Realizar validação dos dígitos verificadores
      const cnpjNumbers = cnpj.replace(/\D/g, '')
      const weights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
      const sum = cnpjNumbers
        .slice(0, 12)
        .split('')
        .reduce(
          (acc, value, index) => acc + parseInt(value) * weights[index],
          0,
        )
      const remainder = sum % 11
      const firstDigit = remainder < 2 ? 0 : 11 - remainder

      if (parseInt(cnpjNumbers.charAt(12)) !== firstDigit) {
        return false
      }

      weights.unshift(6)
      const newSum = cnpjNumbers
        .slice(0, 13)
        .split('')
        .reduce(
          (acc, value, index) => acc + parseInt(value) * weights[index],
          0,
        )
      const newRemainder = newSum % 11
      const secondDigit = newRemainder < 2 ? 0 : 11 - newRemainder

      if (parseInt(cnpjNumbers.charAt(13)) !== secondDigit) {
        return false
      }

      return true
    }
  }

  async function cadastrarCliente(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setButtonText('Cadastrando...')
    setButtonOpacity(0.5)

    // Verificando se o campo nome foi preenchido
    if (nome === '') {
      setNomeError('Campo obrigatório *')
      setIsSubmitting(false)
      setButtonText('Cadastrar')
      setButtonOpacity(1)
      return
    }

    // Adicionando validação do CNPJ
    if (!validateCNPJ(cnpj)) {
      setCnpjError('Digite um CNPJ válido!')
      setIsSubmitting(false)
      setButtonText('Cadastrar')
      setButtonOpacity(1)
      return
    }

    try {
      await axios.post('http://localhost:8000/clientes', {
        nome: nome,
        cnpj: cnpj,
        endereco: endereco,
      })

      setNome('')
      setCnpj('')
      setEndereco('')
      setCnpjError(null)
      setNomeError(null)

      toast.success('Cliente Cadastrado !', {
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
    } catch (err) {
      console.error('Erro ao cadastrar cliente:', err)
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
        setButtonText('Cadastrar')
        setButtonOpacity(1)
      }, 1000)
    }
  }

  // eslint-disable-next-line no-unused-vars
  const handleClienteSelect = (clienteSelecionado) => {
    setClienteSelecionado(clienteSelecionado)
  }

  // eslint-disable-next-line no-unused-vars
  const handleClienteSelectDelete = (clienteSelecionadoDelete) => {
    setClienteSelecionadoDelete(clienteSelecionadoDelete)
  }

  const atualizarCliente = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setButtonTextEdit('Atualizando...')
    setButtonOpacity(0.5)

    if (!validateCNPJ(clienteSelecionado.cnpj)) {
      setCnpjErrorEdit('Digite um CNPJ válido!')
      setIsSubmitting(false)
      setButtonTextEdit('Atualizar')
      setButtonOpacity(1)
      return
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.put(
        `http://localhost:8000/clientes/${clienteSelecionado._id}`,
        {
          cnpj: clienteSelecionado.cnpj,
          endereco: clienteSelecionado.endereco,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      setCnpjErrorEdit(null)

      toast.success(`O ${clienteSelecionado.nome} foi atualizado !`, {
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
      // console.log('Cliente atualizado:', response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
        setButtonTextEdit('Atualizar')
        setButtonOpacity(1)
      }, 1000)
    }
  }

  const excluirCliente = async (event) => {
    event.preventDefault()

    try {
      // eslint-disable-next-line no-unused-vars
      await axios.delete(
        `http://localhost:8000/clientes/${clienteSelecionadoDelete._id}`,
      )

      toast.success(
        `O cliente: ${clienteSelecionadoDelete.nome} foi excluído !`,
        {
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        },
      )

      // Atualiza a lista de clientes
      const data = await listarClientes()
      setClientes(data)

      // console.log(response.data.message)
    } catch (err) {
      console.error(err)
    }
  }

  const renderForm = () => {
    switch (selectedValue) {
      case 'novo':
        return (
          <Form onSubmit={cadastrarCliente}>
            <Label>Nome</Label>
            <Input
              type="text"
              placeholder="Nome da empresa"
              value={nome}
              onChange={(e) =>
                setNome(
                  e.target.value.charAt(0).toUpperCase() +
                    e.target.value.slice(1),
                )
              }
            />
            {nomeError && <p style={{ color: '#f1341b' }}>{nomeError}</p>}

            <Label style={{ marginTop: '20px' }}>CNPJ</Label>
            <InputMask
              className="input-cnpj"
              mask="99.999.999/9999-99"
              value={cnpj}
              placeholder="00.000.000/0000-00"
              onChange={(e) => setCnpj(e.target.value)}
            />
            {cnpjError && (
              <p
                style={{
                  color: '#f1341b',
                }}
              >
                {cnpjError}
              </p>
            )}

            <Label style={{ marginTop: '20px' }}>Endereço</Label>
            <Input
              type="text"
              value={endereco}
              placeholder="Endereço da empresa"
              onChange={(e) => setEndereco(e.target.value)}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              style={{ opacity: buttonOpacity }}
            >
              {buttonText === 'Cadastrando...' ? (
                <div className="loader">
                  <div className="loader-circle"></div>
                  <p>Cadastrando...</p>
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
          </Form>
        )
      case 'editar':
        return (
          <Form>
            <Label>Nome</Label>
            <Dropdown
              clientes={clientes}
              onClienteSelect={setClienteSelecionado}
            />

            <Label style={{ marginTop: '-5px' }}>CNPJ</Label>
            <InputMask
              className="input-cnpj"
              mask="99.999.999/9999-99"
              value={clienteSelecionado ? clienteSelecionado.cnpj || '' : ''}
              placeholder="00.000.000/0000-00"
              onChange={(e) =>
                setClienteSelecionado({
                  ...clienteSelecionado,
                  cnpj: e.target.value,
                })
              }
            />

            {cnpjErrorEdit && (
              <p
                style={{
                  color: '#f1341b',
                }}
              >
                {cnpjErrorEdit}
              </p>
            )}

            <Label style={{ marginTop: '20px' }}>Endereço</Label>
            <Input
              type="text"
              value={
                clienteSelecionado ? clienteSelecionado.endereco || '' : ''
              }
              onChange={(event) =>
                setClienteSelecionado({
                  ...clienteSelecionado,
                  endereco: event.target.value,
                })
              }
              placeholder="Endereço da empresa"
            />

            <button
              className="edit"
              onClick={atualizarCliente}
              disabled={isSubmitting}
              style={{ opacity: buttonOpacity }}
            >
              {buttonTextEdit === 'Atualizando...' ? (
                <div className="loader">
                  <div className="loader-circle"></div>
                  <p>Atualizando...</p>
                </div>
              ) : (
                <>
                  <div className="button-icon">
                    <EditarCliente style={{ width: '24px', height: '24px' }} />
                  </div>
                  <span>{buttonTextEdit}</span>
                </>
              )}
            </button>
          </Form>
        )
      case 'excluir':
        return (
          <Form>
            <Label>Nome</Label>
            <DropdownClientes
              clientes={clientes}
              onClienteSelect={setClienteSelecionadoDelete}
            />

            <button className="delete" onClick={excluirCliente}>
              <ExcluirCliente style={{ width: '24px', height: '24px' }} />
              <p>Excluir</p>
            </button>
          </Form>
        )
      default:
        return null
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <p className="title">
          <NovoCliente />
          Clientes
        </p>

        <div className="radio-options">
          <div className="radio">
            <Radio
              {...controlProps('novo')}
              id="novo"
              color="default"
              size="small"
              sx={{
                color: common['white'],
                '&.Mui-checked': {
                  color: common['white'],
                },
              }}
            />
            <label htmlFor="novo">Novo Cliente</label>
          </div>
          <div className="radio">
            <Radio
              {...controlProps('editar')}
              id="editar"
              color="default"
              size="small"
              sx={{
                color: common['white'],
                '&.Mui-checked': {
                  color: common['white'],
                },
              }}
            />
            <label htmlFor="editar">Editar Cliente</label>
          </div>
          <div className="radio">
            <Radio
              {...controlProps('excluir')}
              id="excluir"
              color="default"
              size="small"
              sx={{
                color: common['white'],
                '&.Mui-checked': {
                  color: common['white'],
                },
              }}
            />
            <label htmlFor="excluir">Excluir Cliente</label>
          </div>
        </div>

        {renderForm()}
      </Content>
    </Container>
  )
}

export default Clientes
