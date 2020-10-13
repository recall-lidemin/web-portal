import React, { FC } from 'react'
import Header from '@/components/GlobalHeader'
import styles from './style.less'

interface IProps {}
const BasicLayout: FC<IProps> = ({ children }) => {
  return (
    <div className={`${styles['layout']}`}>
      <Header />
      {children}
    </div>
  )
}

export default BasicLayout
