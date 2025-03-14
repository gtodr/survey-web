import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserStateType } from './userReducer'
import componentesReducer, { ComponentsStateType } from './componentsReducer'
import pageInfoReducer, { PageInfoType } from './pageInfoReducer'
export type StateType = {
  user: UserStateType
  components: ComponentsStateType
  pageInfo: PageInfoType
}

export default configureStore({
  reducer: {
    user: userReducer,
    components: componentesReducer,
    pageInfo: pageInfoReducer,

    // 其他模块
  },
})
