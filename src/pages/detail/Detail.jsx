import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailCourse from '../../components/detail/DetailCourse';
import Banner from '../../components/global/Banner'
import { fetchApiDetailCourseAction } from '../../redux/action/courseListAction';

const Detail = (props) => {

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchApiDetailCourseAction(params.id))
  }, [])
  

  const title = 'Thông Tin Khóa Học';
  const text = 'tiến lên và không chần chừ !!!';
  return (
    <div>
        <Banner title={title} text={text} />
        <DetailCourse />
    </div>
  )
}

export default Detail