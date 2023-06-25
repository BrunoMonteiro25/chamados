import React, { useState, useEffect } from 'react'
import { DropdownWrapper, Select, Caret, Menu, MenuItem } from './styles'

const DropdownChamadoAssunto = ({
  chamadoSelecionado,
  onAssuntoSelecionado,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(chamadoSelecionado.assunto)

  const assunto = ['Suporte', 'Bug', 'Dúvidas']

  const handleSelectClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setSelected(option)
    setIsOpen(false)
    onAssuntoSelecionado(option)
  }

  useEffect(() => {
    if (chamadoSelecionado.assunto) {
      setSelected(chamadoSelecionado.assunto)
    }
  }, [chamadoSelecionado.assunto])

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
        {assunto.map((assunto, index) => (
          <MenuItem
            key={index}
            className={selected === assunto ? 'active' : ''}
            onClick={() => handleOptionClick(assunto)}
          >
            {assunto}
          </MenuItem>
        ))}
      </Menu>
    </DropdownWrapper>
  )
}

export default DropdownChamadoAssunto
