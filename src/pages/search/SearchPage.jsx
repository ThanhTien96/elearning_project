import { Col, Row } from 'antd';
import React from 'react';
import Banner from '../../components/global/Banner';
import SearchFilter from '../../components/search/SearchFilter';
import SearchResults from '../../components/search/SearchResults';


const SearchPage = () => {

  const bannerContent = { title: 'TÌM KIẾM KHÓA HỌC', text: 'KẾT QUẢ TÌM KIẾM KHÓA HỌC !!!' }

  return (
    <div>
      <Banner bannerContent={bannerContent} />
      <div className="container mx-auto py-10">
        <Row>
          <Col xs={12} lg={4}>
            <SearchFilter />
          </Col>
          <Col className='px-5' xs={24} lg={20}>
            <SearchResults />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SearchPage