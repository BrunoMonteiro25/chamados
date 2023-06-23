import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import { Container, Content, Form, TextArea } from './styles'

import { ReactComponent as Editar } from '../../assets/icones/editar.svg'
import Label from '../../components/Label'

import DropdownAssunto from '../../components/Select/assunto'
import DropdownChamadoClientes from '../../components/Select/chamadoCliente'

import { common } from '@mui/material/colors'
import Radio from '@mui/material/Radio'
import { useLocation } from 'react-router-dom'

const EditarChamado = () => {
  const [selectedValue, setSelectedValue] = useState('a')
  const [clientes, setClientes] = useState([])

  const location = useLocation()
  const chamado = location.state?.chamado

  console.log(chamado)

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

  return (
    <Container>
      <Header />

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
          />

          <Label>Assunto</Label>
          <DropdownAssunto onAssuntoSelect={() => console.log('assunto')} />

          <Label>Status</Label>
          <div className="container">
            <div className="radio">
              <Radio
                {...controlProps('a')}
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
                {...controlProps('b')}
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
                {...controlProps('c')}
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
          <TextArea placeholder="Descreva seu problema... (opcional)" />

          <button>
            <Editar />
            <p>Atualizar</p>
          </button>
        </Form>
      </Content>
    </Container>
  )
}

export default EditarChamado
