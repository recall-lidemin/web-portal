import React from 'react'
import { History } from 'umi'
import Home from './home'

interface InitialProps {
  store: any
  isServer: boolean
  history: History
  match: any
  route: any
}
const Index = () => {
  return <Home />
}

Index.getInitialProps = async ({ store, isServer, history, match, route }: InitialProps) => {
  if (!isServer) {
    return
  }
  return { history, match, route }
}

export default Index
