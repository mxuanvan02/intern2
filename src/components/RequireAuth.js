import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'

const RequireAuth = () => {
  const { isAdmin } = useContext(AuthContext)
  return (
    <>
      {isAdmin
        ? <Outlet />
        : <Navigate to="/login" replace />}
    </>
  )
}
export default RequireAuth;