import React, { useState } from 'react'
import Header from '../../components/Header'
import { Container } from './styles'
import StickyHeadTable from '../../components/Table'
import HeaderMobile from '../../components/HeaderMobile'

const Home = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <Container>
      <HeaderMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />

      <Header setMenuIsVisible={setMenuIsVisible} />
      <StickyHeadTable />
    </Container>
  )
}

export default Home
