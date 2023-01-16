import React from 'react'
import BoxNumber from '../../components/home/BoxNumber'
import Carousel from '../../components/home/Carousel'
import CourseList from '../../components/home/coursesList/CourseList'
import InfoCourse from '../../components/home/InfoCourse'
import PopularCourses from '../../components/home/PopularCourses'
import ReviewCourse from '../../components/home/ReviewCourse'
import Teachers from '../../components/home/Teachers'


const Home = () => {

  return (
    <div>
      <Carousel />
      <InfoCourse />
      <CourseList/>
      <PopularCourses />
      <BoxNumber />
      <Teachers />
      <ReviewCourse />
    </div>
  )
}

export default Home