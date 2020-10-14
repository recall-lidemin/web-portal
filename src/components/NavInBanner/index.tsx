import React, { FC } from 'react'
import { Link } from 'umi'
import styles from './index.less'

interface IProps {}
const NavInBanner: FC<IProps> = () => {
  const data = [
    {
      id: 1,
      title: '发展方向',
      pathname: '/'
    },
    {
      id: 2,
      title: '选人用人',
      pathname: '/'
    },
    {
      id: 3,
      title: '思想保证',
      pathname: '/'
    },
    {
      id: 4,
      title: '组织建设',
      pathname: '/'
    },
    {
      id: 5,
      title: '监督检查',
      pathname: '/'
    },
    {
      id: 6,
      title: '风险防控',
      pathname: '/'
    },
    {
      id: 7,
      title: '纪律作风',
      pathname: '/'
    },
    {
      id: 8,
      title: '综治稳定',
      pathname: '/'
    },
    {
      id: 9,
      title: '群团工作',
      pathname: '/'
    },
    {
      id: 10,
      title: '民生工程',
      pathname: '/'
    },
    {
      id: 11,
      title: '全面考核',
      pathname: '/'
    }
  ]
  return (
    <div className={`${styles['navinbanner']}`}>
      {data.map((item) => (
        <Link
          to={{ pathname: item.pathname }}
          style={{ margin: '0 10px', color: '#fff', fontSize: '20px' }}
          key={item.id}
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}

export default NavInBanner
