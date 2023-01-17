import { Col, Rate, Row } from 'antd'
import React from 'react'
import { FaGraduationCap } from 'react-icons/fa';
import styles from './DetailContent.module.scss';
import { BsCheckLg } from "react-icons/bs";
import ContentCourse from './lessonContent/LessonContent';
import LessonContent from './lessonContent/LessonContent';

const DetailContent = () => {
    return (
        <div>
            <div className={styles.detailContent}>
                <h1 className={styles.CourseName}>BC28 - Lập Trình Full Stackk</h1>
                <div className={styles.itemsTop}>
                    <div className='flex items-center justify-start mt-5 lg:mt-0'>
                        <img className='w-20 h-20 object-cover object-center rounded-full' src={require('../../assets/avatar/hoangNam.jpg')} alt="...." />
                        <div className='ml-5'>
                            <p className='text-[14px] font-medium text-gray-500'>Giảng Viên</p>
                            <p className='text-[18px] font-semibold text-green-700'>Hoàng Nam</p>
                        </div>
                    </div>

                    <div className='flex items-center mt-5 lg:mt-0'>
                        <FaGraduationCap className='text-5xl text-teal-500' />
                        <div className='ml-5'>
                            <p className='text-[14px] font-medium text-gray-500'>Lĩnh Vực</p>
                            <p className='text-[18px] font-semibold text-green-700'>Lập Trình Di Động</p>
                        </div>
                    </div>

                    <div className='text-right mr-10 mt-5 lg:mt-0'>
                        <Rate disabled defaultValue={4.5} allowHalf={true} />
                        <span className='ml-2'>4.5</span>
                        <p className='text-[14px] font-medium text-gray-500'>100 Đánh Giá</p>
                    </div>
                </div>

                <p className='pb-5 border-b border-solid border-gray-300 text-[1rem] font-medium text-gray-600 mt-10 text-justify'>React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công nghệ quan trọng với tư cách là một nhà phát triển web và trong khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan trọng!</p>
            </div>
            <div>
                <h2 className='mt-10 text-xl font-medium capitalize mb-5'>Những gì bạn sẽ học</h2>
                <Row>
                    <Col className='pr-5' xs={24} lg={12}>
                        <ul className='text-justify'>
                            <li className='mb-2 text-[16px]'>
                                <BsCheckLg className='mr-2 inline-block text-yellow-500' />
                                <span>Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với người dùng và phản ứng nhanh</span>
                            </li>
                            <li className='mb-2 text-[16px]'>
                                <BsCheckLg className='mr-2 inline-block text-yellow-500' />
                                <span>Đăng ký công việc được trả lương cao hoặc làm freelancer trong một trong những lĩnh vực được yêu cầu nhiều nhất mà bạn có thể tìm thấy trong web dev ngay bây giờ</span>
                            </li>
                            <li className='mb-2 text-[16px]'>
                                <BsCheckLg className='mr-2 inline-block text-yellow-500' />
                                <span>Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng sức mạnh của JavaScript một cách dễ dàng</span>
                            </li>
                            <li className='mb-2 text-[16px]'>
                                <BsCheckLg className='mr-2 inline-block text-yellow-500' />
                                <span>Tìm hiểu tất cả về React Hooks và React Components</span>
                            </li>
                        </ul>
                    </Col>
                    <Col className='pl-5' xs={24} lg={12}>
                        <ul className='text-justify'>
                            <li className='mb-2 text-[16px]'>
                                <BsCheckLg className='mr-2 inline-block  text-yellow-500' />
                                <span>Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp Javascript NPM, Webpack, Babel và ES6 / ES2015</span>
                            </li>
                            <li className='mb-2 text-[16px]'>
                                <BsCheckLg className='mr-1 inline-block text-yellow-500' />
                                <span>Nhận ra sức mạnh của việc xây dựng các thành phần có thể kết hợp</span>
                            </li>
                            <li className='mb-2 text-[16px]'>
                                <BsCheckLg className='mr-1 inline-block text-yellow-500' />
                                <span>Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản</span>
                            </li>
                            <li className='mb-2 text-[16px]'>
                                <BsCheckLg className='mr-1 inline-block text-yellow-500' />
                                <span>Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các ứng dụng Redux</span>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>

            <LessonContent />

        </div>
    )
}

export default DetailContent