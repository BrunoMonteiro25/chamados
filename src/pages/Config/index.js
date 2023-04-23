import React from 'react'
import Header from '../../components/Header'
import { Container, Content, Form, Image } from './styles'

import { ReactComponent as ConfigIcon } from '../../assets/icones/config2.svg'
import { ReactComponent as Salvar } from '../../assets/icones/salvar.svg'

import Avatar from '../../assets/avatar.jpg'

import Input from '../../components/Input'
import Label from '../../components/Label'

const Config = () => {
  return (
    <Container>
      <Header />

      <Content>
        <p className="title">
          <ConfigIcon />
          Meu Perfil
        </p>

        <Image>
          <img src={Avatar} alt="foto-perfil" className="img" />
        </Image>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />

        <Form>
          <Label>Nome</Label>
          <Input type="text" placeholder="John Doe" />

          <Label style={{ marginTop: '20px' }}>Email</Label>
          <Input type="email" placeholder="email@email.com" />

          <button>
            <Salvar />
            <p>Salvar</p>
          </button>
        </Form>
      </Content>
    </Container>
  )
}

export default Config
