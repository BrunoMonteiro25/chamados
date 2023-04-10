import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Container = styled.div``

export const AvatarCard = styled.div`
  width: 312px;
  height: 117px;
  background-color: #2b2b4b;
  border-radius: 6px;
  display: flex;
  align-items: center;
  position: relative;

  img {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 15px;
    border: 3px solid #fff;
    cursor: pointer;
  }

  .user {
    margin-left: 33px;
  }

  .user h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 3px;
    font-family: 'Poppins', sans-serif;
  }

  .user p {
    color: #bbb;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  svg {
    margin-left: 65px;
  }

  @media (max-width: 875px) {
    width: 80px;
    height: 80px;
    justify-content: center;

    img {
      margin-left: 0px;
    }

    .user,
    svg {
      display: none;
    }
  }
`

export const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

export const DropdownContent = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  z-index: 1;
  top: 60%;
  right: -25px;
  background-color: #17181f;
  min-width: max-content;
  padding: 12px 16px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  border-radius: 6px;
  border: 2px solid #cccccc;
  cursor: pointer;
`

export const Menu = styled.nav`
  margin-top: 20px;
  width: 312px;
  height: 500px;
  background-color: #2b2b4b;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 1px;
  padding: 10px 20px 20px 20px;

  @media screen and (max-width: 875px) {
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 5px;
  color: #ccc;
  padding: 10px;
  margin-bottom: 5px;

  &:first-child {
    margin-top: 15px;
  }

  &:hover {
    color: #ddd;
  }

  svg {
    path {
      fill: #ccc;
    }
  }

  &.active {
    background-color: #17181f;
    /* font-weight: 500; */
    z-index: 99;
    border-radius: 6px;
    color: #fff;

    svg {
      path {
        fill: #fff;
      }
    }
  }

  @media screen and (max-width: 875px) {
    p {
      display: none;
    }
  }
`
