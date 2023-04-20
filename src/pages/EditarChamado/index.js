import React, { useState } from 'react'
import Header from '../../components/Header'
import { Container, Content, Form, TextArea } from './styles'

import { ReactComponent as Editar } from '../../assets/icones/editar.svg'
import Label from '../../components/Label'
// import Input from '../../components/Input'
import Dropdown from '../../components/Select'

import { common } from '@mui/material/colors'
import Radio from '@mui/material/Radio'

const NovoChamado = () => {
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
          <Editar />
          Editar Chamado
        </p>

        <Form>
          <Label>Cliente</Label>
          <Dropdown />

          <Label>Assunto</Label>
          {/* <Input type="text" placeholder="Digite o assunto" /> */}
          <Dropdown />

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

export default NovoChamado