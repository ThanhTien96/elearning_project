import { Col, Row } from 'antd'
import React from 'react'
import DetailContent from './DetailContent';

const DetailCourse = () => {
  return (
    <div className='container mx-auto'>
        <Row className='mt-10'>
          <Col xs={24} lg={16}>
            <DetailContent />
          </Col>

          <Col xs={24} lg={8}></Col>
        </Row>
    </div>
  )
}

export default DetailCourse