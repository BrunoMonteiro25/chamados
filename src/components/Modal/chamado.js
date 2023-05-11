import React from 'react'
import { ModalDiv, Container, Content } from './chamadoStyles'
import { ReactComponent as Fechar } from '../../assets/icones/fechar2.svg'

const ModalChamados = ({ id = 'modal', onClose = () => {}, chamado }) => {
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
                {chamado.descricao}
              </p>
            )}
          </div>
        </Content>
      </Container>
    </ModalDiv>
  )
}

export default ModalChamados
