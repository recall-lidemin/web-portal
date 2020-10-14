import React, { FC } from 'react'
import NavInBanner from '../NavInBanner'
import styles from './index.less'

interface IProps {}
const Banner: FC<IProps> = () => {
  return (
    <div className={`${styles['banner']}`}>
      <div className="text" />
      <NavInBanner />
    </div>
  )
}

export default Banner
