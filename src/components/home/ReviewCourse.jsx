import { Col, Row } from 'antd'
import React from 'react';
import styles from './ReviewCourse.module.scss'

const ReviewCourse = () => {
    return (
        <div className='container mx-auto py-14'>
            <Row>
                <Col xs={24} lg={12}>
                    <div className={styles.reviewItem}>
                        <div className={styles.reviewImg}>
                            <img src={require('../../assets/avatar/avatarReview.2f5a1f3c.png')} alt="..." />
                        </div>
                        <div className={styles.triangleBox}></div>
                        <div className={styles.dot1Box}></div>
                        <div className={styles.dot2Box}></div>
                    </div>
                </Col>

                <Col xs={24} lg={12}>
                    <div>
                        <blockquote>
                            <q>
                                Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
                            </q>
                        </blockquote>

                        <p>Nhi Dev</p>
                        <p>Học viên xuất sắc</p>

                        <div className='dot3Box'></div>
                        <div className='dot4Box'></div>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default ReviewCourse