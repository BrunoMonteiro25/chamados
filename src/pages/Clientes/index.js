import React, { useState } from 'react'
import Header from '../../components/Header'
import { Container, Content, Form } from './styles'
import { ReactComponent as NovoCliente } from '../../assets/icones/clientes-novo.svg'
import { ReactComponent as EditarCliente } from '../../assets/icones/editar.svg'
import { ReactComponent as ExcluirCliente } from '../../assets/icones/delete.svg'

import { ReactComponent as Novo } from '../../assets/icones/novo.svg'
import Input from '../../components/Input'
import Label from '../../components/Label'

import { common } from '@mui/material/colors'
import Radio from '@mui/material/Radio'

import Dropdown from '../../components/Select'

const Clientes = () => {
  const [selectedValue, setSelectedValue] = useState('novo')

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

  const renderForm = () => {
    switch (selectedValue) {
      case 'novo':
        return (
          <Form>
            <Label>Nome</Label>
            <Input type="text" placeholder="Nome da empresa" />

            <Label style={{ marginTop: '20px' }}>CNPJ</Label>
            <Input type="text" placeholder="00.000.000/0000-00" />

            <Label style={{ marginTop: '20px' }}>Endereço</Label>
            <Input type="text" placeholder="Endereço da empresa" />

            <button>
              <Novo style={{ width: '24px', height: '24px' }} />
              <p>Cadastrar</p>
            </button>
          </Form>
        )
      case 'editar':
        return (
          <Form>
            <Label>Nome</Label>
            <Dropdown />

            <Label style={{ marginTop: '20px' }}>CNPJ</Label>
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
