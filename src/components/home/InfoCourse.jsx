import { Col, Row } from 'antd'
import React from 'react';
import { BsCheckLg } from "react-icons/bs";


const InfoCourse = () => {

    return (
        <div className='container mx-auto px-5 lg:px-0'>
            <Row>
                <Col className='bg-teal-600 text-white p-5' xs={24} lg={8} >
                    <h1 className='text-3xl font-semibold mb-5 uppercase'>Khóa Học</h1>
                    <p className='text-lg'><b>Học qua dự án thực tế</b>, học đi đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay</p>
                    <ul className='lg:text-lg'>
                        <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Hơn 1000 bài tập và dự án thực tế</li>
                        <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Công nghệ cập nhật mới nhất</li>
                        <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Hình ảnh, ví dụ, bài giảng sinh động trực quan</li>
                        <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Tư duy phân tích, giải quyết vấn đề trong dự án</li>
                        <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án</li>
                        <li className='mt-1'><BsCheckLg className='mr-1 inline-block' /> Cơ hội thực tập tại các công ty lớn như FPT, Microsoft</li>
                    </ul>
                </Col>

                <Col xs={24} lg={16} >
                    <Row>
                        <Col className='bg-yellow-500 text-white p-5' xs={24} lg={12} >
                            <h1 className='text-3xl font-semibold mb-5 uppercase'>Lộ Trình Phù Hợp</h1>
                            <ul>
                                <li className='text-lg mt-2'><BsCheckLg className='mr-3 inline-block' /> Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao</li>
                                <li className='text-lg mt-2'><BsCheckLg className='mr-3 inline-block' /> Học, luyện tập code, kỹ thuật phân tích, soft skill</li>
                                <li className='text-lg mt-2'><BsCheckLg className='mr-3 inline-block' /> Huấn luyện để phát triển năng lực và niềm đam mê lập trình</li>
                                
                            </ul>
                        </Col>

                        <Col className='bg-gray-500 text-white p-5' xs={24} lg={12} >
                            <h1 className='text-3xl font-semibold mb-5 uppercase'>HỆ THỐNG HỌC TẬP</h1>
                            <ul>
                                <li className='text-lg mt-2'><BsCheckLg className='mr-3 inline-block' /> Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên</li>
                                <li className='text-lg mt-2'><BsCheckLg className='mr-3 inline-block' /> Thống kê lượt xem video, làm bài, điểm số theo chu kỳ</li>
                                <li className='text-lg mt-2'><BsCheckLg className='mr-3 inline-block' /> Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra mục tiêu học tập</li>
                                
                            </ul>
                        </Col>

                        <Col className='bg-yellow-500 text-white p-5' xs={24} lg={12} >
                            <h1 className='text-3xl font-semibold mb-5 uppercase'>GIẢNG VIÊN</h1>
                            <ul>
                                <li className='text-lg mt-2'><BsCheckLg className='mr-3 inline-block' /> Tương tác cùng mentor và giảng viên qua phần thảo luận</li>
                                <li className='text-lg mt-2'><BsCheckLg className='mr-3 inline-block' /> Review code và đưa ra các nhận xét góp ý</li>
                                <li className='text-lg mt-2'><BsCheckLg className='mr-3 inline-block' /> Chấm điểm tương tác thảo luận giữa các học viên</li>
                                
                            </ul>
                        </Col>

                        <Col className='bg-teal-500 text-white p-5' xs={24} lg={12} >
                            <h1 className='text-3xl font-semibold mb-5 uppercase'>CHỨNG NHẬN</h1>
                            <ul>
                                <li className='text-lg mt-2'><BsCheckLg className='mr-3 inline-block' /> Chấm bài và có thể vấn đáp trực tuyến để review</li>
                                <li className='text-lg mt-2'><BsCheckLg className='mr-3 inline-block' /> Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo</li>
                                <li className='text-lg mt-2'><BsCheckLg className='mr-3 inline-block' /> Kết nối CV của bạn đến với các đối tác của V learning</li>
                                
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default InfoCourse