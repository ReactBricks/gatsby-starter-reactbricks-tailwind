import React from 'react'

import { Preview } from 'react-bricks/frontend'
import { Helmet } from 'react-helmet'

const PagePreview: React.FC = () => {
  return (
    <>
      <Helmet title="Preview" />
      <Preview />
    </>
  )
}

export default PagePreview
