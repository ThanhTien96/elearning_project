import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeTemplate from './template/homeTemplate/HomeTemplate';
import UserTemplate from './template/userTemplate/UserTemplate';
import Login from './pages/user/Login';
import Register from './pages/user/Register.jsx';
import AdminTemplate from './template/adminTemplate/AdminTemplate';
import CoursceTemplate from './pages/adminManager/coursceManager/CoursceManager';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path='' element={<HomeTemplate/>}></Route>

          <Route path='user' element={<UserTemplate />}>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
          </Route>

          <Route path='admin' element={<AdminTemplate />}>
            <Route path='coursce' element={<CoursceTemplate />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
