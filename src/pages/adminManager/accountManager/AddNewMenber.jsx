import React, { useState } from "react";

import { fetchApiLoginAction } from '../../../redux/action/userAction';
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

const AddNewMenber = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      hoTen: '',
      soDT: '',
      maLoaiNguoiDung: '',
      maNhom: '',
      email: '',
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required('* Vui lòng nhập tài khoản!')
        .min(5, '*Tên Tài Khoản Tối Thiểu 5 Kí Tự, Tối Đa 20 Kí Tự!')
        .max(20, '*Tên Tài Khoản Tối Thiểu 5 Kí Tự, Tối Đa 20 Kí Tự!'),
      matKhau: Yup.string().required('*Vui lòng nhập mật khẩu!'),
      hoTen: Yup.string().required('*Vui lòng nhập họ tên!')
        .min(5, '*Họ Tên Tối Thiểu 5 Kí Tự'),
      soDT: Yup.string().matches(/^[0-9]+$/, '* Số điện thoại chỉ nhập số 0-9')
        .required('*Vui lòng nhập số điện thoại!'),
      maNhom: Yup.string().required('*Vui lòng nhập mã nhóm!'),
      email: Yup.string().email('*Vui Lòng Nhập Đúng Email!').required('*Vui lòng nhập email!'),
    }),

    onSubmit: async (value) => {
      try {
        console.log(value);
        await dispatch(fetchApiLoginAction(value));
        navigate('/');
      } catch (err) {
        console.log(err.response)
      }
    },

  })


  return (

    <div>
      <div className="flex items-center justify-center h-screen pt-48 pb-10">
        {/* Register Container */}
        <form
          onSubmit={formik.handleSubmit}
          className="w-1/3 flex-col border bg-white px-6 py-10 shadow-md rounded-[4px]">
          <div className="mb-8 flex justify-center items-center">
            <img className="w-24 block" src={require('../../../assets/logo/E-learning.png')} alt='...' />
            <h1 className='font-bold text-3xl'>E-Learning</h1>
          </div>
          <div className="flex flex-col text-sm rounded-md">
            <input name='taiKhoan' onChange={formik.handleChange} className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Tài Khoản" />
            {formik.errors.taiKhoan && formik.touched.taiKhoan && (<p className='text-red-700 mb-5'>{formik.errors.taiKhoan}</p>)}
            <input name='matKhau' onChange={formik.handleChange} className="mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="password" placeholder="Mật Khẩu" />
            {formik.errors.matKhau && formik.touched.matKhau && (<p className='text-red-700 mb-5'>{formik.errors.matKhau}</p>)}
            <input name='hoTen' onChange={formik.handleChange} className="mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="text" placeholder="Họ Tên" />
            {formik.errors.hoTen && formik.touched.hoTen && (<p className='text-red-700 mb-5'>{formik.errors.hoTen}</p>)}
            <input name='soDT' onChange={formik.handleChange} className="mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="text" placeholder="Số Điện Thoại" />
            {formik.errors.soDT && formik.touched.soDT && (<p className='text-red-700 mb-5'>{formik.errors.soDT}</p>)}
            <input name='maNhom' onChange={formik.handleChange} className="mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="text" placeholder="Mã Nhóm" />
            {formik.errors.maNhom && formik.touched.maNhom && (<p className='text-red-700 mb-5'>{formik.errors.maNhom}</p>)}
            <input name='email' onChange={formik.handleChange} className="mb-5 border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="text" placeholder="Email" />
            {formik.errors.email && formik.touched.email && (<p className='text-red-700 mb-5'>{formik.errors.email}</p>)}
          </div>
          <button className="mt-5 w-full border p-2 bg-gradient-to-r from-green-800 bg-green-500 text-white rounded-[4px] hover:bg-slate-500 scale-105 duration-300" type="button">Thêm Người Dùng</button>
          
        </form>
      </div>

    </div>
  )


}

export default AddNewMenber