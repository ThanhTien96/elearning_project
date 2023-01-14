import React from 'react'
import { Tabs } from 'antd';
import { useSelector } from 'react-redux';
import './CourseList.css'


const CourseList = (props) => {

  const categoryList = useSelector(state => state.courseList.categoryList);

  console.log(categoryList);

  const onChange = (key) => {
    console.log(key);
  };

  // render tabs content
  const items = categoryList.map(ele => {
    return {
      key: ele.maDanhMuc,
      label: <h1 className='font-semibold hover:text-teal-500 transition-all duration-300'>{ele.tenDanhMuc}</h1>,
      children: `Content of Tab Pane 2`,
    }
  });

  return (
    <div className='container mx-auto'>
      <Tabs size='large' defaultActiveKey={categoryList[0]?.maDanhMuc} items={items} onChange={onChange} />
    </div>
  )
}

export default CourseList