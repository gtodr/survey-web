import Component from './Component'
import PropComponent from './PropComponent'
import { QuestionTitleDefaultProps } from './interface'

export * from './interface'

// Title 组件的配置
export default {
  title: '标题',
  type: 'questionTitle', // 和后端统一好
  Component,
  PropComponent,
  defaultProps: QuestionTitleDefaultProps,
}
