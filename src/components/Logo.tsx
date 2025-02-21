import React, { FC } from 'react'
import { Space, Typography } from 'antd'
import { BookOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

const { Title } = Typography

const Logo: FC = () => {
  //   const { username } = useGetUserInfo()

  //   const [pathname, setPathname] = useState(HOME_PATHNAME)
  //   useEffect(() => {
  //     if (username) {
  //       setPathname(MANAGE_INDEX_PATHNAME)
  //     }
  //   }, [username])

  return (
    <div className={styles.container}>
      <Link to="/">
        <Space>
          <Title>
            <BookOutlined />
          </Title>
          <Title>UD问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo
