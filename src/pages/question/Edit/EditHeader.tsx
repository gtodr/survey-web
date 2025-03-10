import React, { FC } from 'react'
import { Button, Typography, Space } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import styles from './EditHeader.module.scss'
import { useNavigate } from 'react-router-dom'
import EditToolbar from './EditToolbar'

const { Title } = Typography

const Header: FC = () => {
  const nav = useNavigate()

  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button type="link" icon={<LeftOutlined />} onClick={() => nav(-1)}>
              返回
            </Button>
            <Title className={styles.header}>标题</Title>
          </Space>
        </div>
        <div className={styles.main}>
          <EditToolbar />
        </div>
        <div className={styles.right}>
          <Space>
            <Button type="primary">保存</Button>
            <Button>发布</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default Header
