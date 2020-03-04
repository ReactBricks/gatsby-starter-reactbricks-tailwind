import React from 'react'
import { ReactBricks, Admin, Playground } from 'react-bricks'
import Helmet from 'react-helmet'
import config from '../../react-bricks/config'

const AdminPlayground = () => {
  return (
    <ReactBricks {...config}>
      <Helmet title="Playground" />
      <Admin>
        <Playground />
      </Admin>
    </ReactBricks>
  )
}

export default AdminPlayground
