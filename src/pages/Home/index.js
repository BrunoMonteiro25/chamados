import React from 'react'
import Header from '../../components/Header'
import { Container } from './styles'
import StickyHeadTable from '../../components/Table'

const Home = () => {
  return (
    <Container>
      <Header />
      <StickyHeadTable />
    </Container>
  )
}

export default Home
