import React, { FC, useCallback } from 'react'
import { componentConfGroup, ComponentConfType } from '../../../components/QuestionComponents'
import { Typography } from 'antd'
import { addComponent } from '../../../store/componentsReducer'
import { useDispatch } from 'react-redux'
import styles from './ComponentLib.module.scss'
import { nanoid } from '@reduxjs/toolkit'

const { Title } = Typography

function genComponent(c: ComponentConfType) {
  const dispatch = useDispatch()
  const { title, type, Component, defaultProps } = c

  const handlClick = useCallback(() => {
    dispatch(
      addComponent({
        fe_id: nanoid(),
        title,
        type,
        props: defaultProps,
      })
    )
  }, [])

  // function handlClick() {
  //   dispatch(
  //     addComponent({
  //       fe_id: nanoid(),
  //       title,
  //       type,
  //       props: defaultProps,
  //     })
  //   )
  // }

  return (
    <div key={type} className={styles.wrapper} onClick={handlClick}>
      <div className={styles.component}>
        <Component />
      </div>
    </div>
  )
}

const Lib: FC = () => {
  return (
    <div>
      {componentConfGroup.map((group, index) => {
        return (
          <div key={group.groupId}>
            <Title level={3} style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0' }}>
              {group.groupName}
            </Title>
            <div>{group.components.map(c => genComponent(c))}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Lib
