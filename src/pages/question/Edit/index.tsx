import React, { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
import styles from './index.module.scss'

const Edit: FC = () => {
  const { data, loading } = useLoadQuestionData()

  return (
    <div className={styles.container}>
      {/* <p>Edit page</p>
      {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>} */}
      <div>header</div>
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>left</div>
          <div className={styles.main}>
            <div className={styles['canvas-wrapper']}>
              <div style={{ height: '900px', padding: '12px' }}>canvas</div>
            </div>
          </div>
          <div className={styles.right}>right</div>
        </div>
      </div>
    </div>
  )
}

export default Edit
