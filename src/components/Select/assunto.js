import React, { useState } from 'react'
import { DropdownWrapper, Select, Caret, Menu, MenuItem } from './styles'

const DropdownAssunto = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Suporte')

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
        <MenuItem
          className={selected === 'Suporte' ? 'active' : ''}
          onClick={() => handleOptionClick('Suporte')}
        >
          Suporte
        </MenuItem>
        <MenuItem
          className={selected === 'Bug' ? 'active' : ''}
          onClick={() => handleOptionClick('Bug')}
        >
          Bug
        </MenuItem>
        <MenuItem
          className={selected === 'Dúvidas' ? 'active' : ''}
          onClick={() => handleOptionClick('Dúvidas')}
        >
          Dúvidas
        </MenuItem>
      </Menu>
    </DropdownWrapper>
  )
}

export default DropdownAssunto
