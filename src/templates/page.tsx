import React, { useContext } from 'react'
import {PageProps} from 'gatsby'
import { PageViewer, cleanPage, ReactBricksContext, types } from 'react-bricks/frontend'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ErrorNoKeys from '../components/errorNoKeys'
import ErrorNoHomePage from '../components/errorNoHomePage'

interface ReactBricksPageProps {
  pageContext: {
    page: types.Page,
    error: string
  }
}

const Page: React.FC<ReactBricksPageProps> = ({ pageContext: { page, error } }) => {
  
  const { pageTypes, bricks } = useContext(ReactBricksContext)

  // Clean the received content
  // Removes unknown or not allowed bricks
  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null

  return (
    <Layout>
      {pageOk && (
        <>
          <Seo
            title={page.meta.title}
            description={page.meta.description}
            lang={page.meta.language}
          />

          <PageViewer page={pageOk} />
        </>
      )}
      {error === 'NOKEYS' && <ErrorNoKeys />}
      {error === 'NOPAGE' && <ErrorNoHomePage />}
    </Layout>
  )
}

export default Page
