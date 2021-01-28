import React from 'react'
import { Admin, AppSettings } from 'react-bricks'
import { Helmet } from 'react-helmet'

const AdminAppSettings: React.FC = () => {
  return (
    <Admin>
      <Helmet title="App Settings" />
      <AppSettings />
    </Admin>
  )
}

export default AdminAppSettings
