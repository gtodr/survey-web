import React, { FC, useState } from 'react'
import { useTitle } from 'ahooks'
import QuestionCard from '../../components/QuestionCard'
import styles from './common.module.scss'
import { Typography, Spin, Empty } from 'antd'
import ListSearch from '../../components/ListSearch'

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

const Star: FC = () => {
  useTitle('星标问卷')

  const [questionList] = useState(rawQuestionLists)
  const { Title } = Typography

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 ? (
          <Empty description="暂无数据" />
        ) : (
          questionList.map(q => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })
        )}
      </div>
      <div className={styles.footer}>分页</div>
    </div>
  )
}

export default Star
