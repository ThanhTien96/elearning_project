
import clsx from 'clsx';
import React, { useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './Profile.module.scss';

const ProfileSkills = () => {
    const [value, setValue] = useState({ skill: 'HTML5', value: 60, color: 'red' });

    return (
        <div className='border border-solid border-teal-500 mt-10'>
            <h1 className='py-3 text-center mb-5 text-3xl font-bold bg-teal-500 text-white w-full'>Kỹ Năng Cá Nhân</h1>
            <div className='flex flex-col justify-center items-center mt-20'>

                <div className='py-10 px-16 shadow-lg flex flex-col justify-center items-center'>
                    <div className='w-40 h-40'>
                        <CircularProgressbar value={value.value} maxValue={100} text={`${value.value}%`}
                            styles={buildStyles({
                                textColor: "black",
                                pathColor: `${value.color}`,
                                trailColor: "gainsboro",
                            })}
                        />
                    </div>
                    <h1 className=' mt-3 font-medium text-xl'>{value.skill}</h1>
                </div>
                <p className='mt-3'>Học tập thật nhiều để hoàn thiện kỹ năng lập trình của bạn !!!</p>
                <div className='mt-10 mb-5'>
                    <button
                        onClick={() => {
                            setValue({ ...value, skill: 'HTML5', value: 60, color: 'red' });
                        }}
                        className={clsx(styles.btnEditProfile, 'mx-2')}>HTML5</button>
                    <button
                        onClick={() => {
                            setValue({ ...value, skill: 'CSS3', value: 95, color: 'green' });
                        }}
                        className={clsx(styles.btnEditProfile, 'mx-2')}>CSS3</button>
                    <button
                        onClick={() => {
                            setValue({ ...value, skill: 'JavaScript', value: 85, color: 'yellow' });
                        }}
                        className={clsx(styles.btnEditProfile, 'mx-2')}>JavaScript</button>
                    <button
                        onClick={() => {
                            setValue({ ...value, skill: 'React JS', value: 100, color: 'teal' });
                        }}
                        className={clsx(styles.btnEditProfile, 'mx-2')}>ReactJs</button>

                    <button
                        onClick={() => {
                            setValue({ ...value, skill: 'JAVA', value: 50, color: 'purple' });
                        }}
                        className={clsx(styles.btnEditProfile, 'mx-2')}>JAVA</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileSkills;