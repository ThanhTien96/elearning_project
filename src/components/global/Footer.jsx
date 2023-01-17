import { Col, Row } from 'antd'
import React from 'react';
import styles from './Footer.module.scss';
import { FaAngleRight, FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import clsx from 'clsx';

const Footer = () => {
  return (
    <div className={clsx(styles.footer, 'md:pt-16 pt-8 pb-5 px-5 lg:px-0')}>
      <div className="container mx-auto">
        <Row>
          <Col span={24} md={12} lg={8} className={styles.social}>
            <div className={styles.logoFooter}>
              <img src={require('../../assets/logo/E-learning.png')} alt="logo footer" />
              <h3>E-Learning</h3>
            </div>

            <div className={styles.iconSocial}><a href="tel:1800-123-4567"><i><FaPhoneAlt className='inline-block' /> </i><span>1800-123-4567</span></a></div>
            <div className={styles.iconSocial}><a href="mailto:thanhtien2094@gmail.com"> <i><FaEnvelope className='inline-block' /></i> <span>thanhtien2094@gmail.com</span></a></div>
            <div className={styles.iconSocial}><i><FaMapMarkerAlt className='inline-block' /></i> <span>TP. Hồ Chí Minh</span></div>
          </Col>

          <Col span={24} md={12} lg={4}>
            <h1 className='text-2xl font-bold mb-2 mt-5 md:mt-0'>Liên Kết</h1>
            <ul>
              <li className={styles.linkFooter}><FaAngleRight className='inline-block' /> <span>Trang Chủ</span></li>
              <li className={styles.linkFooter}><FaAngleRight className='inline-block' /> <span>Dịch Vụ</span></li>
              <li className={styles.linkFooter}><FaAngleRight className='inline-block' /> <span>Nhóm</span></li>
              <li className={styles.linkFooter}><FaAngleRight className='inline-block' /> <span>Blog</span></li>
            </ul>
          </Col>

          <Col span={24} md={12} lg={4}>
            <h1 className='text-2xl font-bold mb-2 lg:mt-0 mt-5 '>Khóa Học</h1>
            <ul>
              <li className={styles.linkFooter}><FaAngleRight className='align-middle inline-block' /> <span>Front End</span></li>
              <li className={styles.linkFooter}><FaAngleRight className='align-middle inline-block' /> <span>Back End</span></li>
              <li className={styles.linkFooter}><FaAngleRight className='align-middle inline-block' /> <span>Full stack</span></li>
              <li className={styles.linkFooter}><FaAngleRight className='align-middle inline-block' /> <span>Node Js</span></li>
            </ul>
          </Col>

          <Col span={24} md={12} lg={8} className='lg:px-5'>
            <h1 className='text-2xl font-bold mb-2 mt-5 lg:mt-0'>Đăng Kí Tư Vấn</h1>
            <form className='mr-5'>
              <input type="text" className='ml-0.5 border-2 border-teal-600 px-3 py-1 w-full focus:outline-none focus:rounded-md transition-all focus:ml-0 rounded-lg' placeholder='Họ Và Tên' />
              <input type="text" className='ml-0.5 border-2 border-teal-600 px-3 py-1 w-full focus:outline-none focus:rounded-md transition-all focus:ml-0 rounded-lg mt-3' placeholder='Email' />
              <input type="text" className='ml-0.5 border-2 border-teal-600 px-3 py-1 w-full focus:outline-none focus:rounded-md transition-all focus:ml-0 rounded-lg mt-3' placeholder='Số Điện Thoại' />
              <div className='mt-3'>
                <button type='submit' className={styles.btnFooter}>Đăng Ký</button>
              </div>
            </form>
          </Col>
        </Row>

        <div className='border-t border-solid border-gray-300 mt-3'>
          <div className='md:w-3/4 mx-auto md:flex md:justify-between pt-3 w-full text-center md:text-left'>
            <p>Copyright © 2022. All rights reserved by ThanhTienDev & ThanhPhuocDev.</p>
            <div className={clsx(styles.iconsBottom, 'mt-5 md:mt-0')}>
              <i><FaInstagram className='inline-block' /></i>
              <i><FaFacebookF className='inline-block' /></i>
              <i><FaTwitter className='inline-block' /></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer