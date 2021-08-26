import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage: React.FC = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>This page doesn't exist.</p>
  </Layout>
)

export default NotFoundPage
