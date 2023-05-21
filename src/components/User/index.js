import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';
import { useContext, useEffect } from 'react';
import LoginPage from '../login/LoginPage';
import Loading from '../Loading'

import '../User/index.css'

const User = () => {
  const { auth, isAuth, isLoading, getMe } = useContext(AuthContext)
  useEffect(() => {
    getMe()

  }, [isAuth])
  console.log(auth)
  if (isLoading) return (<Loading />)
  return (
    <>
      {/* {isAuth ? <> */}
      <h1>{auth.fullName}</h1>
      <h1>{auth.email}</h1>
      {/* </>
          : <Link to="/login" className='text-black'><h1>Bạn cần phải đăng nhập trước.</h1></Link>} */}
    </>
  )
}

export default User;