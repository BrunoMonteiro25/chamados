import React, { useState, useEffect } from 'react'
import { DropdownWrapper, Select, Caret, Menu, MenuItem } from './styles'

const DropdownChamadoClientes = ({ clientes, chamadoSelecionado }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(chamadoSelecionado)

  // eslint-disable-next-line no-unused-vars
  const [key, setKey] = useState(0)

  console.log(selected)

  const handleSelectClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setSelected(option)
    setIsOpen(false)
    setKey((key) => key + 1) // Atualiza a chave quando uma opção for selecionada
  }

  useEffect(() => {
    if (chamadoSelecionado) {
      setSelected(chamadoSelecionado)
    }
  }, [chamadoSelecionado])

  return (
    <DropdownWrapper>
      <Select
        className={isOpen ? 'select-clicked' : ''}
        onClick={handleSelectClick}
      >
        <span className="selected">{selected.nome}</span>
        <Caret className={isOpen ? 'caret-rotate' : ''} />
      </Select>
      <Menu className={isOpen ? 'menu-open' : ''}>
        {clientes.map((cliente) => (
          <MenuItem
            key={cliente._id}
            className={selected.nome === cliente.nome ? 'active' : ''}
            onClick={() => handleOptionClick(cliente)}
          >
            {cliente.nome}
          </MenuItem>
        ))}
      </Menu>
    </DropdownWrapper>
  )
}

export default DropdownChamadoClientes
