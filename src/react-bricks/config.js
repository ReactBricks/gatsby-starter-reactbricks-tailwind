import React from 'react'
import { Link, navigate } from 'gatsby'
import pageTypeSchema from './pageTypeSchema'
import blockTypeSchema from './bricks'
import { appId, apiKey } from '../../credentials.config'
import logo from '../images/logo.svg'

const config = {
  appId,
  apiKey,
  pageTypeSchema,
  blockTypeSchema,
  logo,
  contentClassName: 'content',
  renderLocalLink: ({ href, children, className, activeClassName }) => <Link to={href} className={className} activeClassName={activeClassName}>{children}</Link>,
  navigate,
}

export default config
