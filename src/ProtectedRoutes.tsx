import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface ProtectedRouteProps {
  roles?: string[]
}

const ProtectedRoutes = ({ roles }: ProtectedRouteProps) => {
  let userRoles: string[]
  const userRolesString = sessionStorage.getItem('roles')
  if (userRolesString) {
    userRoles = JSON.parse(userRolesString)
  }

  const Auth = sessionStorage.getItem('isLogin')
  if (Auth !== 'true') {
    return <Navigate to='/login' replace />
  }

  // if (roles && roles.length > 0 && !roles.some((role) => userRoles.includes(role))) {
  //   alert('Bạn không có quyền truy cập chức năng này!!')
  //   return <Navigate to='/home' replace />
  // }
  return <Outlet />
}
export default ProtectedRoutes
