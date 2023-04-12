import React from 'react'
import Header from '../../components/Header'
import { Container, Content } from './styles'

import { ReactComponent as Novo } from '../../assets/icones/novo-chamado.svg'
import Label from '../../components/Label'
import Dropdown from '../../components/Select'

const NovoChamado = () => {
  return (
    <Container>
      <Header />

      <Content>
        <p className="title">
          <Novo />
          Novo Chamado
        </p>

        <Label>Cliente</Label>
        <Dropdown />
      </Content>
    </Container>
  )
}

export default NovoChamado
