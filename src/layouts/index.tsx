import React, { FC } from 'react'
import styles from './style.less'

interface IProps {}
const BasicLayout: FC<IProps> = ({ children }) => {
  return <div className={`${styles['layout']}`}>{children}</div>
}

export default BasicLayout
