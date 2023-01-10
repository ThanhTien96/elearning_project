import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/global/Footer'
import Header from '../../components/global/Header'

const HomeTemplate = () => {
  return (
    <div>
        <Header/>
        <div className='py-96'></div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeTemplate