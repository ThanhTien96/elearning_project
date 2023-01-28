import { Col, Row } from 'antd'
import React from 'react'
import BlogItem from './BlogItem'
import hinh1 from '../../assets/image/blog/10-bi-quyet-de-duy-tri-dong-luc-khi-hoc-code-11-610x342.jpg'

const BlogContent = () => {
    const dataBlog = [
        {
            hinhAnh: hinh1,
            tieuDe: 'Thời gian và động lực',
            content: 'Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...'
        },
        {
            hinhAnh: '',
            tieuDe: 'Tailwind css và cách cài đặt cơ bản',
            content: 'Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...'
        },
        {
            hinhAnh: '',
            tieuDe: 'Cấu trúc cơ bản trong HTML',
            content: 'Custom theme Material UI với TypeScript đơn giản, hiệu quả...'
        },
        {
            hinhAnh: '',
            tieuDe: 'Material UI custom theme với TypeScript',
            content: 'Trắc hẳn ai cũng biết một trang web thì không thể nào thiếu đi HTML và HTML làm nên cấu trúc của một trang web...'
        },
        {
            hinhAnh: '',
            tieuDe: 'Cách tạo một component nhanh chóng chỉ bằng 3 ký tự',
            content: 'Tạo một component nhiều lúc cũng khá mất nhiều thời gian nên mình xin giới thiệu extention này cho mọi người nhé...'
        },
        {
            hinhAnh: '',
            tieuDe: 'Xử lý bất đồng bộ trong Javascript (phần 2)',
            content: 'Async/await là cơ chế giúp bạn thực thi các thao tác bất đồng bộ một cách tuần tự hơn , giúp đoạn code nhìn qua tưởng như đồng...'
        },
        {
            hinhAnh: '',
            tieuDe: 'TyperScrip là gì, Vì sao nên dùng TyperScript',
            content: 'Link khóa học cho anh em nào tò mò ( Đừng lo vì tất cả đều miễn......'
        },
        {
            hinhAnh: '',
            tieuDe: 'TyperScrip là gì, Vì sao nên dùng TyperScript',
            content: 'Link khóa học cho anh em nào tò mò ( Đừng lo vì tất cả đều miễn......'
        },
    ]


    return (
        <div className='container mx-auto'>
            <Row>
                <Col xs={24} lg={16}>
                    <Row>
                        {dataBlog.map((ele, index) => (<BlogItem key={index} dataBlog={ele} />))}
                    </Row>
                </Col>
                <Col xs={24} lg={8}>
                    <div>
                        <h1>Các chủ đề được đề xuất</h1>
                        <div>
                            <ul>
                                <li>Front-end / Mobile apps</li>
                                <li>UI / UX / Design</li>
                                <li>BACK-END</li>
                                <li>Thư viện</li>
                                <li>Chia sẻ người trong nghề</li>
                                <li>Châm ngôn IT</li>
                                <li>Chủ đề khác</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h1>Bài đăng được đề xuất</h1>
                        <div>
                            <div>
                                <h3>Routing trong reactjs</h3>
                                <p>
                                    Chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs...
                                </p>
                                <div>
                                    <img src={require('../../assets/avatar/nguyenVan.jpg')} alt="..." />
                                    <span className='ml-3'>Nguyễn Văn</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default BlogContent