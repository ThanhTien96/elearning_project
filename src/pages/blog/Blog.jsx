import React from 'react'
import BlogContent from '../../components/blog/BlogContent'
import Banner from '../../components/global/Banner'

const Blog = (props) => {
    const bannerContent = {title: 'BLOG', text: 'THÔNG TIN CÔNG NGHỆ SỐ !!!'}
  return (
    <div>
        <Banner bannerContent={bannerContent} />
        <BlogContent />
    </div>
  )
}

export default Blog