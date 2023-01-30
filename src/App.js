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
import CourseManager from './pages/adminManager/courseManager/CourseManager';
import Event from './pages/event/Event';
import Blog from './pages/blog/Blog';
import CoursesPage from './pages/courses/CoursesPage';
import CategoryPage from './pages/categoryCourse/CategoryPage';
import SearchPage from './pages/search/SearchPage';
import AppRoute from './HOC/AppRoute';


function App() {

  const dispatch = useDispatch();
  

  // fetch api profile
  useEffect(() => {
    if (localStorage.getItem('Token')) {
      dispatch(fetApiProfileAction);
    }

  }, []);

  return (
    <div>
      <GlobalLoading />
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomeTemplate />}>
            <Route index path='' element={<Home />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
            <Route path='profile' element={<AppRoute component={Profile} isPrivate />} ></Route>
            <Route path='about' element={<Information />}></Route>
            <Route path='event' element={<Event />}></Route>
            <Route path='blog' element={<Blog />}></Route>
            <Route path='courses' element={<CoursesPage />}></Route>
            <Route path='category-courses/:id' element={<CategoryPage />}></Route>
            <Route path='search/:key' element={<SearchPage />}></Route>

          </Route>

          <Route path='user' element={<UserTemplate />}>
            <Route path='login' element={<AppRoute component={Login} isAuth />}></Route>
            <Route path='register' element={<AppRoute component={Register} isAuth />}></Route>
          </Route>

          <Route path='admin' element={<AdminTemplate />}>
            <Route path='' element={<AppRoute component={CourseManager} isAdmin />}></Route>
            <Route path='account' element={<AppRoute component={AccountManager} isAdmin />}></Route>
            <Route path='account/create' element={<AppRoute component={CreateAccount} isAdmin />}></Route>
            <Route path='account/create/edit' element={<AppRoute component={EditAccount} isAdmin />}></Route>
          </Route>

          <Route path='test' element={<AdminTemplate/>} />

          <Route path='*' element={<Navigate to='' replace />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
