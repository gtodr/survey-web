import React, { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'

const Edit: FC = () => {
  const { data, loading } = useLoadQuestionData()

  return (
    <div>
      <p>Edit page</p>
      {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}
    </div>
  )
}

export default Edit
