import React, { FC } from 'react'
import { Link } from 'umi'
import styles from './index.less'

interface IProps {}
const Header: FC<IProps> = () => {
  return (
    <div className={`${styles['header']}`}>
      <div className="login">
        欢迎登录淄矿集团智慧党建平台！|
        <Link
          to={{
            pathname: '/login'
          }}
          style={{ color: '#fff' }}
        >
          登录
        </Link>
      </div>
    </div>
  )
}

export default Header
