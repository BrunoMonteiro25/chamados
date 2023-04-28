import React, { useState } from 'react'
import { DropdownWrapper, Select, Caret, Menu, MenuItem } from './styles'

const DropdownClientes = ({ clientes }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(
    clientes[0] || 'Selecione um cliente',
  )

  const handleSelectClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setSelected(option)
    setIsOpen(false)
  }

  return (
    <DropdownWrapper>
      <Select
        className={isOpen ? 'select-clicked' : ''}
        onClick={handleSelectClick}
      >
        <span className="selected">{selected}</span>
        <Caret className={isOpen ? 'caret-rotate' : ''} />
      </Select>
      <Menu className={isOpen ? 'menu-open' : ''}>
        {clientes.map((cliente) => (
          <MenuItem
            key={cliente}
            className={selected === cliente ? 'active' : ''}
            onClick={() => handleOptionClick(cliente)}
          >
            {cliente}
          </MenuItem>
        ))}
      </Menu>
    </DropdownWrapper>
  )
}

export default DropdownClientes
