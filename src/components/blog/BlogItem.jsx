import { Col } from 'antd'
import React from 'react'

const BlogItem = (props) => {
    return (
        <Col xs={24} lg={12}>
            <div>
                <img src={props.dataBlog.hinhAnh} alt="..." />
            </div>
            <h1>{props.dataBlog.tieuDe}</h1>
            <div>

            </div>
        </Col>
    )
}

export default BlogItem