import { Col, Row } from 'antd'
import React from 'react'

const Profile = () => {
    return (
        <div className='container mx-auto pb-20 pt-32'>
            <Row>
                <Col className='text-center' xs={24} md={6}>
                    <div className='inline-block'>
                        <img className='block rounded-full' src="https://picsum.photos/150/150" alt="..." />
                    </div>
                    <h1 className='mt-5 font-bold text-2xl'>Nguyen Thanh Tien</h1>
                    <p>Hoc Vien</p>
                </Col>
                <Col xs={24} md={18}>

                </Col>
            </Row>

        </div>
    )
}

export default Profile