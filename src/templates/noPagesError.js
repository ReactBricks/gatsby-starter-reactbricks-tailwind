import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NoPagesError = () => (
  <Layout>
    <div style={{ minHeight: 500, paddingTop: 50 }}>
      <p style={{ marginBottom: 20 }}>
        There's no published page set up in the CMS or there's a problem with
        the configuration.
      </p>
      <p style={{ marginBottom: 20 }}>
        To start you need to create a new{' '}
        <a href="https://reactbricks.com">React Bricks</a> App and set the{' '}
        <code>appId</code> and <code>apiKey</code> in the{' '}
        <code>credentials.config.js</code> file.
      </p>
      <p>
        You may create a new page from the{' '}
        <Link to="/admin">Admin dashboard</Link>.
      </p>
      <p>
        Remember that the page with the <code>home</code> slug will become your
        website homepage.
      </p>
    </div>
  </Layout>
)

export default NoPagesError
