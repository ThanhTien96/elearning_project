
import React, { useState } from 'react';
import { Form, Input, Radio, Select } from 'antd';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import adminService from '../../../services/adminSevice';
import { maNhom } from '../../../utils/index';
import { useDispatch, useSelector } from 'react-redux';

import { fetApiProfileAction } from '../../../redux/action/userAction';


const EditAccount = (props) => {

    const params = useParams();
    // const [user] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);


   const user = useSelector(state => state.accountManagerSlice.accountList);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: user?.taiKhoan,
            matKhau: user?.matKhau,
            hoTen: user?.hoTen,
            email: user?.email,
            soDT: user?.soDT,
            maNhom: maNhom?.maNhom,
            maLoaiNguoiDung: user?.maLoaiNguoiDung,
        },
        onSubmit: async (values) => {
            try{
                const res = await adminService.fetchApiEditAccount(values);
                console.log(res);
                dispatch(fetApiProfileAction);
                //dispatch(isAlertActionSuccess({message:'Cập nhật thành công!'}));
                await setTimeout(() => {
                    //dispatch(isAlertActionSuccess(null));
                },500);

            }catch(err){
                //dispatch(isAlertActionERR({message: err.response.data.content}));
                await setTimeout(() => {
                    //dispatch(isAlertActionERR(null));
                },500);
                console.log(err);
            }
            finally{
                navigate('/admin/account');
            }
        }
    })


    const handleChangeSelect = (value) => {
        formik.setFieldValue('maLoaiNguoiDung', value)
    };

    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <h3 className='text-teal-600 text-xl font-semibold mb-9'>Sửa Tài Khoản {params.taikhoan}</h3>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="Tài Khoản">
                    
                    <Input name='taiKhoan' onChange={formik.handleChange} type="text" value={formik.values.taiKhoan} />
                </Form.Item>

                <Form.Item label="Mật Khẩu">
                    <Input.Password
                        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        onChange={formik.handleChange}
                        value={formik.values?.matKhau}
                        name='matKhau'
                    />
                </Form.Item>

                <Form.Item label="Họ Tên">
                    <Input name='hoTen' onChange={formik.handleChange} value={formik.values?.hoTen} />
                </Form.Item>

                <Form.Item label="Email">
                    <Input type='email' name='email' onChange={formik.handleChange} value={formik.values?.email} />
                </Form.Item>

                <Form.Item label="Số Điện Thoại">
                    <Input name='soDT' onChange={formik.handleChange} value={formik.values?.soDT} />
                </Form.Item>

                <Form.Item label="Loại Người Dùng">
                    <Select options={[{ value: 'GV', label: 'Giáo Viên' }, { value: 'HV', label: 'Học Viên' }]}
                        onChange={handleChangeSelect}
                        value={formik.values?.maLoaiNguoiDung}
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 16,
                    }}
                >
                    <button className='px-5 py-2 bg-teal-500 border-transparent text-white cursor-pointer rounded-md' type='submit'>Cập Nhật</button>
                </Form.Item>
            </Form>
        </>
    );
}

export default EditAccount