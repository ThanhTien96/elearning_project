import { Col, Row } from 'antd';
import React, { memo, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailContent from '../../components/detail/DetailContent';
import RegisterCourse from '../../components/detail/RegisterCourse';
import Banner from '../../components/global/Banner'
import CourseList from '../../components/home/coursesList/CourseList';
import { fetchApiDetailCourseAction } from '../../redux/action/courseListAction';

const Detail = (props) => {

  const bannerRef = useRef({title: 'Thông Tin Khóa Học', text: 'tiến lên và không chần chừ !!!'})

   


  const dispatch = useDispatch();
  const params = useParams();
  console.log(params)
  useEffect(() => {
    const id = params.id
    dispatch(fetchApiDetailCourseAction(id));
  }, [params.id])

  return (
    <div>
      <Banner title={bannerRef.current.title} text={bannerRef.current.text} />
      <div className='container mx-auto'>
        <Row className='mt-14'>
          <Col xs={24} lg={16}>
            <DetailContent />
          </Col>

          <Col className='px-5' xs={24} lg={8}>
            <RegisterCourse />
          </Col>
        </Row>

        <div className='py-10'>
        <h1 className='mb-5 text-lg font-semibold border-2 inline-block rounded-3xl px-5 py-1 border-solid cursor-pointer hover:border-gray-500 transition-all duration-500' >
          Khóa học tham khảo
        </h1>
          <CourseList />
        </div>
      </div>
    </div>
  )
}

export default Detail;