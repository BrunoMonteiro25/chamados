import React from 'react'
import Header from '../../components/Header'
import { Container, New, LoginForm, Label, Input } from './styles'

import { ReactComponent as NovoCliente } from '../../assets/icones/novo_cliente.svg'
import { ReactComponent as Novo } from '../../assets/icones/novo.svg'

const Clientes = () => {
  return (
    <Container>
      <Header />

      <New>
        <p className="title">
          <NovoCliente />
          Novo Cliente
        </p>

        <LoginForm>
          <Label>Nome Fantasia</Label>
          <Input type="text" placeholder="Escola Vida" />

          <Label style={{ marginTop: '20px' }}>CNPJ</Label>
          <Input type="text" placeholder="Seu CNPJ" />

          <Label style={{ marginTop: '20px' }}>Endereço</Label>
          <Input type="text" placeholder="Enderço da empresa" />

          <button>
            <Novo />
            <p>Registrar</p>
          </button>
        </LoginForm>
      </New>
    </Container>
  )
}

export default Clientes
