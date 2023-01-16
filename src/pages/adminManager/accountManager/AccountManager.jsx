import React, { Fragment } from 'react'
import { Table, Input, Button } from 'antd';
import { EditOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { getApiAccount } from '../../../redux/reducer/admin/accountManagerSlice';


const AccountManager = (props) => {

  const dispatch = useDispatch();
  const userList = useSelector(state => state.accountManagerSlice.accountList);
  const navigate = useNavigate();


  const columns = [
    {
      title: 'Họ Tên',
      dataIndex: 'hoTen',
      key: '3',
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
          <h4 className='text-green-700'>{user.hoTen}</h4>
        </Fragment>
      },
      sortDirection: ['descend', 'ascend'],
      width: '20%',
    },
    {
      title: 'Tài Khoản',
      key: '4',
      dataIndex: 'taiKhoan',
      width: '15%',
      render: (text, user, index) => {
        return <Fragment>
          <p>{user.taiKhoan}</p>
        </Fragment>
      },

    },
    {
      title: 'Số Điện Thoại',
      key: '4',
      dataIndex: 'soDT',
      width: '20%',
      render: (text, user, index) => {
        return <Fragment>
          <p>{user.soDT}</p>
        </Fragment>
      }
    },
    {
      title: 'Mã Loại Người Dùng',
      key: '4',
      dataIndex: 'maLoaiNguoiDung',
      width: '20%',
      render: (text, user, index) => {
        return <Fragment>
          <p>{user.maLoaiNguoiDung}</p>
        </Fragment>
      }
    },
    {
      title: 'Mã Nhóm',
      key: '4',
      dataIndex: 'maNhom',
      width: '20%',
      render: (text, user, index) => {
        return <Fragment>
          <p>{user.maNhom}</p>
        </Fragment>
      }
    },
    {
      title: 'Email',
      key: '4',
      dataIndex: 'email',
      width: '20%',
      render: (text, user, index) => {
        return <Fragment>
          <p>{user.email}</p>
        </Fragment>
      }
    },


  ];

  const data = userList?.items;
  const onChange = async (pagination) => {
    dispatch(getApiAccount(pagination.current));
  };

  return (
    <div>
      <div className="flex justify-between mb-5 md:mb-10">
        <h3 className='text-orange-600 text-xl'>Quản lý Tài Khoản Người Dùng</h3>
        {/* <Search
            allowClear
            className='w-1/2'
            placeholder="Nhập từ khóa tìm kiếm"
            onSearch={onSearch}

        /> */}
        <Button onClick={() => navigate('/admin/account/create')} type='primary' size='large'><UserOutlined />Thêm Tài Khoản</Button>

      </div>
      <Table pagination={{ total: userList?.totalCount }} rowKey={'taiKhoan'} columns={columns} dataSource={data} onChange={onChange} />
    </div>

   
  )
}

export default AccountManager