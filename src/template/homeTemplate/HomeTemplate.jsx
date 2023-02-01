import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import BackToTop from '../../components/global/BackToTop'
import Footer from '../../components/global/Footer'
import Header from '../../components/global/Header'
import { fetchApiCategoryListAction } from '../../redux/action/courseListAction'

const HomeTemplate = () => {

  const dispatch = useDispatch();

  // call api lấy danh mục khóa học
  useEffect(() => {
    dispatch(fetchApiCategoryListAction);
  }, [])  

  return (
    <div className='relative'>
        <Header/>
        <Outlet/>
        <Footer/>
        <BackToTop />
    </div>
  )
}

export default HomeTemplate