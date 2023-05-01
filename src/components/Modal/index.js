import React from 'react'
import { ModalDiv, Container, Content } from './styles'
import { ReactComponent as Fechar } from '../../assets/icones/fechar2.svg'

const Modal = ({ id = 'modal', onClose = () => {}, excluirCliente }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose()
  }

  return (
    <ModalDiv id={id} onClick={handleOutsideClick}>
      <Container>
        <button className="fechar" onClick={onClose}>
          <Fechar />
        </button>
        <Content>
          <p>Tem certeza que deseja apagar esse cliente?</p>
          <div className="containerButton">
            <button className="cancelar" onClick={onClose}>
              <p>Cancelar</p>
            </button>
            <button className="excluir" onClick={excluirCliente}>
              <p>Sim</p>
            </button>
          </div>
        </Content>
      </Container>
    </ModalDiv>
  )
}

export default Modal
