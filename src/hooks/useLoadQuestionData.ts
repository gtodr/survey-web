import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getQuestionService } from '../services/question'

export default function useLoadQuestionData() {
  const { id = '' } = useParams()
  async function load() {
    const data = await getQuestionService(id)
    return data
  }
  const { data, loading, error } = useRequest(load)
  return { data, loading, error }
}
