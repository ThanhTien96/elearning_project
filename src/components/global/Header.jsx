import React from 'react';
import styles from './Header.module.scss';
import { HiMenu } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { ExportOutlined } from '@ant-design/icons';


const Header = () => {



  // onclick open navBar mobile
  const handleOpenNav = () => {
    let navBar = document.getElementById('openNav');
    if (navBar.style.transform == 'translateX(120%)') {
      navBar.style.transform = 'translateX(0)';
    } else {
      navBar.style.transform = 'translateX(120%)';
    }
  }

  return (
    <div className='bg-slate-900 text-white h-12 lg:h-16 flex items-center relative'>
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to='' className={styles.Logo}>
          <img src={require('../../assets/logo/E-learning.png')} alt="logo E-learning" />
          <h1>E-LEARNING</h1>
        </NavLink>

        <nav id='openNav' className={styles.navMenu}>
          <div className="w-full md:w-40 xl:w-80 mr-3 p-3 md:p-0">
            <div className="input-group relative flex  w-full">
              <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" placeholder="Tìm Kiếm Khóa Học" aria-label="Search" aria-describedby="button-addon2" />
              <button className="btn inline-block p-3 py-2.5 bg-green-700 text-white font-medium text-xs leading-tight uppercase rounded-r-lg shadow-md hover:bg-green-800 hover:shadow-lg focus:bg-green-600  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
              </button>
            </div>
          </div>

          <ul className={styles.navBar}>
            <li className={styles.portfolioMenu}><HiMenu className='mr-1 text-xl' /> DANH MỤC
              <ul className={styles.portfolio}>
                <li>LẬP TRÌNH BACKEND</li>
                <li>LẬP TRÌNH FRONTEND</li>
                <li>THIẾT KẾ WEB</li>
                <li>LẬP TRÌNH DI ĐỘNG</li>
                <li>LẬP TRÌNH FULL STACK</li>
                <li>TƯ DUY  LẬP TRÌNH </li>
              </ul>
            </li>
            <li>KHÓA HỌC</li>
            <li>BLOG</li>
            <li>SỰ KIỆN</li>
            <li>THÔNG TIN</li>
          </ul>
        </nav>

        <div className='flex justify-around'>

          <button className={styles.loginButton}>Đăng Nhập</button>
          <div style={{ display: 'none' }} className={styles.profile}>
            <div className={styles.account}>
              <h4>Nguyễn Thanh Tiến</h4>
              <img src="https://picsum.photos/150/150" alt="avatar" />
            </div>
            <span className='text-2xl text-gray-300'>|</span>
            <button className='flex items-center'><ExportOutlined className='text-2xl ml-2 mr-1' /> <span className='mt-1'>Đăng Xuất</span></button>

          </div>

          <button onClick={handleOpenNav} className={styles.buttonNavBar}><HiMenu className='text-2xl' /></button>
        </div>

      </div>
    </div>
  )
}

export default Header