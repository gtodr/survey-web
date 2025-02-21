import React, { FC } from 'react'
import { useTitle } from 'ahooks'

const Star: FC = () => {
  useTitle('星标')

  return <div>Star page</div>
}

export default Star
