import { Col, Row } from 'antd';
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailContent from '../../components/detail/DetailContent';
import RegisterCourse from '../../components/detail/RegisterCourse';
import Banner from '../../components/global/Banner'
import CourseList from '../../components/home/coursesList/CourseList';
import { fetchApiDetailCourseAction } from '../../redux/action/courseListAction';

const Detail = (props) => {

<<<<<<< HEAD
  const bannerRef = useRef({ title: 'Thông Tin Khóa Học', text: 'tiến lên và không chần chừ !!!' })
=======
  const bannerRef = useRef({title: 'Thông Tin Khóa Học', text: 'tiến lên và không chần chừ !!!'})
>>>>>>> 1f25082 ('updateSearchPage')

  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    const id = params.id
    dispatch(fetchApiDetailCourseAction(id));

    window.scrollTo(0, 0);

  }, [params.id])

  return (
    <div>
      <Banner bannerContent={bannerRef.current} />
      <div className='container mx-auto'>
        <Row className='mt-14'>
          <Col xs={24} lg={16}>
            <DetailContent />
          </Col>

          <Col className='px-5' xs={24} lg={8}>
            <RegisterCourse />
          </Col>
        </Row>

        <div className='py-10 px-5 lg:px-0'>
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