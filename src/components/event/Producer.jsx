import { Col, Row } from 'antd'
import React from 'react';
import styleImg from './Producer.module.css';

const Producer = () => {
    return (
        <div className={styleImg.producer}>
            <div className='container mx-auto'>
                <h1 className='text-center font-bold text-yellow-500 text-3xl mb-2'>CÁC NHÀ ĐỒNG SÁNG TẠO</h1>
                <Row>
                    <Col className='px-10 lg:px-5 py-3' xs={24} md={12} lg={6}>
                        <div className='text-white'>
                            <img className='w-full block' src={require('../../assets/avatar/dadMoon.jpg')} alt="..." />
                            <h2 className='text-lg font-semibold mb-1'>NGUYỄN NHẬT</h2>
                            <p className='text-xl'>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </Col>

                    <Col className='px-10 lg:px-5 py-3' xs={24} md={12} lg={6}>
                        <div className='text-white'>
                            <img className='w-full block' src={require('../../assets/avatar/menBor.jpg')} alt="..." />
                            <h2 className='text-lg font-semibold mb-1'>NGUYỄN NHẬT NAM</h2>
                            <p className='text-xl'>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </Col>

                    <Col className='px-10 lg:px-5 py-3' xs={24} md={12} lg={6}>
                        <div className='text-white'>
                            <img className='w-full block' src={require('../../assets/avatar/Slaham.jpg')} alt="..." />
                            <h2 className='text-lg font-semibold mb-1'>NGUYỄN NAM</h2>
                            <p className='text-xl'>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </Col>

                    <Col className='px-10 lg:px-5 py-3' xs={24} md={12} lg={6}>
                        <div className='text-white'>
                            <img className='w-full block' src={require('../../assets/avatar/andersan.jpg')} alt="..." />
                            <h2 className='text-lg font-semibold mb-1'>JHONNY ĐẶNG</h2>
                            <p className='text-xl'>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </Col>

                    <Col className='px-10 lg:px-5 py-3' xs={24} md={12} lg={6}>
                        <div className='text-white'>
                            <img className='w-full block' src={require('../../assets/avatar/gadi.jpg')} alt="..." />
                            <h2 className='text-lg font-semibold mb-1'>NGÔ HENRY</h2>
                            <p className='text-xl'>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </Col>

                    <Col className='px-10 lg:px-5 py-3' xs={24} md={12} lg={6}>
                        <div className='text-white'>
                            <img className='w-full block' src={require('../../assets/avatar/hoangNam.jpg')} alt="..." />
                            <h2 className='text-lg font-semibold mb-1'>VƯƠNG PHẠM VN</h2>
                            <p className='text-xl'>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </Col>

                    <Col className='px-10 lg:px-5 py-3' xs={24} md={12} lg={6}>
                        <div className='text-white'>
                            <img className='w-full block' src={require('../../assets/avatar/savani.jpg')} alt="..." />
                            <h2 className='text-lg font-semibold mb-1'>ROBER IMACU</h2>
                            <p className='text-xl'>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </Col>

                    <Col className='px-10 lg:px-5 py-3' xs={24} md={12} lg={6}>
                        <div className='text-white'>
                            <img className='w-full block' src={require('../../assets/avatar/instrutor12.90a80820.jpg')} alt="..." />
                            <h2 className='text-lg font-semibold mb-1'>KHOA PUG</h2>
                            <p className='text-xl'>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default Producer