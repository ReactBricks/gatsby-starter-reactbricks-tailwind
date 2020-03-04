import React from 'react'
import { ReactBricks, Admin, Editor } from 'react-bricks'
import Helmet from 'react-helmet'
import config from '../../react-bricks/config'

const AdminEditor = () => {
  return (
    <ReactBricks {...config}>
      <Helmet title="Editor" />
      <Admin>
        <Editor />
      </Admin>
    </ReactBricks>
  )
}

export default AdminEditor
