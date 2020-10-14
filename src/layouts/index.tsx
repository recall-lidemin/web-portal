import React, { FC } from 'react'
import Header from '@/components/GlobalHeader'
import styles from './style.less'

interface IProps {}
const BasicLayout: FC<IProps> = (_props) => {
  const { children } = _props
  // const { pathname } = history.location

  // const isLogin = pathname === '/login'
  return (
    <div className={`${styles['layout']}`}>
      <Header />
      {children}
    </div>
  )
}

export default BasicLayout
