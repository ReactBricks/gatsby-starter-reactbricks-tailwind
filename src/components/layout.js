import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto">
        <main className="content">{children}</main>
        <footer className="border-t border-gray-400 pt-3 pb-5">
          © {new Date().getFullYear()}{' '}
          <a href="https://reactbricks.com">React Bricks</a>, built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
