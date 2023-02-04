
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { fetApiProfileAction } from '../../../redux/action/adminAction/accountManagerAction'
import { useFormik } from 'formik';
import adminService from '../../../services/adminSevice';
import { Form, Input, Radio } from 'antd';

const EditAccount = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        dispatch(fetApiProfileAction(params.key));
    }, [params.key]);

    const account = useSelector(state => state.detailAccount);


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            
            taiKhoan: account?.taiKhoan,
            matKhau: account?.matKhau,
            hoTen: account?.hoTen,
            soDT: account?.soDT,
            maLoaiNguoiDung: account?.maLoaiNguoiDung,
            maNhom: account?.maNhom,
            email: account?.email
        },
        onSubmit: async (values) => {
            console.log(values)
            let formData = new FormData();
            
            try {

                const res = await adminService.fetchApiEditAccount(formData);
                console.log(res)
                
            } catch (err) {
                console.log(err.response);
            }

        }
    });

    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <div>
            <Form onSubmitCapture={formik.handleSubmit}
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
                <h3 className='text-orange-600 mb-10'>Chỉnh Sửa Thông Tin Khoá Học</h3>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tài Khoản">
                    <Input name='taiKhoan' onChange={formik.handleChange} value={formik.values.taiKhoan} />
                </Form.Item>
                <Form.Item label="Tên Khoá">
                    <Input name='matKhau' onChange={formik.handleChange} value={formik.values.matKhau} />
                </Form.Item>
                <Form.Item label="Họ Tên">
                    <Input name='hoTen' onChange={formik.handleChange} value={formik.values.hoTen} />
                </Form.Item>
                <Form.Item label="Số Điện Thoại">
                    <Input name='soDT' onChange={formik.handleChange} value={formik.values.soDT} />
                </Form.Item>
                <Form.Item label="Mã Loại Người Dùng">
                    <Input name='maLoaiNguoiDung' onChange={formik.handleChange} value={formik.values.maLoaiNguoiDung} />
                </Form.Item>
                <Form.Item label="Mã Nhóm">
                    <Input name='maNhom' onChange={formik.handleChange} value={formik.values.maNhom} />
                </Form.Item>
                <Form.Item label="Email">
                    <Input name='email' onChange={formik.handleChange} value={formik.values.email} />
                </Form.Item>
                
                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 16,
                    }}
                >
                    <button className='px-5 py-2 bg-orange-500 border-transparent text-white cursor-pointer rounded-md' type='submit'>Cập Nhật</button>
                </Form.Item>

            </Form>

        </div>
    )
    
}

export default EditAccount