import styled, { css } from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Container = styled.div`
  display: none;

  @media screen and (max-width: 615px) {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 1000 !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2b2b4b;
    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);
    transition: 0.5s;
    flex-direction: column;
    gap: 80px;

    > svg {
      position: absolute;
      top: 1rem;
      right: 2rem;
      transform: rotate(45deg);
      transition: 0.7s;
    }

    ${({ isVisible }) =>
      isVisible &&
      css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);

        > svg {
          transform: rotate(0deg);
        }
      `}
  }

  @media screen and (max-height: 640px) {
    gap: 30px;
  }
`

export const Nav = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 1px;
`

export const NavLink = styled(Link)`
  color: #ddd;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  font-size: 1.5rem;
  gap: 5px;
  padding: 8px 16px;

  svg {
    path {
      fill: #ccc;
    }
  }

  &.active {
    background-color: #17181f;
    z-index: 99;
    border-radius: 6px;
    color: #fff;

    svg {
      path {
        fill: #fff;
      }
    }
  }
`

export const AvatarCard = styled.div`
  @media screen and (max-height: 640px) {
    margin-top: 100px;
  }

  @media screen and (max-height: 481px) {
    margin-top: 10px;

    .letra {
      width: 100px !important;
      height: 100px !important;
    }
  }

  @media screen and (max-width: 615px) {
    width: max-content;
    height: max-content;
    background-color: #2b2b4b;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin-right: 10px;

    .letra {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      color: #fff;
      border: 3px solid #fff;
      background-color: #17181f;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .letra p {
      font-size: 70px;
      font-family: 'Poppins', sans-serif;
      text-transform: uppercase;
    }

    .user {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .user h2 {
      font-size: 24px;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 10px;
      font-family: 'Roboto', sans-serif;
    }

    .user p {
      color: #bbb;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
    }
  }
`
