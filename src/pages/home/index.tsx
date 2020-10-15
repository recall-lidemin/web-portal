import React, { FC } from 'react'
import { connect } from 'umi'
import Header from '@/components/GlobalHeader'
import Nav from '@/components/Nav'
import Banner from '@/components/Banner'
import List from './components/List'

interface IProps {}
const Home: FC<IProps> = (props) => {
  return (
    <>
      <Header />
      <Nav />
      <Banner />
      <List />
    </>
  )
}

export default connect()(Home)
