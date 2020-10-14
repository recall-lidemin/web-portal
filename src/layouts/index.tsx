import React, { FC } from 'react'
import { history } from 'umi'
import Header from '@/components/GlobalHeader'
import styles from './style.less'

interface IProps {}
const BasicLayout: FC<IProps> = ({ children }) => {
  const { pathname } = history.location
  console.log(history.location)
  const isLogin = pathname === '/login'
  return (
    <div className={`${styles['layout']}`}>
      {isLogin ? null : <Header />}
      {children}
    </div>
  )
}

export default BasicLayout
