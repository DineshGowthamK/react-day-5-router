import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Class() {
  return <>
  <div>
    Nested Route Example
    <ul>
      <li><Link to='user' >User</Link></li>
      <li><Link to='query'>Query</Link></li>
    </ul>
    <Outlet/>
  </div>
  </>
}

export default Class