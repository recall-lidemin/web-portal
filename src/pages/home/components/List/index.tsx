import React, { FC } from 'react'
import ProTable, { ProColumns } from '@ant-design/pro-table'

const List: FC = () => {
  const columns: ProColumns[] = [
    {
      title: '序号',
      valueType: 'index'
    },
    {
      title: '标题',
      dataIndex: 'title'
    }
  ]
  const data = [
    {
      title: '123'
    }
  ]
  return <ProTable rowKey="title" dataSource={data} columns={columns} />
}

export default List
