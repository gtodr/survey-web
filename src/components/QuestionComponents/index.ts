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

// 组件分组
export const componentConfGroup = [
  {
    groupId: 'textGroup',
    groupName: '文本显示',
    components: [
      // QuestionInfoConf,
      QuestionTitleConf,
      // QuestionParagraphConf
    ],
  },
  {
    groupId: 'inputGroup',
    groupName: '用户输入',
    components: [
      QuestionInputConf,
      // QuestionTextareaConf
    ],
  },
  // {
  //   groupId: 'chooseGroup',
  //   groupName: '用户选择',
  //   components: [QuestionRadioConf, QuestionCheckboxConf],
  // },
]

export function getComponentConfByType(type: string) {
  return componentConfList.find(c => c.type === type)
}
