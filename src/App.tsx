import React from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现</Link>
        <Link to="/aa">发现</Link>
        <Link to="/vv">发现</Link>
        <Link to="/cc">发现</Link>
        <Link to="/dd">发现</Link>
      </div>
      <div className="main">{useRoutes(routes)}</div>
    </div>
  )
}

export default App
