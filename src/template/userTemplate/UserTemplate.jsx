import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/global/Header'

const UserTemplate = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default UserTemplate