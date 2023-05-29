import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/register/RegisterPage';
import User from './components/User';
import RequireAuth from './components/RequireAuth';
import AdminPage from './components/Admin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/login' exact element={<LoginPage />} />
        <Route path='/register' exact element={<RegisterPage/>}/>
        <Route path='/me' element={<User />} />
        <Route element={<RequireAuth />}>
          <Route path='/admin' element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
