import React, { useState } from 'react'
import Header from '../../components/Header'
import { Container } from './styles'
import StickyHeadTable from '../../components/Table'
import HeaderMobile from '../../components/HeaderMobile'
import Head from '../../components/Head'

const Home = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <Container>
      <Head title="" />
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
