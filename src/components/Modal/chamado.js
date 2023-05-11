import React from 'react'
import { ModalDiv, Container, Content } from './chamadoStyles'
import { ReactComponent as Fechar } from '../../assets/icones/fechar2.svg'

const ModalChamados = ({ id = 'modal', onClose = () => {} }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose()
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
              <span>Data: </span>10/05/2023
            </p>

            <p>
              <span>Cliente: </span>Cliente 1
            </p>

            <p>
              <span>Assunto: </span>Suporte
            </p>

            <p>
              <span>Status: </span>Em aberto
            </p>
          </div>

          <div className="desc">
            <p>
              <span>Descrição: </span>
              Problemas de rede são bastante comuns e podem ser causados.
            </p>
          </div>
        </Content>
      </Container>
    </ModalDiv>
  )
}

export default ModalChamados
