import { CalendarOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { Col, Pagination, Row } from 'antd';
import React, { useEffect } from 'react';
import { FaSignal, FaTag } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiPopularCoursesAction } from '../../redux/action/courseListAction';
import { truncateText } from '../../utils/truncateText';
import styles from './PopularCourses.module.scss';

const PopularCourses = () => {

    const dispatch = useDispatch();
    const { popularCourses } = useSelector(state => state.courseList);
    console.log(popularCourses)

    useEffect(() => {
        dispatch(fetchApiPopularCoursesAction());
    }, [])

    // onchange pagination call api
    const handleGetPage = (page) => {
        dispatch(fetchApiPopularCoursesAction(page));
    }


    return (
        <div className='container mx-auto lg:py-8 px-8 lg:px-0'>
            <h1 className='text-teal-600 text-lg font-semibold border-2 inline-block rounded-3xl px-5 py-1 border-solid cursor-pointer hover:border-gray-500 transition-all duration-500' >
                Khóa Học Tham Khảo
            </h1>

            <Row>
                {
                    popularCourses?.items.map((ele, index) => {
                        return (
                            <Col xs={24} md={12} lg={6} key={index} className={styles.itemsCard}>
                                <div className={styles.items}>
                                    <div className={styles.itemImg}>
                                        <span>Yêu Thích</span>
                                        <div className={styles.divImg}>
                                            <img src={ele.hinhAnh} alt="..." />
                                        </div>
                                        <h1>{ele.tenKhoaHoc}</h1>
                                    </div>
                                    <div className='px-5 mt-5'>
                                        <h3 className='h-14 bg-white overflow-hidden text-lg font-medium mt-2 cursor-pointer hover:text-teal-500 transition-all duration-300'>
                                            {truncateText(ele.moTa, 57)}
                                        </h3>
                                        <div className='flex justify-around text-lg font-medium text-gray-500 mt-3'>
                                            <div className='flex items-center'>
                                                <FieldTimeOutlined className='mr-1 text-green-600' />
                                                <span>6 Giờ</span>
                                            </div>
                                            <div className='flex items-center'>
                                                <CalendarOutlined className='mr-1 text-red-600' />
                                                <span>8 Tuần</span>
                                            </div>
                                            <div className='flex items-center'>
                                                <FaSignal className='mr-1 text-teal-600' />
                                                <span>Tất Cả</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-around py-3 border-t border-solid border-gray-300 mt-6'>
                                        <div className='flex items-center '>
                                            <div className={styles.avatarAdmin}>
                                                <img src={require('../../assets/avatar/avatar2.bb9626e2.png')} alt="..." />
                                            </div>
                                            <h3 className='text-lg text-gray-500 ml-2 font-medium'>Admas Kinfu</h3>
                                        </div>
                                        <div>
                                            <p className='decoration-slice line-through text-gray-500'>900.000 <sup>đ</sup></p>
                                            <p className='text-teal-600 text-lg font-medium'>600.000 <sup>đ</sup> <FaTag className='text-red-500 inline-block' /></p>
                                        </div>
                                    </div>

                                    <div className={index % 2 === 0 ? styles.hoverLeftSide : styles.hoverRightSide}>
                                        <div className='flex items-center mt-3'>
                                            <img width={60} src={require('../../assets/avatar/emoji.6d1b7051.png')} alt="..." />
                                            <h3 className='ml-3 text-lg font-medium text-gray-500'>Admas Kinfu</h3>
                                        </div>
                                        <h1 className={styles.CourseName}>
                                            {ele.tenKhoaHoc}
                                        </h1>
                                        <p className={styles.text}>
                                            {truncateText(ele.moTa, 200)}
                                        </p>
                                        <div className='flex justify-around text-lg font-medium text-gray-500 mt-3'>
                                            <div className='flex items-center'>
                                                <FieldTimeOutlined className='mr-1 text-green-600' />
                                                <span>8 Giờ</span>
                                            </div>
                                            <div className='flex items-center'>
                                                <CalendarOutlined className='mr-1 text-red-600' />
                                                <span>8 Tuần</span>
                                            </div>
                                            <div className='flex items-center'>
                                                <FaSignal className='mr-1 text-teal-600' />
                                                <span>Tất Cả</span>
                                            </div>
                                        </div>
                                        <button className={styles.btnDetail}> Xem Chi Tiết</button>
                                    </div>

                                </div>
                            </Col>
                        )
                    })
                }
            </Row>

            <div className='text-center mt-5'>
                <Pagination onChange={handleGetPage} defaultCurrent={1} total={popularCourses?.totalCount} showSizeChanger={false}/>
            </div>

        </div>
    )
}

export default PopularCourses