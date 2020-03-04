import React from 'react'
import { ReactBricks, PageViewer, cleanPage } from 'react-bricks'
import config from '../react-bricks/config'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NoPagesError from './noPagesError'

const Page = ({ pageContext: { page } }) => {
  if (!page) {
    return <NoPagesError />
  }

  // Clean the received content
  // Removes unknown or not allowed bricks
  const pageOk = cleanPage(page, config.pageTypeSchema, config.blockTypeSchema)

  return (
    <ReactBricks {...config}>
      <SEO title={page.meta.title} description={page.meta.description} lang={page.meta.language} />
      <Layout>
        <PageViewer page={pageOk} />
      </Layout>
    </ReactBricks>
  )
}

export default Page
