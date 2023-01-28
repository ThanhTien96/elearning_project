
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, Fragment } from 'react';
import { fetApiCourseAction } from '../../../redux/action/adminAction/courseManagerAction';
import { clsx } from 'clsx';
import { Button, Table, Input } from 'antd';
//import styles from './admin.module.scss';
import { PlusOutlined } from '@ant-design/icons';
import { truncateText } from '../../../utils/index';


const CourseManager = (props) => {

    const dispatch = useDispatch();
    const courseList = useSelector(state => state.courseManagerSlice);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetApiCourseAction());
    }, [])

    const columns = [
        {
            title: 'Mã Khoá Học',
            dataIndex: 'maKhoaHoc',
            key: '1',
            sorter: (a, b) => a.maKhoaHoc - b.maKhoaHoc,
            sortDirection: ['descend', 'ascend'],
            width: '10%',
        },
        {
            title: 'Tên Khoá Học',
            key: '2',
            sorter: (a, b) => {
                let tenA = a.tenPhim.toLowerCase().trim();
                let tenB = b.tenPhim.toLowerCase().trim();
                if (tenA > tenB) {
                    return 1
                } else {
                    return -1;
                }
            },
            dataIndex: 'tenKhoaHoc',
            width: '10%',
            render: (text, course, index) => {
                return <Fragment>
                    <p>{course.tenKhoaHoc}</p>
                </Fragment>
            },

        },
        {
            title: 'Hình Ảnh',
            key: '3',
            dataIndex: 'hinhAnh',
            width: '10%',
            render: (text, course, index) => {
                return <Fragment>
                    <img src={course.hinhAnh} alt={course.tenKhoaHoc} width={50} onError={(e) => { e.tartget.onError = null; e.target.src = `https://picsum.photos/id/${index}/150/150` }} />
                </Fragment>
            },

        },
        {
            title: 'Mô Tả',
            key: '4',
            dataIndex: 'moTa',
            sorter: (a, b) => {
                let tenA = a.tenKhoaHoc.toLowerCase().trim();
                let tenB = b.tenKhoaHoc.toLowerCase().trim();
                if (tenA > tenB) {
                    return 1
                } else {
                    return -1;
                }
            },
            width: '35%',
            render: (text, course, index) => {
                return <Fragment>
                    {truncateText(course.moTa, 50)}
                </Fragment>
            }
        },
        
        {
            title: 'Ngày Tạo',
            key: '7',
            dataIndex: 'ngayTao',
            width: '10%',
            render: (text, course, index) => {
                return <Fragment>
                    <p>{course.ngayTao}</p>
                </Fragment>
            }
        },
        {
            title: 'Tác Vụ',
            key: '8',
            dataIndex: 'maKhoaHoc',
            width: '10%',
            render: (text, course, index) => {
                return <Fragment>
                    <param>them xoa sua</param>
                </Fragment>
            }
        },
    ];


    //const data = courseList?.items;
    const onChange = async (pagination) => {
        console.log(pagination.current)
        dispatch(fetApiCourseAction(pagination.current));
    };

    const { Search } = Input;

    const onSearch = (value) => {
        if (value) {
            //dispatch(searchAccountApi(value));
        } else {
            //dispatch(fetchApiAccountAction());
        }
    };

    return (
        <div>
            <div className="flex justify-between mb-5 md:mb-10" >
                <h3 className='text-teal-600 text-xl font-semibold'>Quản lý Khoá Học</h3>
                <Search
                    allowClear
                    className='w-1/2'
                    placeholder="Nhập từ khóa tìm kiếm"
                    onSearch={onSearch}
                />
                <Button className={clsx('flex items-center')} onClick={() => navigate('/admin/course/create')} type='primary' size='large'><PlusOutlined /> <span>Thêm Khoá Học</span></Button>

            </div>
            <Table pagination={{ total: courseList?.totalCount }} rowKey={'maKhoaHoc'} columns={columns} onChange={onChange} />
        </div>


    )
}


export default CourseManager