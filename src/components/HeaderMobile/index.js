import React, { useEffect, useState } from 'react'

import { Container, Nav, NavLink, AvatarCard } from './styles'

import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

import { ReactComponent as Chamados } from '../../assets/icones/chamados.svg'
import { ReactComponent as Clientes } from '../../assets/icones/clientes.svg'
import { ReactComponent as Config } from '../../assets/icones/config.svg'
import { ReactComponent as Sair } from '../../assets/icones/sair.svg'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HeaderMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

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

  useEffect(() => {
    if (!menuIsVisible) {
      setMenuIsVisible(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuIsVisible])

  useEffect(() => {
    loadUser()
  }, [])

  useEffect(() => {
    let isMenuOpen = false

    const handleResize = () => {
      if (window.innerWidth > 615) {
        if (isMenuOpen) {
          setMenuIsVisible(false)
          isMenuOpen = false
        }
      } else {
        isMenuOpen = true
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Container isVisible={menuIsVisible}>
        <CloseRoundedIcon
          fontSize="large"
          style={{ cursor: 'pointer' }}
          onClick={() => setMenuIsVisible(false)}
        />

        <AvatarCard>
          <div className="letra">
            {nome ? (
              <p>{nome[0]}</p>
            ) : (
              <Skeleton
                baseColor="#5B5E80"
                highlightColor="#6E7199"
                count={1}
                circle="50%"
                width="125px"
                height="125px"
              />
            )}
          </div>

          <div className="user">
            {nome ? (
              <h2>{nome}</h2>
            ) : (
              <Skeleton
                baseColor="#5B5E80"
                highlightColor="#6E7199"
                count={1}
                style={{ marginTop: '10px' }}
                width="200px"
                height="30px"
              />
            )}

            {email ? (
              <p>{email}</p>
            ) : (
              <Skeleton
                baseColor="#5B5E80"
                highlightColor="#6E7199"
                count={1}
                style={{ marginTop: '5px' }}
                width="250px"
                height="30px"
              />
            )}
          </div>
        </AvatarCard>

        <Nav>
          <NavLink to="/">
            <Chamados />
            Chamados
          </NavLink>
          <NavLink to="/clientes">
            <Clientes />
            Clientes
          </NavLink>
          <NavLink to="/config">
            <Config />
            Configurações
          </NavLink>
          <NavLink
            to="/login"
            style={{ marginLeft: '3px' }}
            onClick={handleLogout}
          >
            <Sair />
            Sair
          </NavLink>
        </Nav>
      </Container>
    </>
  )
}

export default HeaderMobile
