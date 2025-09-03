import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "../css/dashboard.css"

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="dashboard-header">
        <h2>Partner Panel</h2>
      </div>

      <div className="dashboard-body">
        <ul>
          <li><NavLink to={"my_books"}>Books</NavLink></li>
          <li><NavLink to={"publish_book"}>Publish Book</NavLink></li>
          <li><NavLink to={"orders"}>Orders</NavLink></li>
          <li><NavLink to={"profile"}>Profile</NavLink></li>
          <li><NavLink to={"settings"}>Settings</NavLink></li>
        </ul>

        <main>
          <Outlet />
        </main>
      </div>

    </div>
  )
}

export default Dashboard