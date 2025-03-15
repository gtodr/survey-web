import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { useDispatch } from 'react-redux'
import { resetComponents } from '../store/componentsReducer'
import { getQuestionService } from '../services/question'
import { useEffect } from 'react'
import { resetPageInfo } from '../store/pageInfoReducer'

export default function useLoadQuestionData() {
  const { id = '' } = useParams()
  const dispatch = useDispatch()
  // ajax 加载
  const { data, loading, error, run } = useRequest(
    async (id: string) => {
      if (!id) throw new Error('没有问卷id')
      const data = getQuestionService(id)
      return data
    },
    {
      manual: true,
    }
  )

  // 根据获取的 data 设置 redux store
  useEffect(() => {
    if (!data) return

    const {
      title = '',
      desc = '',
      js = '',
      css = '',
      isPublished = false,
      componentList = [],
    } = data

    // 获取默认的 selectedId
    let selectedId = ''
    if (componentList.length > 0) {
      selectedId = componentList[0].fe_id // 默认选中第一个组件
    }

    // 把 componentList 存储到 Redux store 中
    dispatch(
      resetComponents({
        componentList,
        selectedId,
        copiedComponent: null,
      })
    )

    // 把 pageInfo 存储到 redux store
    dispatch(
      resetPageInfo({
        title,
        desc,
        js,
        css,
        isPublished,
      })
    )
  }, [data])

  // 判断 id 变化，执行 ajax 加载问卷数据
  useEffect(() => {
    run(id)
  }, [id])

  return { loading, error }
}
