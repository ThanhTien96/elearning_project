import { Col, Row } from 'antd';
import React from 'react';
import { CalendarOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { FaSignal } from 'react-icons/fa';
import styles from './SearchResults.module.scss'
import clsx from 'clsx';

const SearchResults = () => {
    return (
        <div>
            <h1 className={styles.resultTitle}>Hiện Thị 3 Kết Quả</h1>
            <Row>
                <Col className={styles.resultItem} xs={24} md={12} lg={24}>
                    <Row>
                        <Col xs={24} lg={8}>
                            <div className='w-full h-48 overflow-hidden'>
                                <img className='w-full object-cover object-contain' src={require('../../assets/demoCourseDetailgp01.jpg')} alt="...." />
                            </div>
                        </Col>
                        <Col className='lg:px-5 relative' xs={24} lg={16}>
                            <h1 className='mt-3 lg:mt-0 text-lg lg:text-xl font-semibold mb-5'>Lập Trình Web ASP.NET 2</h1>
                            <p className='text-lg font-medium text-gray-500'>Django là một trong số những web framework bậc cao...</p>
                            <div className='flex text-lg font-medium text-gray-500 mt-3'>
                                <div className='flex items-center mr-5'>
                                    <FieldTimeOutlined className='mr-1 text-green-600' />
                                    <span>8 Giờ</span>
                                </div>
                                <div className='flex items-center mr-5'>
                                    <CalendarOutlined className='mr-1 text-red-600' />
                                    <span>8 Tuần</span>
                                </div>
                                <div className='flex items-center'>
                                    <FaSignal className='mr-1 text-teal-600' />
                                    <span>Tất Cả</span>
                                </div>
                            </div>
                            <div className={styles.searchSeeMore}>
                                <button className={styles.btnSearchSeeMore}><span>Xem Thêm</span></button>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col className={styles.resultItem} xs={24} md={12} lg={24}>
                    <Row>
                        <Col xs={24} lg={8}>
                            <div className='w-full h-48 overflow-hidden'>
                                <img className='w-full object-cover object-contain' src={require('../../assets/demoCourseDetailgp01.jpg')} alt="...." />
                            </div>
                        </Col>
                        <Col className='lg:px-5 relative' xs={24} lg={16}>
                            <h1 className='mt-3 lg:mt-0 text-lg lg:text-xl font-semibold mb-5'>Lập Trình Web ASP.NET 2</h1>
                            <p className='text-lg font-medium text-gray-500'>Django là một trong số những web framework bậc cao...</p>
                            <div className='flex text-lg font-medium text-gray-500 mt-3'>
                                <div className='flex items-center mr-5'>
                                    <FieldTimeOutlined className='mr-1 text-green-600' />
                                    <span>8 Giờ</span>
                                </div>
                                <div className='flex items-center mr-5'>
                                    <CalendarOutlined className='mr-1 text-red-600' />
                                    <span>8 Tuần</span>
                                </div>
                                <div className='flex items-center'>
                                    <FaSignal className='mr-1 text-teal-600' />
                                    <span>Tất Cả</span>
                                </div>
                            </div>
                            <div className={styles.searchSeeMore}>
                                <button className={styles.btnSearchSeeMore}><span>Xem Thêm</span></button>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col className={styles.resultItem} xs={24} md={12} lg={24}>
                    <Row>
                        <Col xs={24} lg={8}>
                            <div className='w-full h-48 overflow-hidden'>
                                <img className='w-full object-cover object-contain' src={require('../../assets/demoCourseDetailgp01.jpg')} alt="...." />
                            </div>
                        </Col>
                        <Col className='lg:px-5 relative' xs={24} lg={16}>
                            <h1 className='mt-3 lg:mt-0 text-lg lg:text-xl font-semibold mb-5'>Lập Trình Web ASP.NET 2</h1>
                            <p className='text-lg font-medium text-gray-500'>Django là một trong số những web framework bậc cao...</p>
                            <div className='flex text-lg font-medium text-gray-500 mt-3'>
                                <div className='flex items-center mr-5'>
                                    <FieldTimeOutlined className='mr-1 text-green-600' />
                                    <span>8 Giờ</span>
                                </div>
                                <div className='flex items-center mr-5'>
                                    <CalendarOutlined className='mr-1 text-red-600' />
                                    <span>8 Tuần</span>
                                </div>
                                <div className='flex items-center'>
                                    <FaSignal className='mr-1 text-teal-600' />
                                    <span>Tất Cả</span>
                                </div>
                            </div>
                            <div className={styles.searchSeeMore}>
                                <button className={styles.btnSearchSeeMore}><span>Xem Thêm</span></button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default SearchResults