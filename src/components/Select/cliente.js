import React, { useState, useEffect } from 'react'
import { DropdownWrapper, Select, Caret, Menu, MenuItem } from './styles'

const DropdownClientes = ({ clientes, onClienteSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(
    clientes[0] || 'Selecione um cliente',
  )
  // eslint-disable-next-line no-unused-vars
  const [key, setKey] = useState(0)

  const handleSelectClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setSelected(option)
    setIsOpen(false)
    setKey((key) => key + 1) // Atualiza a chave quando uma opção for selecionada
  }

  useEffect(() => {
    onClienteSelect(selected)
  }, [onClienteSelect, selected])

  useEffect(() => {
    setSelected(clientes[0] || 'Selecione um cliente')
    setKey((key) => key + 1) // Atualiza a chave quando a lista de clientes mudar
  }, [clientes])

  return (
    <DropdownWrapper>
      <Select
        className={isOpen ? 'select-clicked' : ''}
        onClick={handleSelectClick}
      >
        <span className="selected">
          {selected.nome ? selected.nome : 'Selecione um cliente'}
        </span>
        <Caret className={isOpen ? 'caret-rotate' : ''} />
      </Select>
      <Menu className={isOpen ? 'menu-open' : ''}>
        {clientes.map((cliente) => (
          <MenuItem
            key={cliente._id}
            className={selected._id === cliente._id ? 'active' : ''}
            onClick={() => handleOptionClick(cliente)}
          >
            {cliente.nome}
          </MenuItem>
        ))}
      </Menu>
    </DropdownWrapper>
  )
}

export default DropdownClientes
