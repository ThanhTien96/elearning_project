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
import { useDispatch } from 'react-redux';
import { fetApiProfileAction } from './redux/action/userAction';
import Profile from './pages/user/Profile';



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
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomeTemplate/>}>
            <Route index path='' element={<Home />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
            <Route path='profile' element={<Profile />} ></Route>
            
            <Route path='*' element={<Navigate to='' replace />}></Route>
          </Route>

          <Route path='user' element={<UserTemplate />}>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
          </Route>

          <Route path='admin' element={<AdminTemplate />}>

            <Route path='account' element={<AccountManager />}></Route>

          </Route>

          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
