import styled from 'styled-components'

export const HeaderTable = styled.div`
  color: #fff;
  padding: 30px 0px 30px 30px;
  display: flex;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;

  p {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 20px;
    letter-spacing: 1px;
  }

  .novo-chamado {
    margin-right: 30px;
    padding: 15px 30px;
    border-radius: 6px;
    background-color: #0d830b;
    border: none;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0e870b;
    }
  }

  @media screen and (max-width: 645px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const Acoes = styled.div`
  .config-view {
    background-color: #686ca4;
    width: 34px;
    height: 34px;
    border-radius: 8px;
    border: none;
    margin-left: 10px;
    cursor: pointer;

    :hover {
      background-color: #6e72ad;
    }
  }

  .config-edit {
    background-color: #dc9f47;
    width: 34px;
    height: 34px;
    border-radius: 8px;
    border: none;
    margin-left: 10px;
    cursor: pointer;

    :hover {
      background-color: #ebaa4c;
    }
  }

  .config-delete {
    background-color: #d04735;
    width: 34px;
    height: 34px;
    border-radius: 8px;
    border: none;
    margin-left: 10px;
    cursor: pointer;

    :hover {
      background-color: #d34c3b;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`
