import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const UserTemplate = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default UserTemplate