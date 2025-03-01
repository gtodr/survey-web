import React, { FC } from 'react'
import QuestionCard from '../../components/QuestionCard'
import styles from './common.module.scss'
import { Typography, Spin, Empty } from 'antd'
import { useTitle } from 'ahooks'
import ListSearch from '../../components/ListSearch'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'

const List: FC = () => {
  useTitle('UD问卷 - 我的问卷')

  const { Title } = Typography

  const { data = {}, loading } = useLoadQuestionListData()
  const { list = [], total = 0 } = data

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {loading && <Spin />}
        {list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className={styles.footer}>上划加载</div>
    </div>
  )
}

export default List
