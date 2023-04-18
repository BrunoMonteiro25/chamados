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

  button {
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

    /* button {
      width: max-content;
    } */
  }
`
