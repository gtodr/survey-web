import React, { FC, useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Button, Space, Divider, message } from 'antd'
import {
  PlusOutlined,
  UnorderedListOutlined,
  StarOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { createQuestionService } from '../services/question'
import styles from './ManageLayout.module.scss'

const ManageLayout: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  const [loading, setLoading] = useState(false)
  async function handleCreateClick() {
    setLoading(true)
    const data = await createQuestionService()
    const { id } = data || {}
    if (id) {
      nav(`/question/edit/${id}`)
      message.success('创建成功！')
    }
    setLoading(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={handleCreateClick}
            disabled={loading}
            block
          >
            新建问卷
          </Button>
          <Divider />
          <Button
            type={pathname.startsWith('/manage/list') ? 'default' : 'text'}
            size="large"
            icon={<UnorderedListOutlined />}
            onClick={() => nav('/manage/list')}
            block
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/star') ? 'default' : 'text'}
            size="large"
            icon={<StarOutlined />}
            onClick={() => nav('/manage/star')}
            block
          >
            星标问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/trash') ? 'default' : 'text'}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => nav('/manage/trash')}
            block
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}

export default ManageLayout
