import React from 'react'
import { Outlet } from "react-router";
const Dashboard = () => {
  return (
    <>
    <div>Dashboard</div>
    <Outlet />
    </>
  )
}

export default Dashboard