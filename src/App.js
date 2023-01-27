import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomeTemplate from './template/homeTemplate/HomeTemplate';
import UserTemplate from './template/userTemplate/UserTemplate';
import Login from './pages/user/Login';
import Register from './pages/user/Register.jsx';
import Home from './pages/home/Home';
import AdminTemplate from './template/adminTemplate/AdminTemplate';

import AccountManager from './pages/adminManager/accountManager/AccountManager';

import Detail from './pages/detail/Detail';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetApiProfileAction } from './redux/action/userAction';
import Profile from './pages/user/profile/Profile';
import CreateAccount from './pages/adminManager/accountManager/CreateAccount';
import EditAccount from './pages/adminManager/accountManager/EditAccount';
import GlobalLoading from './components/global/GlobalLoading';
import Information from './pages/information/Information';
import Event from './pages/event/Event';
import Blog from './pages/blog/Blog';



function App() {

  const dispatch = useDispatch();

  // fetch api profile
  useEffect(() => {
    if(localStorage.getItem('Token')) {
      dispatch(fetApiProfileAction);
    }
  }, []);
  

  return (
    <div>
      <GlobalLoading />
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomeTemplate/>}>
            <Route index path='' element={<Home />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
            <Route path='profile' element={<Profile />} ></Route>
            <Route path='about' element={<Information />}></Route>
            <Route path='event' element={<Event />}></Route>
            <Route path='blog' element={<Blog />}></Route>
            
            <Route path='*' element={<Navigate to='' replace />}></Route>
          </Route>

          <Route path='user' element={<UserTemplate />}>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
          </Route>

          <Route path='admin' element={<AdminTemplate />}>

            <Route path='account' element={<AccountManager />}></Route>
            <Route path='account/create' element={<CreateAccount />}></Route>
            <Route path='account/create/edit' element={<EditAccount />}></Route>
          </Route>

          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
