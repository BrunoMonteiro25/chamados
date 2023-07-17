import React, { useState } from 'react'

import { AvatarCard, Container, NavLink, Menu, MenuMobileIcon } from './styles'

import { ReactComponent as Chamados } from '../../assets/icones/chamados.svg'
import { ReactComponent as Clientes } from '../../assets/icones/clientes.svg'
import { ReactComponent as Config } from '../../assets/icones/config.svg'
import { ReactComponent as Sair } from '../../assets/icones/sair.svg'

import { useNavigate } from 'react-router-dom'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

const Header = ({ setMenuIsVisible }) => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  function handleClick() {
    navigate('/config')
  }

  function handleLogout() {
    localStorage.removeItem('chave_secreta_do_token')
  }

  async function loadUser() {
    const token = localStorage.getItem('chave_secreta_do_token')

    const response = await fetch(
      'https://api-sistema-chamados.onrender.com/usuario-logado',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    const data = await response.json()

    setNome(data.nome)
    setEmail(data.email)
  }

  loadUser()

  return (
    <>
      <Container>
        <AvatarCard>
          <div className="letra" onClick={handleClick}>
            <p>{nome[0]}</p>
          </div>
          <div className="user">
            <h2>{nome}</h2>
            <p>{email}</p>
          </div>
        </AvatarCard>

        <MenuMobileIcon onClick={() => setMenuIsVisible(true)}>
          <MenuRoundedIcon fontSize="large" />
        </MenuMobileIcon>

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

          <NavLink
            to="/login"
            onClick={handleLogout}
            style={{ marginLeft: '3px', marginTop: '200px' }}
          >
            <Sair />
            <p>Sair</p>
          </NavLink>
        </Menu>
      </Container>
    </>
  )
}

export default Header
