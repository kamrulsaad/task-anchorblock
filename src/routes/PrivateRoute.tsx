import React, { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'

const PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname } = useLocation()
  const { token } = useAppSelector((state) => state.auth)
  return token ? (
    children
  ) : (
    <Navigate to={'/'} state={{ from: pathname }} replace />
  )
}

export default PrivateRoute
