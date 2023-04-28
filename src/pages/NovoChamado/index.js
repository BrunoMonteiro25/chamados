import React, { useState } from 'react'
import Header from '../../components/Header'
import { Container, Content, Form, TextArea } from './styles'

import { ReactComponent as Novo } from '../../assets/icones/novo-chamado.svg'
import Label from '../../components/Label'

import DropdownAssunto from '../../components/Select/assunto'
import DropdownClientes from '../../components/Select/cliente'

import { common } from '@mui/material/colors'
import Radio from '@mui/material/Radio'

const NovoChamado = ({ clientes }) => {
  const [selectedValue, setSelectedValue] = useState('a')

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
            clientes={clientes.map((cliente) => cliente.nome)}
          />

          <Label>Assunto</Label>
          <DropdownAssunto />

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
              <label htmlFor="option1">Aberto</label>
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
              <label htmlFor="option2">Progresso</label>
            </div>
            {/* <div className="radio">
              <Radio
                {...controlProps('b')}
                color="default"
                size="small"
                sx={{
                  color: common['white'],
                  '&.Mui-checked': {
                    color: common['white'],
                  },
                }}
              />
              <label htmlFor="option3">Pausado</label>
            </div> */}
          </div>

          <Label>Descrição</Label>
          <TextArea placeholder="Descreva seu problema... (opcional)" />

          <button>
            <Novo />
            <p>Registrar</p>
          </button>
        </Form>
      </Content>
    </Container>
  )
}

export default NovoChamado
