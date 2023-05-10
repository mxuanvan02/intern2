import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';
import { useContext } from 'react';
import LoginPage from '../login/LoginPage';

import '../User/index.css'

const User = () => {
  const { auth } = useContext(AuthContext)
  console.log(auth)
  return <Link to="/login" className='text-black'><h1>Bạn cần phải đăng nhập trước.</h1></Link>
}

export default User;