import React, { useEffect, useState } from 'react'

import { AvatarCard, Container, NavLink, Menu, MenuMobileIcon } from './styles'

import { ReactComponent as Chamados } from '../../assets/icones/chamados.svg'
import { ReactComponent as Clientes } from '../../assets/icones/clientes.svg'
import { ReactComponent as Config } from '../../assets/icones/config.svg'
import { ReactComponent as Sair } from '../../assets/icones/sair.svg'

import { useNavigate } from 'react-router-dom'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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

    // setTimeout(() => {
    //   setNome(data.nome)
    //   setEmail(data.email)
    // }, 190000 * 10000000)

    setNome(data.nome)
    setEmail(data.email)
  }

  loadUser()

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // skeleton basecolor: 17181F
  // skeleton highcolor: 1C1E26

  return (
    <>
      <Container>
        <AvatarCard>
          {nome ? (
            <div className="letra" onClick={handleClick}>
              <p>{nome[0]}</p>
            </div>
          ) : (
            <Skeleton
              baseColor="#5B5E80"
              highlightColor="#6E7199"
              count={1}
              circle="50%"
              width="55px"
              height="55px"
              style={{
                marginLeft: width >= 875 ? '15px' : '0',
                marginRight: width < 875 ? '2px' : '0',
              }}
            />
          )}

          <div className="user">
            {nome ? (
              <h2>{nome}</h2>
            ) : (
              <Skeleton
                baseColor="#5B5E80"
                highlightColor="#6E7199"
                count={1}
                width="130px"
                height="25px"
              />
            )}

            {email ? (
              <p>{email}</p>
            ) : (
              <Skeleton
                baseColor="#5B5E80"
                highlightColor="#6E7199"
                count={1}
                width="200px"
                height="25px"
                style={{ marginTop: '5px' }}
              />
            )}
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
