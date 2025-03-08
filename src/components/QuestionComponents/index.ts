import type { FC } from 'react'
import QuestionInputConf, { QuestionInputPropsType } from './QuestionInput'
import QuestionTitleConf, { QuestionTitlePropsType } from './QuestionTitle'

export type ComponentPropsType = QuestionInputPropsType & QuestionTitlePropsType

// 统一，组件的配置 type
export type ComponentConfType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  // PropComponent: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
  // StatComponent?: FC<ComponentStatPropsType>
}

// 全部的组件配置的列表
const componentConfList: ComponentConfType[] = [
  QuestionInputConf,
  QuestionTitleConf,
  //   QuestionParagraphConf,
  //   QuestionInfoConf,
  //   QuestionTextareaConf,
  //   QuestionRadioConf,
  //   QuestionCheckboxConf,
]

export function getComponentConfByType(type: string) {
  return componentConfList.find(c => c.type === type)
}
