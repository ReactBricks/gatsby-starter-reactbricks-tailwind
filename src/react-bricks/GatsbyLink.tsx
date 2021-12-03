import React from 'react'
import { Link } from 'gatsby'
import { types } from 'react-bricks/frontend'

const GatsbyLink: types.RenderLocalLink = ({ href, children, className, activeClassName }) => (
  <Link to={href} className={className} activeClassName={activeClassName}>
    {children}
  </Link>
)

export default GatsbyLink