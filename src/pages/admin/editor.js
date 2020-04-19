import React from 'react'
import { Admin, Editor } from 'react-bricks'
import { Helmet } from 'react-helmet'

const AdminEditor = () => {
  return (
    <Admin>
      <Helmet title="Editor" />
      <Editor />
    </Admin>
  )
}

export default AdminEditor
