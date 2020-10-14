import React, { FC } from 'react'
import { Link } from 'umi'
import styles from './index.less'

interface IProps {}
const Nav: FC<IProps> = () => {
  const data = [
    {
      id: 1,
      title: '党建',
      pathname: '/'
    },
    {
      id: 2,
      title: '安全',
      pathname: '/'
    },
    {
      id: 3,
      title: '生产',
      pathname: '/'
    },
    {
      id: 4,
      title: '经营',
      pathname: '/'
    },
    {
      id: 5,
      title: '教育',
      pathname: '/'
    },
    {
      id: 6,
      title: '大数据',
      pathname: '/'
    }
  ]
  return (
    <div className={`${styles['nav']}`}>
      <div style={{ fontSize: '26px', color: '#000' }}>山东能源淄矿集团智慧党建平台</div>
      <div className="nav-right">
        {data.map((item) => (
          <Link
            to={{ pathname: item.pathname }}
            key={item.id}
            style={{ color: '#000', margin: '0 25px', fontSize: '18px' }}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Nav
