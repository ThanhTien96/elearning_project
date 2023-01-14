import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Carousel from '../../components/home/Carousel'
import CourseList from '../../components/home/CourseList'
import InfoCourse from '../../components/home/InfoCourse'
import { fetchApiCategoryListAction } from '../../redux/action/courseListAction'

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiCategoryListAction);
  }, [])  


  return (
    <div>
      <Carousel />
      <InfoCourse />
      <CourseList/>
    </div>
  )
}

export default Home