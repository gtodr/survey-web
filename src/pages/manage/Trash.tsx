import React, { FC, useState } from 'react'
import { useTitle } from 'ahooks'
import styles from './common.module.scss'
import { Typography, Table, Empty, Tag, Button, Space, Modal, Popconfirm } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const { Title } = Typography

const rawQuestionLists = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: true,
    answerCount: 5,
    createdAt: '2月18 12:34',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStar: true,
    answerCount: 5,
    createdAt: '2月18 12:34',
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStar: true,
    answerCount: 5,
    createdAt: '2月18 12:34',
  },
]

const Trash: FC = () => {
  useTitle('回收站')

  function del() {
    alert('删除')

    // Modal.confirm({
    //   title: '确认彻底删除该问卷？',
    //   icon: <ExclamationCircleOutlined />,
    //   content: '删除以后不可以找回',
    //   onOk: () => {
    //     // 在这里添加删除逻辑
    //     console.log('需要删除的问卷id：', selectedIds)
    //   },
    // })
  }

  const [questionList] = useState(rawQuestionLists)
  const [selectedIds, setSelectedIds] = useState<string[]>([]) // 记录选中的 id
  const tableColumns = [
    {
      title: '标题',
      dataIndex: 'title',
      // key: 'title', // 循环列的 key ，它会默认取 dataIndex 的值
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>
      },
    },
    {
      title: '答卷',
      dataIndex: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
    },
  ]
  const TableElem = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button
            type="primary"
            disabled={selectedIds.length === 0}
            // onClick={recover}
          >
            恢复
          </Button>
          <Popconfirm
            icon={<ExclamationCircleOutlined />}
            title="确定删除该问卷？"
            okText="确定"
            cancelText="取消"
            // onConfirm={del}
          >
            <Button danger disabled={selectedIds.length === 0}>
              彻底删除
            </Button>
          </Popconfirm>
        </Space>
      </div>
      <div style={{ border: '1px solid #e8e8e8' }}>
        <Table
          dataSource={questionList}
          columns={tableColumns}
          pagination={false}
          rowKey={q => q._id}
          rowSelection={{
            type: 'checkbox',
            onChange: selectedRowKeys => {
              setSelectedIds(selectedRowKeys as string[])
            },
          }}
        />
      </div>
    </>
  )

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.left}>
            <Title level={3}>回收站</Title>
          </div>
          <div className={styles.right}>搜索</div>
        </div>
        <div className={styles.content}>
          {questionList.length === 0 ? <Empty description="暂无数据" /> : TableElem}
        </div>
        <div className={styles.footer}>分页</div>
      </div>
    </div>
  )
}

export default Trash
