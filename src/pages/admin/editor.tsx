import React from 'react'
import { Admin, Editor } from 'react-bricks'
import { Helmet } from 'react-helmet'

const AdminEditor: React.FC = () => {
  return (
    <Admin>
      <Helmet title="Editor" />
      <Editor />
    </Admin>
  )
}

export default AdminEditor
