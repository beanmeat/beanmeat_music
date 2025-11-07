import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import hyRequest from '@/service'

interface IProps {
  children?: ReactNode
}

export interface IBannerData {
  targetId: number
  bigImageUrl: string
  imageUrl: string
  targetType: number
  typeTitle: string
  s_ctrp: string
  url: string
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBannerData[]>()
  // 测试网络请求
  useEffect(() => {
    hyRequest
      .get({
        url: '/banner'
      })
      .then((res: any) => setBanners(res.banners))
  }, [])
  return (
    <div>
      {banners?.map((item, index) => {
        return <div key={index}>{item.imageUrl}</div>
      })}
    </div>
  )
}

export default memo(Recommend)
