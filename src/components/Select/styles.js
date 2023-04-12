import styled from 'styled-components'

export const DropdownWrapper = styled.div`
  width: 500px;
  position: relative;
  margin-top: 5px;

  @media screen and (max-width: 967px) {
    width: 380px;
  }

  @media screen and (max-width: 615px) {
    width: 250px;
  }
`

export const Select = styled.div`
  background-color: #44465f;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 2px #6f74c6 solid; */
  border-radius: 0.5em;
  padding: 1em;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #323741;
    /* border: 2px #6f74c6 solid; */
  }

  &.select-clicked {
    border: 2px #6f74c6 solid;
    box-shadow: 0 0 0.8em #6f74c6;
  }
`

export const Caret = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #fff;
  transition: 0.3s;

  &.caret-rotate {
    transform: rotate(180deg);
  }
`

export const Menu = styled.ul`
  list-style: none;
  padding: 0.2em 0.5em;
  background: #44465f;
  border: 1px #363a43 solid;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
  color: #9fa5b5;
  position: absolute;
  top: 3em;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  opacity: 0;
  display: none;
  transition: 0.2s;
  z-index: 1;
  margin-top: 20px;

  &.menu-open {
    display: block;
    opacity: 1;
  }
`

export const MenuItem = styled.li`
  padding: 0.7em 0.5em;
  margin: 0.3em 0;
  border-radius: 0.5em;
  cursor: pointer;

  &:hover {
    background: #2a2d35;
  }

  &.active {
    background: #23242a;
  }
`
