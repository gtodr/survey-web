import React, { ChangeEvent, FC, useState } from 'react'
import { Button, Typography, Space, Input } from 'antd'
import { LeftOutlined, EditOutlined } from '@ant-design/icons'
import styles from './EditHeader.module.scss'
import { useNavigate } from 'react-router-dom'
import EditToolbar from './EditToolbar'
import { changePageTitle } from '../../../store/pageInfoReducer'
import useGetPageInfo from '../../../hooks/useGetPageInfo'
import { useDispatch } from 'react-redux'

const { Title } = Typography

const TitleEle: FC = () => {
  const { title } = useGetPageInfo()
  const dispatch = useDispatch()
  const [editState, SetEditState] = useState(false)

  // TODO: 无法删除最后一个字
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newTitle = event.target.value.trim()
    if (!newTitle) return
    dispatch(changePageTitle(newTitle))
  }

  if (editState) {
    return (
      <Input
        value={title}
        onChange={handleChange}
        onPressEnter={() => SetEditState(false)}
        onBlur={() => SetEditState(false)}
      />
    )
  }

  return (
    <Space>
      <Title>{title}</Title>
      <Button icon={<EditOutlined />} type="text" onClick={() => SetEditState(true)} />
    </Space>
  )
}

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
            <Title className={styles.header}>
              <TitleEle />
            </Title>
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
