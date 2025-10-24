import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Alblum: FC<IProps> = () => {
  return <div>Alblum</div>
}

export default memo(Alblum)
