import React, { useState } from 'react'
import { DropdownWrapper, Select, Caret, Menu, MenuItem } from './styles'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Figma')

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
          className={selected === 'Figma' ? 'active' : ''}
          onClick={() => handleOptionClick('Figma')}
        >
          Figma
        </MenuItem>
        <MenuItem
          className={selected === 'Framer' ? 'active' : ''}
          onClick={() => handleOptionClick('Framer')}
        >
          Framer
        </MenuItem>
        <MenuItem
          className={selected === 'Sketch' ? 'active' : ''}
          onClick={() => handleOptionClick('Sketch')}
        >
          Sketch
        </MenuItem>
      </Menu>
    </DropdownWrapper>
  )
}

export default Dropdown
