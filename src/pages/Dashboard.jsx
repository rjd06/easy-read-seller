import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='dashboard'>

      <ul>
        <li><NavLink to={"my_books"}>Books</NavLink></li>
        <li><NavLink to={"publish_book"}>Publish Book</NavLink></li>
        <li><NavLink to={"orders"}>Orders</NavLink></li>
        <li><NavLink to={"profile"}>Profile</NavLink></li>
        <li><NavLink to={"settings"}>Settings</NavLink></li>
        
      </ul>

      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Dashboard