import React, { FC, MouseEvent } from 'react'
import { Spin } from 'antd'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import styles from './EditCanvas.module.scss'
import classNames from 'classnames'
import { getComponentConfByType } from '../../../components/QuestionComponents'
import { ComponentInfoType, changeSelectedId } from '../../../store/componentsReducer'
import { useDispatch } from 'react-redux'

// import QuestionTitle from '../../../components/QuestionComponents/QuestionTitle/Component'
// import QuestionInput from '../../../components/QuestionComponents/QuestionInput/Component'

type PropsType = {
  loading: boolean
}

function genComponent(componentInfo: ComponentInfoType) {
  const { type, props } = componentInfo // 每个组件的信息，是从 redux store 获取的（服务端获取）

  const componentConf = getComponentConfByType(type)
  if (componentConf == null) return null

  const { Component } = componentConf
  return <Component {...props} />
}

const EditCanvas: FC<PropsType> = (props: PropsType) => {
  const { loading } = props

  const dispatch = useDispatch()
  // 点击组件，选中
  function handleClick(event: MouseEvent, id: string) {
    event.stopPropagation() // 阻止冒泡 ?点击canvas不会冒泡到main
    dispatch(changeSelectedId(id))
  }

  const { componentList, selectedId } = useGetComponentInfo()
  //   console.log(componentList)

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <Spin />
      </div>
    )
  }

  return (
    <div className={styles.canvas}>
      {componentList.map(c => {
        const { fe_id } = c

        // 拼接 class name
        const wrapperDefaultClassName = styles['component-wrapper']
        const selectedClassName = styles.selected
        // const lockedClassName = styles.locked
        const wrapperClassName = classNames({
          [wrapperDefaultClassName]: true,
          [selectedClassName]: fe_id === selectedId,
          //   [lockedClassName]: isLocked,
        })

        return (
          <div key={fe_id} className={wrapperClassName} onClick={e => handleClick(e, fe_id)}>
            <div className={styles.component}>{genComponent(c)}</div>
          </div>
        )
      })}
      {/* <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionTitle />
        </div>
      </div>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionInput />
        </div>
      </div> */}
    </div>
  )
}

export default EditCanvas
