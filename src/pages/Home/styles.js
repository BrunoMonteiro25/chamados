import styled from 'styled-components'

export const Container = styled.div`
  max-width: 110rem;
  margin: 50px auto 0 auto;
  display: flex;
  gap: 30px;

  @media screen and (max-width: 615px) {
    gap: 0px;
  }
`
