import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

const Home: FC = () => {
  const nav = useNavigate()

  function handleLogin() {
    nav('/login')
  }

  return (
    <div>
      <p>Home Page</p>
      <div>
        <Button onClick={handleLogin}>登录</Button>
      </div>
    </div>
  )
}

export default Home
