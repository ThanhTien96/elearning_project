import { Col, Row, Tabs } from 'antd'
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetApiProfileAction } from '../../redux/action/userAction';
import userServices from '../../services/userService';
import styles from './Profile.module.scss';



export const Information = (props) => {
    const account = useSelector(state => state.userSlice.profile);
    const [editProfile, setEditProfile] = useState(false);

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: account?.taiKhoan,
            matKhau: account?.matKhau,
            hoTen: account?.hoTen,
            soDT: account?.soDT,
            maLoaiNguoiDung: 'GV',
            maNhom: account?.maNhom,
            email: account?.email,
        },
        onSubmit: async (values) => {
            console.log(values)
            try {
                const res = await userServices.fetchApiEditProfile(values);
                console.log(res);

                dispatch(fetApiProfileAction)
            } catch (err) {
                console.log(err)
            }

        }
    });


    return (
        <form
            onSubmit={formik.handleSubmit}
            className='px-10'>
            <Row>
                <Col xs={24} lg={12} className='px-5'>
                    <div className='border-b border-solid border-teal-500 py-5'>
                        <span className='font-medium text-lg text-gray-500'>Họ Tên: </span>
                        {!editProfile && <span className='ml-2 font-medium text-lg uppercase'>{account?.hoTen}</span>}
                        {editProfile &&
                            <input
                                onChange={formik.handleChange}
                                className='font-medium text-lg ml-2 border border-solid border border-purple-500 py-1 px-2 focus:outline-purple-500'
                                name='hoTen'
                                type="text"
                                value={formik.values?.hoTen} />}

                    </div>
                    <div className='border-b border-solid border-teal-500 py-5'>
                        <span className='font-medium text-lg text-gray-500'>Email: </span>
                        {!editProfile && <span className='ml-2 font-medium text-lg'>{account?.email}</span>}
                        {editProfile &&
                            <input className='font-medium text-lg ml-2 border border-solid border border-purple-500 py-1 px-2 focus:outline-purple-500'
                                onChange={formik.handleChange}
                                name='email'
                                type="email"
                                value={formik.values?.email} />}
                    </div>
                    <div className='border-b border-solid border-teal-500 py-5'>
                        <span className='font-medium text-lg text-gray-500'>Điện Thoại: </span>
                        {!editProfile && <span className='ml-2 font-medium text-lg'>{account?.soDT}</span>}
                        {editProfile &&
                            <input className='inline-block font-medium text-lg ml-2 border border-solid border border-purple-500 py-1 px-2 focus:outline-purple-500'
                                onChange={formik.handleChange}
                                name='soDT'
                                type="text"
                                value={formik.values?.soDT} />}
                    </div>
                </Col>
                <Col xs={24} lg={12} className='px-5'>
                    <div className='border-b border-solid border-teal-500 py-5'>
                        <span className='font-medium text-lg text-gray-500'>Tài Khoản: </span>
                        {!editProfile && <span className='ml-2 font-medium text-lg'>{account?.taiKhoan}</span>}
                        {editProfile &&
                            <input className='font-medium text-lg ml-2 border border-solid border border-purple-500 py-1 px-2 focus:outline-purple-500'
                                onChange={formik.handleChange}
                                name='taiKhoan'
                                type="text"
                                value={formik.values?.taiKhoan} />}
                    </div>
                    <div className='border-b border-solid border-teal-500 py-5'>
                        <span className='font-medium text-lg text-gray-500'>Mật Khẩu: </span>
                        {
                            !editProfile && <div className='inline-block'>
                                <span className='w-2 inline-block h-2 rounded-full bg-black ml-2' />
                                <span className='w-2 inline-block h-2 rounded-full bg-black ml-1' />
                                <span className='w-2 inline-block h-2 rounded-full bg-black ml-1' />
                                <span className='w-2 inline-block h-2 rounded-full bg-black ml-1' />
                                <span className='w-2 inline-block h-2 rounded-full bg-black ml-1' />
                                <span className='w-2 inline-block h-2 rounded-full bg-black ml-1' />
                            </div>

                        }

                        {editProfile &&
                            <input className='font-medium text-lg ml-2 border border-solid border border-purple-500 py-1 px-2 focus:outline-purple-500'
                                onChange={formik.handleChange}
                                name='matKhau'
                                type="text"
                                value={formik.values?.matKhau} />}
                    </div>

                    <div className='py-5'>
                        {!editProfile &&
                            <button
                                type='button'
                                onClick={() => {
                                    setEditProfile(true);
                                }}
                                className={styles.btnEditProfile}>Thay Đổi Thông Tin
                            </button>
                        }
                        {editProfile &&
                            <button
                                type='submit'
                                className={styles.btnEditProfile}>
                                Cập Nhật
                            </button>}
                    </div>

                </Col>
            </Row>
        </form>
    )
}


const items = [
    {
        key: '1',
        label: <h1>Thông Tin Tài Khoản</h1>,
        children: <Information />,
    },
    {
        key: '2',
        label: `Tab 2`,
        children: `Content of Tab Pane 1`,
    },
];


export const TabsProfile = (props) => {

    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div className='px-5'>
            <Tabs
                onChange={onChange}
                items={items}
            />
        </div>
    )
}



const Profile = () => {
    const { profile } = useSelector(state => state.userSlice);
    return (
        <div className='container mx-auto pb-20 pt-32'>
            <Row>
                <Col className='text-center' xs={24} md={6}>
                    <div className='inline-block'>
                        <img className='block rounded-full' src="https://picsum.photos/150/150" alt="..." />
                    </div>
                    <h1 className='mt-5 font-bold text-2xl uppercase'>{profile?.hoTen}</h1>
                    <p>Hoc Vien</p>
                </Col>
                <Col xs={24} md={18}>
                    <TabsProfile />
                </Col>
            </Row>

        </div>
    )
}

export default Profile
