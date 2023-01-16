import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
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
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeTemplate