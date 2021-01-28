import React from 'react'
import { Admin, Login } from 'react-bricks'
import { Helmet } from 'react-helmet'

const AdminLogin: React.FC = () => {
  return (
    <Admin isLogin>
      <Helmet title="Login" />
      <Login />
    </Admin>
  )
}

export default AdminLogin
