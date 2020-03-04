import React from 'react'
import { ReactBricks, Admin, Login } from 'react-bricks'
import Helmet from 'react-helmet'
import config from '../../react-bricks/config'

const AdminLogin = () => {
  return (
    <ReactBricks {...config}>
      <Helmet title="Login" />
      <Admin isLogin>
        <Login />
      </Admin>
    </ReactBricks>
  )
}

export default AdminLogin
