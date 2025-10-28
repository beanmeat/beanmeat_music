import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'

import { shallowEqual } from 'react-redux'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { changeCountAction } from '@/store/modules/counter'

function App() {
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()
  function handleChange() {
    dispatch(changeCountAction(123))
  }
  return (
    <div className="App">
      <h2>当前计数： {count}</h2>
      <button onClick={handleChange}>修改Count</button>
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">我的关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
