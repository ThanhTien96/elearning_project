
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { fetchApiDetailCourseAction } from '../../../redux/action/courseListAction'
import { editCourseApi } from '../../../redux/action/courseListAction'
import { Form, Radio, Input, DatePicker } from 'antd';


const EditCourse = (props) => {

    const course = useSelector(state => state.courseManagerSlice.courseList);
    // lấy danh mục khóa học
    const { categoryList } = useSelector(state => state.courseList);
    console.log(course);
    const [editCourse, setEditCourse] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        const id = params.id;
        dispatch(fetchApiDetailCourseAction(id));
    }, [params]);

    const formik = useFormik({
        initialValues: {
            maKhoaHoc: course?.maKhoaHoc,
            tenKhoaHoc: course?.tenKhoaHoc,
            moTa: course?.moTa,
            luotXem: 0,
            danhGia: 0,
            hinhAnh: null,
            maNhom: course?.maNhom,
            ngayTao: course?.ngayTao,
            maDanhMucKhoaHoc: categoryList?.maDanhMuc,
            taiKhoanNguoiTao: null,
        },
        onSubmit: async (values) => {
            let formData = new FormData();
            for (let key in values) {

                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    if (values.hinhAnh !== null) {
                        formData.append('File', values.hinhAnh, values.hinhAnh.name);
                    }
                }
            }
            try {

                await dispatch(editCourseApi(formData));
                
                navigate('/admin');
            } catch (err) {
                console.log(err);
            }

        }
    })

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
                <Form.Item label="Mã khoá Học">
                    <Input name='maKhoaHoc' onChange={formik.handleChange} value={formik.values.maKhoaHoc} />
                </Form.Item>
                <Form.Item label="Tên Khoá">
                    <Input name='tenKhoaHoc' onChange={formik.handleChange} value={formik.values.tenKhoaHoc} />
                </Form.Item>
                <Form.Item label="Mô Tả">
                    <Input name='moTa' onChange={formik.handleChange} value={formik.values.moTa} />
                </Form.Item>
                <Form.Item label="Lượt Xem">
                    <Input name='luotXem' onChange={formik.handleChange} value={formik.values.luotXem} />
                </Form.Item>
                <Form.Item label="Đánh Giá">
                    <Input name='danhGia' onChange={formik.handleChange} value={formik.values.danhGia} />
                </Form.Item>
                <Form.Item label="Hình Ảnh">
                    <input type='file' onChange={handleChangeFile} accept="image/png, image/jpg, image/jpeg, image/gif" />

                    <img className='mt-5' src={imgSrc === '' ? course?.hinhAnh : imgSrc} alt="..." style={{ width: '200px' }} />

                </Form.Item>
                <Form.Item label="Mã Nhóm">
                    <Input name='maNhom' onChange={formik.handleChange} value={formik.values.maNhom} />
                </Form.Item>
                <Form.Item label="Ngày Tạo Khoá Học">
                    <DatePicker format="DD/MM/YYYY" onChange={handleChangeDatePicker} defaultValue={moment(formik.values.ngayTao)} />
                </Form.Item>
                <Form.Item label="Mã Danh Mục Khoá Học">
                    <Input name='maDanhMucKhoaHoc' onChange={formik.handleChange} value={formik.values.maDanhMucKhoaHoc} />
                </Form.Item>
                <Form.Item label="Tài Khoản Người Tạo">
                    <Input name='taiKhoanNguoiTao' onChange={formik.handleChange} value={formik.values.taiKhoanNguoiTao} />
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


export default EditCourse