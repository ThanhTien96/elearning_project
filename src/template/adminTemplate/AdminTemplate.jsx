import {  UserOutlined,  ReadOutlined } from '@ant-design/icons/lib/icons';
import {  Breadcrumb, Layout, Menu,  theme } from 'antd'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { ExportOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import { fetchApiAccountAction } from '../../redux/action/adminAction/accountManagerAction';
import { fetchApiLoginAction } from '../../redux/action/userAction';
import { fetApiCourseAction } from '../../redux/action/adminAction/courseManagerAction';




const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<NavLink to="/admin/account">Quản lý người dùng </NavLink>, '1', <UserOutlined />),
  getItem(<NavLink to="/admin">Quản lý khóa học </NavLink>, '2', <ReadOutlined />),

];

const Dashboard = (props) => {

  const user = useSelector(state => state.userSlice.profile);
  

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchApiAccountAction());
    dispatch(fetApiCourseAction());
    window.scrollTo(0, 0);
  }, [])



  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  //log out
  const handleLogOut = () => {
    Swal.fire({
      title: 'Bạn có muốn đăng xuất',
      icon: 'question',
      confirmButtonText: 'Đăng Xuất',
      showCancelButton: true,
      cancelButtonText: 'Hủy Bỏ',
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(fetchApiLoginAction(null));
        localStorage.removeItem('Token');
        navigate('/');
        Swal.fire('Đăn Xuất Thành Công !', '', 'success')
      } 

    })
  }



  return (
    <>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className='py-5 px-5'>
            <NavLink to='/'><img className='w-40' src={require('../../assets/logo/E-learning.png')} alt="" /></NavLink>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: "10px 40px",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              background: colorBgContainer,
            }}
          >
            <h1 className="text-orange-600 font-semibold text-1xl mr-3 capitalize">{user?.hoTen}</h1>
            <img className="w-10 h-10 object-cover rounded-full" alt="User avatar" src="https://picsum.photos/150/150" />
            <NavLink to={'/'} 
            onClick={handleLogOut}
            className='adminLink text-black ml-5 hover:text-orange-400 transition-all flex items-center'><ExportOutlined  style={{fontSize: '1.5rem', marginRight: '5px'}} /> Đăng Xuất</NavLink>
          </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
            </Breadcrumb>
            <Outlet />
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              padding: '10px 50px',
            }}
          >
            Copyright © 2022. All rights reserved by ThanhTienDev & ThanhPhuocDev.
          </Footer>
        </Layout>
      </Layout>
    </>
  )
}

export default Dashboard