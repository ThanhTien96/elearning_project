import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomeTemplate from './template/homeTemplate/HomeTemplate';
import UserTemplate from './template/userTemplate/UserTemplate';
import Login from './pages/user/Login';
import Register from './pages/user/Register.jsx';
import Home from './pages/home/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomeTemplate/>}>
            <Route index path='' element={<Home />}></Route>
          </Route>

          <Route path='user' element={<UserTemplate />}>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
