import { Table, Input, Button } from 'antd';
import React, { Fragment } from 'react';
import { EditOutlined, DeleteOutlined, CalendarOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { truncateText } from '../../../utils';
import { fetApiCourseAction } from '../../../redux/action/adminAction/courseManagerAction';
import styles from './course.module.scss'
import clsx from 'clsx';
import adminService from '../../../services/adminSevice';
import Swal from 'sweetalert2';



const CourseManager = (props) => {

    const dispatch = useDispatch();
    const { courseList } = useSelector(state => state.courseManagerSlice);
    const navigate = useNavigate();



    const data = courseList?.items;

    // handle change pagination
    const handleChangePagination = async (pagination) => {
        dispatch(fetApiCourseAction(pagination.current));
    };

    // xóa khóa học
    const fetchApiDeleteCourse = async (maKH, courseName) => {

        Swal.fire({
            title: 'Có Chắc Bạn Muốn Xóa Khóa Học',
            text: courseName,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa Khóa Học',
            cancelButtonText: 'Hủy Bỏ'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await adminService.getApiDeleteCourse(maKH);
                    Swal.fire(res.data, '', 'success').then((result) => {
                        dispatch(fetApiCourseAction());
                    })
                } catch (err) {
                    Swal.fire('', err.response.data, 'error')
                };
            };
        });

    };

    // tìm kiếm khóa học
    const { Search } = Input;
    const onSearch = (value) => {
        dispatch('');
    };


    const columns = [
        {
            title: 'Mã Khóa Học',
            dataIndex: 'maKhoaHoc',
            sorter: (a, b) => a.maKhoaHoc - b.maKhoaHoc,
            sortDirection: ['descend', 'ascend'],
            width: '10%',
            key: '1'
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            render: (text, course, index) => {
                return <Fragment><img src={course.hinhAnh} alt='...' width={50} onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/150/150` }} /></Fragment>
            },
            width: '15%',
            key: '2'
        },
        {
            title: 'Tên Khóa Học',
            dataIndex: 'tenKhoaHoc',
            key: '3',
            sorter: (a, b) => {
                let khoaHocA = a.tenKhoaHoc.toLowerCase().trim();
                let khoaHocB = b.tenPhtenKhoaHocim.toLowerCase().trim();
                if (khoaHocA > khoaHocB) {
                    return 1
                } else {
                    return -1;
                }
            },
            render: (text, course) => {
                return <Fragment>
                    <h4 className='text-green-700'>{course.tenKhoaHoc}</h4>
                </Fragment>
            },
            sortDirection: ['descend', 'ascend'],
            width: '20%',
        },
        {
            title: 'Mô tả',
            key: '4',
            dataIndex: 'moTa',
            sorter: (a, b) => {
                let khoaHocA = a.tenPhim.toLowerCase().trim();
                let khoaHocB = b.tenPhim.toLowerCase().trim();
                if (khoaHocA > khoaHocB) {
                    return 1
                } else {
                    return -1;
                }
            },
            width: '35%',
            sortDirection: ['descend', 'ascend'],
            render: (text, course, index) => {
                return <Fragment>
                    {truncateText(course.moTa, 50)}
                </Fragment>
            }
        },
        {
            title: 'Chức năng',
            key: '5',
            dataIndex: 'maKhoaHoc',
            render: (text, course, index) => {
                return <Fragment>
                    <NavLink key={1} to={`/admin/course/edit/${course.maKhoaHoc}`} className='text-white mr-2 text-2xl'><EditOutlined style={{ color: 'green' }}></EditOutlined></NavLink>

                    <span key={2} className='text-white mx-2 text-2xl cursor-pointer'
                        onClick={() => fetchApiDeleteCourse(course.maKhoaHoc)}><DeleteOutlined style={{ color: 'red' }}></DeleteOutlined></span>

                    <NavLink key={3} to=''
                        onClick={() => { localStorage.setItem('courseImg', course.hinhAnh) }}
                        className='text-white ml-2 text-2xl'><CalendarOutlined style={{ color: 'blue' }} /></NavLink>
                </Fragment>
            },
            width: '20%',
        },
    ];


    return (
        <div>
            <div className="flex justify-between mb-5 md:mb-10">
                <h3 className='text-orange-600 text-xl'>Quản lý Khóa Học</h3>
                <Search
                    allowClear
                    className='w-1/2'
                    placeholder="Nhập từ khóa tìm kiếm"
                    onSearch={onSearch}


                />
                <Button className={clsx('flex items-center', styles.btnGradient)} onClick={() => navigate('/admin/course/create')} type='primary' size='large' ><PlusOutlined /><span>Thêm Khoá Học</span></Button>

            </div>
            <Table pagination={{ total: courseList?.totalCount }} rowKey={'maKhoaHoc'} columns={columns} dataSource={data} onChange={handleChangePagination} />
        </div>
    )
}

export default CourseManager

