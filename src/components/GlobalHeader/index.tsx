import React, { FC } from 'react'
import styles from './index.less'

interface IProps {}
const Header: FC<IProps> = () => {
  return <div className={`${styles['header']}`}>123</div>
}

export default Header
