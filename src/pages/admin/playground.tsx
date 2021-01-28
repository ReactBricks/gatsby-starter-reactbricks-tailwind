import React from 'react'
import { Admin, Playground } from 'react-bricks'
import { Helmet } from 'react-helmet'

const AdminPlayground: React.FC = () => {
  return (
    <Admin>
      <Helmet title="Playground" />
      <Playground />
    </Admin>
  )
}

export default AdminPlayground
