import { useSelector } from 'react-redux'
import { StateType } from '../store/index'
import { UserStateType } from '../store/userReducer'

export default function useGetUserInfo() {
  const { username, nickname } = useSelector<StateType>(state => state.user) as UserStateType // 从 Redux store 中选择了 user 这部分状态（store 中注册了 userReducer，并将其命名为"user"）
  return { username, nickname }
}
