import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/global/Header';

const AdminTemplate = () => {
  return (
    <div>
        <Header />
        <h1>Admin Template</h1>
        <Outlet/>
    </div>
  )
}

export default AdminTemplate