import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './CourseList.scss'
import { fetchApiCoursesWithCategoryAction } from '../../../redux/action/courseListAction';
import CoursesSlide from './CoursesSlide';


const CourseList = (props) => {
  const dispatch = useDispatch();

  const categoryList = useSelector(state => state.courseList.categoryList);
  const coursesList = useSelector(state => state.courseList.courseCategory);

  const onChange = (key) => {
    dispatch(fetchApiCoursesWithCategoryAction(key));
  };

  useEffect(() => {
    dispatch(fetchApiCoursesWithCategoryAction('BackEnd'));
  }, [])


  // render tabs content
  const items = categoryList.map(ele => {
    return {
      key: ele.maDanhMuc,
      label: <h1 className='lg:text-lg font-semibold hover:text-green-600 transition-all duration-300'>{ele.tenDanhMuc}</h1>,
      children: <CoursesSlide item={coursesList} />,
    }
  });

  return (
    <div className='container mx-auto px-5 md:px-0 mt-10'>
      <h1 className='mb-5 text-teal-600 text-lg font-semibold border-2 inline-block rounded-3xl px-5 py-1 border-solid cursor-pointer hover:border-gray-500 transition-all duration-500' >
        Khóa Học Tùy Chọn
      </h1>
      <Tabs size='large' defaultActiveKey={categoryList[0]?.maDanhMuc} items={items} onChange={onChange} />
    </div>
  )
}

export default CourseList