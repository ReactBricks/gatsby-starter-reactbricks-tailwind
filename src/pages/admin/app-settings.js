import React from 'react'
import { ReactBricks, Admin, AppSettings } from 'react-bricks'
import Helmet from 'react-helmet'
import config from '../../react-bricks/config'

const AdminAppSettings = () => {
  return (
    <ReactBricks {...config}>
      <Helmet title="App Settings" />
      <Admin>
        <AppSettings />
      </Admin>
    </ReactBricks>
  )
}

export default AdminAppSettings
