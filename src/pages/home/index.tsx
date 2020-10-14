import React, { FC } from 'react'
import Header from '@/components/GlobalHeader'
import Nav from '@/components/Nav'
import Banner from '@/components/Banner'

const Home: FC = () => {
  return (
    <>
      <Header />
      <Nav />
      <Banner />
    </>
  )
}

export default Home
