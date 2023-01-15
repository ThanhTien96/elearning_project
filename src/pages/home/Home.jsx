import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Carousel from '../../components/home/Carousel'
import CourseList from '../../components/home/coursesList/CourseList'
import InfoCourse from '../../components/home/InfoCourse'
import PopularCourses from '../../components/home/PopularCourses'
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
      <PopularCourses />
    </div>
  )
}

export default Home