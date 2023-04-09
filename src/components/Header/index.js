import React, { useState } from 'react'

import {
  AvatarCard,
  Container,
  NavLink,
  Menu,
  DropdownButton,
  DropdownContent,
} from './styles'

import Avatar from '../../assets/avatar.jpg'

import { ReactComponent as Arrow } from '../../assets/icones/arrow.svg'
import { ReactComponent as Chamados } from '../../assets/icones/chamados.svg'
import { ReactComponent as Clientes } from '../../assets/icones/clientes.svg'
import { ReactComponent as Config } from '../../assets/icones/config.svg'
import { ReactComponent as Sair } from '../../assets/icones/sair.svg'

const Header = () => {
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => {
    setOpen(!open)
  }

  return (
    <>
      <Container>
        <AvatarCard>
          <img src={Avatar} alt="foto-perfil" />
          <div className="user">
            <h2>John Doe</h2>
            <p>teste@teste.com</p>
          </div>
          <DropdownButton onClick={toggleDropdown}>
            <Arrow />
          </DropdownButton>
          <DropdownContent open={open}>
            <p>minha conta</p>
          </DropdownContent>
        </AvatarCard>

        <Menu>
          <NavLink to="/">
            <Chamados />
            <p>Chamados</p>
          </NavLink>

          <NavLink to="/clientes">
            <Clientes />
            <p>Clientes</p>
          </NavLink>

          <NavLink to="/config">
            <Config />
            <p>Configurações</p>
          </NavLink>

          <NavLink to="/login" style={{ marginTop: '250px' }}>
            <Sair />
            <p>Sair</p>
          </NavLink>
        </Menu>
      </Container>
    </>
  )
}

export default Header
