import React, { useContext } from 'react'
import AuthContext from './AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
    const {isLogin}=useContext(AuthContext)
  return (
    isLogin?<Outlet></Outlet>:<Navigate to="/login"/>
  )
}

export default ProtectedRoute