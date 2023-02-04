import React, { Fragment, useEffect } from 'react'
import { Table, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import styles from '../accountManager/Admin.module.scss'
import clsx from 'clsx';
import { fetchApiCourseStudentAction } from '../../../redux/action/adminAction/courseManagerAction';
import formData from '../../../utils/formData';
import userServices from '../../../services/userService';
import Swal from 'sweetalert2';

const CourseStudent = (props) => {

    const params = useParams();
    const dispatch = useDispatch();

    // lấy danh sách học sinh từ reducer
    const { courseStudent } = useSelector(state => state.courseManagerSlice)

    console.log(courseStudent)
    useEffect(() => {

        dispatch(fetchApiCourseStudentAction(params.courseName));

    }, [params.courseName])

    // hủy đăng ký khóa học
    const handleUnsubscribe = async ( taiKhoan) => {
        try {

            const newData = formData.dataUnsubscribeCourse(params.courseName, taiKhoan);
            const res = await userServices.fetchApiUnsubscribeCourse(newData);

            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: res.data,
                showConfirmButton: false,
                timer: 1500
            });
            dispatch(fetchApiCourseStudentAction(params.courseName));
        } catch (err) {
            await Swal.fire({
                position: 'center',
                icon: 'error',
                title: err.response.data,
                showConfirmButton: false,
                timer: 1500
            });
        }; 
    };

    const columns = [
        {
            title: 'Họ Tên',
            dataIndex: 'hoTen',
            key: '1',
            sorter: (a, b) => {
                let tenA = a.hoTen.toLowerCase().trim();
                let tenB = b.hoTen.toLowerCase().trim();
                if (tenA > tenB) {
                    return 1
                } else {
                    return -1;
                }
            },
            render: (text, user) => {
                return <Fragment>
                    <h4 className={clsx(styles.gradientText, 'font-medium text-lg')}>{user.hoTen}</h4>
                </Fragment>
            },
            sortDirection: ['descend', 'ascend'],
            width: '25%',
        },
        {
            title: 'Tài Khoản',
            key: '2',
            dataIndex: 'taiKhoan',
            width: '25%',
            render: (text, user, index) => {
                return <Fragment>
                    <p>{user.taiKhoan}</p>
                </Fragment>
            },

        },
        {
            title: 'Bí Danh',
            key: '3',
            dataIndex: 'biDanh',
            width: '25%',
            render: (text, user, index) => {
                return <Fragment>
                    <p>{user.biDanh}</p>
                </Fragment>
            }
        },
        {
            title: 'Tác Vụ',
            key: '6',
            dataIndex: 'taiKhoan',
            width: '25%',
            render: (text, user, index) => {
                return <Fragment>
                    <button onClick={() => handleUnsubscribe(user.taiKhoan)} className={styles.btnGradient}>Xóa Học Viên</button>
                </Fragment>
            }
        },

    ];

    const data = courseStudent;


    const { Search } = Input;

    const onSearch = (value) => {
        const keyWord = value.toLowerCase().trim();
        console.log(keyWord)
    };

    return (
        <div>
            <div className="flex justify-between mb-5 md:mb-10" >
                <h3 className='text-teal-600 text-xl font-semibold'>Quản Lý Học Viên Khóa Học</h3>
                <Search
                    allowClear
                    className='w-1/2'
                    placeholder="Nhập từ khóa tìm kiếm"
                    onSearch={onSearch}
                />
                {/* <Button className={clsx('flex items-center', styles.btnGradient)} onClick={() => navigate('/admin/account/create')} type='primary' size='large'><UserOutlined /> <span>Thêm Tài Khoản</span></Button> */}

            </div>
            <Table pagination={''} rowKey={'taiKhoan'} columns={columns} dataSource={data} />
        </div>


    )
}

export default CourseStudent