import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import useLoadUserData from '../hooks/useLoadUserData'
import useNavPage from '../hooks/useNavPage'
import { wait } from '@testing-library/user-event/dist/utils'

const QuestionLayout: FC = () => {
  const { waitingUserData } = useLoadUserData()
  useNavPage(waitingUserData)

  return (
    <>
      <div>{!waitingUserData && <Outlet />}</div>
    </>
  )
}

export default QuestionLayout
