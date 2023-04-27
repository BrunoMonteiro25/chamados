import React, { useState } from 'react'
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

const Clientes = () => {
  const [nome, setNome] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [endereco, setEndereco] = useState('')

  const [selectedValue, setSelectedValue] = useState('novo')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Cadastrar')
  const [buttonOpacity, setButtonOpacity] = useState(1)

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

  async function handleFormSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setButtonText('Cadastrando...')
    setButtonOpacity(0.5)

    try {
      await axios.post('http://localhost:8000/clientes', {
        nome: nome,
        cnpj: cnpj,
        endereco: endereco,
      })

      setNome('')
      setCnpj('')
      setEndereco('')

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
    } catch (err) {
      console.error('Erro ao cadastrar cliente:', err)
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
        setButtonText('Cadastrar')
        setButtonOpacity(1)
      }, 1500)
    }
  }
  const renderForm = () => {
    switch (selectedValue) {
      case 'novo':
        return (
          <Form onSubmit={handleFormSubmit}>
            <Label>Nome</Label>
            <Input
              type="text"
              placeholder="Nome da empresa"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <Label style={{ marginTop: '20px' }}>CNPJ</Label>
            <InputMask
              className="input-cnpj"
              mask="99.999.999/9999-99"
              value={cnpj}
              placeholder="00.000.000/0000-00"
              onChange={(e) => setCnpj(e.target.value)}
            />

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
            <Dropdown />

            <Label style={{ marginTop: '-5px' }}>CNPJ</Label>
            <Input type="text" placeholder="00.000.000/0000-00" />

            <Label style={{ marginTop: '20px' }}>Endereço</Label>
            <Input type="text" placeholder="Endereço da empresa" />

            <button className="edit">
              <EditarCliente style={{ width: '24px', height: '24px' }} />
              <p>Atualizar</p>
            </button>
          </Form>
        )
      case 'excluir':
        return (
          <Form>
            <Label>Nome</Label>
            <Dropdown />

            <button className="delete">
              <ExcluirCliente style={{ width: '24px', height: '24px' }} />
              <p>Apagar</p>
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
