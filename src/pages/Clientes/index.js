import React from 'react'
import Header from '../../components/Header'
import { Container, Content, Form } from './styles'

import { ReactComponent as NovoCliente } from '../../assets/icones/novo_cliente.svg'
import { ReactComponent as Novo } from '../../assets/icones/novo.svg'
import Input from '../../components/Input'
import Label from '../../components/Label'

const Clientes = () => {
  return (
    <Container>
      <Header />

      <Content>
        <p className="title">
          <NovoCliente />
          Novo Cliente
        </p>

        <Form>
          <Label>Nome Fantasia</Label>
          <Input type="text" placeholder="Nome da empresa" />

          <Label style={{ marginTop: '20px' }}>CNPJ</Label>
          <Input type="text" placeholder="Seu CNPJ" />

          <Label style={{ marginTop: '20px' }}>Endereço</Label>
          <Input type="text" placeholder="Endereço da empresa" />

          <button>
            <Novo />
            <p>Registrar</p>
          </button>
        </Form>
      </Content>
    </Container>
  )
}

export default Clientes
