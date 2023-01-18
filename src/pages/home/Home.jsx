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
      <div className='container mx-auto px-5 md:px-0 mt-10'>
        <h1 className='mb-5 text-teal-600 text-lg font-semibold border-2 inline-block rounded-3xl px-5 py-1 border-solid cursor-pointer hover:border-gray-500 transition-all duration-500' >
          Khóa Học Tùy Chọn
        </h1>
        <CourseList />
      </div>
      <PopularCourses />
      <BoxNumber />
      <Teachers />
      <ReviewCourse />
    </div>
  )
}

export default Home