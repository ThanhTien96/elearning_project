import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/global/Header'
import Footer from '../../components/global/Footer'

const UserTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default UserTemplate