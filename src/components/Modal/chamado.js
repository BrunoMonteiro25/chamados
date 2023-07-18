import React, { useEffect, useState } from 'react'
import { ModalDiv, Container, Content } from './chamadoStyles'
import { ReactComponent as Fechar } from '../../assets/icones/fechar2.svg'

const ModalChamados = ({ id = 'modal', onClose = () => {}, chamado }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose()
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const getLimitedDescription = () => {
    let description = chamado.descricao

    if (windowWidth > 715) {
      if (description.length > 400) {
        const lastSpaceIndex = description.lastIndexOf(' ', 400)
        description = description.slice(0, lastSpaceIndex) + '...'
      }
    } else if (windowWidth > 415) {
      if (description.length > 300) {
        const lastSpaceIndex = description.lastIndexOf(' ', 300)
        description = description.slice(0, lastSpaceIndex) + '...'
      }
    } else {
      if (description.length > 100) {
        const lastSpaceIndex = description.lastIndexOf(' ', 100)
        description = description.slice(0, lastSpaceIndex) + '...'
      }
    }

    return description
  }

  return (
    <ModalDiv id={id} onClick={handleOutsideClick}>
      <Container>
        <Content>
          <div className="titulo">
            <p>Detalhes do chamado</p>
            <button className="fechar" onClick={onClose}>
              <Fechar />
            </button>
          </div>

          <div className="detalhes">
            <p style={{ marginBottom: '15px' }}>
              <span>Data: </span>
              {chamado.data}
            </p>

            <p>
              <span>Cliente: </span>
              {chamado.nome}
            </p>

            <p>
              <span>Assunto: </span>
              {chamado.assunto}
            </p>

            <p>
              <span>Status: </span>
              {chamado.status}
            </p>
          </div>

          <div className="desc">
            {chamado.descricao !== '' && (
              <p>
                <span>Descrição: </span>
                {getLimitedDescription()}
              </p>
            )}
          </div>
        </Content>
      </Container>
    </ModalDiv>
  )
}

export default ModalChamados
