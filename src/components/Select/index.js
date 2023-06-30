import React, { useState, useEffect } from 'react'
import { DropdownWrapper, Select, Caret, Menu, MenuItem } from './styles'

const Dropdown = ({ clientes, onClienteSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(
    clientes[0] || 'Nenhum cliente cadastrado',
  )

  useEffect(() => {
    onClienteSelect(selected)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  const handleSelectClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setSelected(option)
    // console.log(option)
    setIsOpen(false)
  }

  return (
    <DropdownWrapper>
      <Select
        className={isOpen ? 'select-clicked' : ''}
        onClick={handleSelectClick}
      >
        <span className="selected">
          {selected.nome ? selected.nome : 'Nenhum cliente cadastrado'}
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

export default Dropdown
