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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  .letra {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    color: #fff;
    margin-left: 15px;
    border: 3px solid #fff;
    background-color: #17181f;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .letra p {
    font-size: 30px;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
  }

  .user {
    margin-left: 20px;
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
    max-width: 210px;
    display: inline-block;
    word-break: break-word;
  }

  svg {
    margin-left: 65px;
  }

  @media (max-width: 875px) {
    width: 80px;
    height: 80px;
    justify-content: center;

    .letra {
      margin-left: 0px;
    }

    .user,
    svg {
      display: none;
    }
  }

  @media screen and (max-width: 615px) {
    display: none;
  }
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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 875px) {
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 615px) {
    display: none;
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

export const MenuMobileIcon = styled.div`
  display: none !important;
  color: #fff;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 615px) {
    display: flex !important;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-59%, 25%);
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: 1px solid #8282826e;
    border-radius: 4px;
    background-color: #2b2b4b;
    width: 55px;
    height: 55px;
  }
`
