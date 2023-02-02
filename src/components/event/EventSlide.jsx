import clsx from 'clsx';
import React from 'react';
import styles from './EventSlide.module.scss';
import styleImg from '../../utils/variableImg.module.css';

const EventSlide = () => {
  return (
    <div className={clsx(styles.eventSlide, styleImg.eventSlide)}>
        <div className="container mx-auto">
            <div className='flex items-center w-full'>
                <div className='mr-5 lg:mr-10 text-center'>
                    <h1 className='text-yellow-500 text-5xl lg:text-6xl font-bold'>00</h1>
                    <p className='font-semibold text-xl'>NGÀY</p>
                </div>

                <div className='mr-5 lg:mr-10 mr-10 text-center'>
                    <h1 className='text-orange-500 text-5xl lg:text-6xl font-bold'>00</h1>
                    <p className='font-semibold text-xl'>GIỜ</p>
                </div>

                <div className='mr-5 lg:mr-10 mr-10 text-center'>
                    <h1 className='text-pink-500 text-5xl lg:text-6xl font-bold'>00</h1>
                    <p className='font-semibold text-xl' >PHÚT</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-purple-500 text-5xl lg:text-6xl font-bold'>00</h1>
                    <p className='font-semibold text-xl'>GIÂY</p>
                </div>
            </div>
            <div className={styles.eventText}>
                <h1 className='text-4xl py-5 font-semibold'>SỰ KIỆN CÔNG NGHỆ LỚN NHẤT 2021</h1>
                <p className='font-medium text-xl'>20 - 25 THÁNG 12, 2022, VIỆT NAM</p>
            </div>
        </div>
    </div>
  )
}

export default EventSlide