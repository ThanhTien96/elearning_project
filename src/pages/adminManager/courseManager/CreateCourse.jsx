
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { maNhom } from '../../../utils/index';
import { Swal } from 'sweetalert2';
import { Form, Radio, Input, DatePicker } from 'antd';
import moment from 'moment';
import { fetchApiCreateCourseAction } from '../../../redux/action/adminAction/courseManagerAction'

const CreateCourse = (props) => {

    const [imgSrc, setImgSrc] = useState(null);

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            maKhoaHoc: '',
            tenKhoaHoc: '',
            moTa: '',
            luotXem: 0,
            danhGia: 0,
            hinhAnh: {},
            maNhom: maNhom,
            ngayTao: '',
            maDanhMuc: '',
            taiKhoanNguoiTao: '',


        },
        validationSchema: Yup.object({
            maKhoaHoc: Yup.string().required('* Vui lòng nhập mã khoá học !'),
            tenKhoaHoc: Yup.string().required('* Vui lòng nhập tên khoá học !'),
            moTa: Yup.string().required('* Vui lòng nhập mô tả !'),
            hinhAnh: Yup.string().required('* Vui lòng tải lên hình ảnh khoá học !'),
            ngayTao: Yup.string().required('* Vui lòng chọn ngày tạo khoá học !'),
            maDanhMuc: Yup.string().required('* Vui lòng nhập danh mục khoá học !'),
            maNhom: Yup.string().required('* Vui lòng nhập mã nhóm !'),
        }),
        onSubmit: async (values) => {
            try {
                await dispatch(fetchApiCreateCourseAction(values));
                navigate('/admin');
                Swal.fire({
                    position: 'top center',
                    icon: 'success',
                    title: 'Thêm Khoá Học Thành Công!',
                    showConfirmButton: false,
                    timer: 500
                });

            } catch (err) {
                console.log(err);

            }
        }
    });
    

    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const handleChangeDatePicker = (value) => {
        let ngayTao = moment(value?.$d).format('DD/MM/YYYY');
        formik.setFieldValue('ngayTao', ngayTao);
    };

    // hàm thêm hình ảnh
    const handleChangeFile = async (e) => {
        let file = e.target.files[0];
        // luu vao formik
        await formik.setFieldValue('hinhAnh', file);
        if (file.type === 'image/png' || 'image/jpg' || 'image/jpeg' || 'image/gif') {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result);
            };
            
        };
        

    }

    return (
        <>
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
                <h3 className='text-teal-600 text-xl font-semibold mb-9'>Thêm Tài Khoản</h3>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Mã khoá Học">
                    <Input name='maKhoaHoc' onChange={formik.handleChange} placeholder='nhập mã khoá học' />
                    {formik.errors.maKhoaHoc && formik.touched.maKhoaHoc && (<p className='text-red-700 mt-1'>{formik.errors.maKhoaHoc}</p>)}
                </Form.Item>
                <Form.Item label="Tên Khoá">
                    <Input name='tenKhoaHoc' onChange={formik.handleChange} placeholder='nhập tên khoá học' />
                    {formik.errors.tenKhoaHoc && formik.touched.tenKhoaHoc && (<p className='text-red-700 mt-1'>{formik.errors.tenKhoaHoc}</p>)}

                </Form.Item>
                <Form.Item label="Mô Tả">
                    <Input name='moTa' onChange={formik.handleChange} placeholder='nhập mô tả' />
                    {formik.errors.moTa && formik.touched.moTa && (<p className='text-red-700 mt-1'>{formik.errors.moTa}</p>)}

                </Form.Item>
                
                <Form.Item label="Hình Ảnh">
                    <input type='file' onChange={handleChangeFile} accept="image/png, image/jpg, image/jpeg, image/gif" />

                    {imgSrc && <img className='mt-5' src={imgSrc} alt="..." style={{ width: '200px' }} />}


                </Form.Item>
                <Form.Item label="Mã Nhóm">
                    <Input name='maNhom' onChange={formik.handleChange} value={formik.values?.maNhom} />
                    {formik.errors.maNhom && formik.touched.maNhom && (<p className='text-red-700 mt-1'>{formik.errors.maNhom}</p>)}

                </Form.Item>
                <Form.Item label="Ngày Tạo Khoá Học">
                    <DatePicker format="DD/MM/YYYY" onChange={handleChangeDatePicker} placeholder='DD/MM/YYYY' />
                    {formik.errors.ngayTao && formik.touched.ngayTao && (<p className='text-red-700 mt-1'>{formik.errors.ngayTao}</p>)}

                </Form.Item>
                <Form.Item label="Mã Danh Mục Khoá Học">
                    <Input name='maDanhMuc' onChange={formik.handleChange} placeholder='nhập danh mục khoá học' />
                    {formik.errors.maDanhMuc && formik.touched.maDanhMuc && (<p className='text-red-700 mt-1'>{formik.errors.maDanhMuc}</p>)}

                </Form.Item>
                <Form.Item label="Tài Khoản Người Tạo">
                    <Input name='taiKhoanNguoiTao' onChange={formik.handleChange} placeholder='' />
                    {formik.errors.taiKhoanNguoiTao && formik.touched.taiKhoanNguoiTao && (<p className='text-red-700 mt-1'>{formik.errors.taiKhoanNguoiTao}</p>)}

                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 16,
                    }}
                >
                    <button className='px-5 py-2 bg-orange-500 border-transparent text-white cursor-pointer rounded-md' type='submit'>Thêm Khoá Học</button>
                </Form.Item>

            </Form>
        </>
    )

}

export default CreateCourse