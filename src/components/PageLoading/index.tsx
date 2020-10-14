import { PageLoading } from '@ant-design/pro-layout'
import React from 'react'
import styles from './styles.less'

function Loading() {
  return (
    <div className={styles.pageLoading}>
      <PageLoading />
    </div>
  )
}

export default Loading
