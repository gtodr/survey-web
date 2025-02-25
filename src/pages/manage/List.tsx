import React, { useState, FC } from 'react'
import QuestionCard from '../../components/QuestionCard'
import styles from './common.module.scss'
import { Typography, Spin, Empty } from 'antd'
import { useTitle } from 'ahooks'
import ListSearch from '../../components/ListSearch'

const rawQuestionLists = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: '2月18 12:34',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createdAt: '2月18 12:34',
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: '2月18 12:34',
  },
  {
    _id: 'q4',
    title: '问卷4',
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createdAt: '2月18 12:34',
  },
]

const List: FC = () => {
  useTitle('UD问卷 - 我的问卷')

  const [questionList] = useState(rawQuestionLists)
  const { Title } = Typography

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
        {questionList.length > 0 &&
          questionList.map(q => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className={styles.footer}>上划加载</div>
    </div>
  )
}

export default List
