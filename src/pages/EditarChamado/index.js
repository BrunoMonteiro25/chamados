import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import { Container, Content, Form, TextArea } from './styles'

import { ReactComponent as Editar } from '../../assets/icones/editar.svg'
import Label from '../../components/Label'

import DropdownChamadoClientes from '../../components/Select/chamadoCliente'
import DropdownChamadoAssunto from '../../components/Select/chamadoAssunto'

import { common } from '@mui/material/colors'
import Radio from '@mui/material/Radio'
import { useLocation, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import HeaderMobile from '../../components/HeaderMobile'

const EditarChamado = () => {
  const location = useLocation()
  const chamado = location.state?.chamado

  const [selectedValue, setSelectedValue] = useState('Em aberto')
  const [clientes, setClientes] = useState([])
  const [descricao, setDescricao] = useState(chamado?.descricao || '')

  const [clienteSelecionado, setClienteSelecionado] = useState(null)
  const [assuntoSelecionado, setAssuntoSelecionado] = useState(null)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonText, setButtonText] = useState('Atualizar')
  const [buttonOpacity, setButtonOpacity] = useState(1)

  const [menuIsVisible, setMenuIsVisible] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    async function carregaClientes() {
      const data = await listarClientes()
      setClientes(data)
    }
    carregaClientes()

    if (chamado) {
      const status = chamado.status
      switch (status) {
        case 'Em aberto':
          setSelectedValue('Em aberto')
          break
        case 'Em atendimento':
          setSelectedValue('Em atendimento')
          break
        case 'Fechado':
          setSelectedValue('Fechado')
          break
        default:
          setSelectedValue('Em aberto')
      }
    }
  }, [chamado])

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

  async function listarClientes() {
    try {
      const response = await axios.get(
        'https://api-sistema-chamados.onrender.com/clientes',
      )
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value)
  }

  const atualizarChamado = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setButtonText('Atualizando...')
    setButtonOpacity(0.5)

    try {
      await axios.put(
        `https://api-sistema-chamados.onrender.com/chamados/${chamado.id}`,
        {
          cliente: clienteSelecionado || chamado.id_cliente,
          assunto: assuntoSelecionado || chamado.assunto,
          status: selectedValue,
          descricao: descricao,
        },
      )

      toast.success(`O chamado foi atualizado!`, {
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
      console.error('Erro ao atualizar chamado:', error)
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
        setButtonText('Atualizar')
        setButtonOpacity(1)
        navigate('/')
      }, 1200)
    }
  }

  return (
    <Container>
      <HeaderMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />

      <Header setMenuIsVisible={setMenuIsVisible} />

      <Content>
        <p className="title">
          <Editar />
          Editar Chamado
        </p>

        <Form>
          <Label>Cliente</Label>
          <DropdownChamadoClientes
            clientes={clientes}
            chamadoSelecionado={chamado}
            onClienteSelecionado={setClienteSelecionado}
          />

          <Label>Assunto</Label>
          <DropdownChamadoAssunto
            chamadoSelecionado={chamado}
            onAssuntoSelecionado={setAssuntoSelecionado}
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
            <div className="radio">
              <Radio
                {...controlProps('Fechado')}
                id="option3"
                color="default"
                size="small"
                sx={{
                  color: common['white'],
                  '&.Mui-checked': {
                    color: common['white'],
                  },
                }}
              />
              <label htmlFor="option3">Fechado</label>
            </div>
          </div>

          <Label>Descrição</Label>
          <TextArea
            placeholder="Descreva seu problema... (opcional)"
            value={descricao}
            onChange={handleDescricaoChange}
          />

          <button
            onClick={atualizarChamado}
            disabled={isSubmitting}
            style={{ opacity: buttonOpacity }}
          >
            {buttonText === 'Atualizando...' ? (
              <div className="loader">
                <div className="loader-circle"></div>
                <p>Atualizando...</p>
              </div>
            ) : (
              <>
                <div className="button-icon">
                  <Editar style={{ width: '24px', height: '24px' }} />
                </div>
                <span>{buttonText}</span>
              </>
            )}
          </button>
        </Form>
      </Content>
    </Container>
  )
}

export default EditarChamado
