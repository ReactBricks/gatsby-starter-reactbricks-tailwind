import React from 'react'
import { ReactBricks } from 'react-bricks/frontend'

import config from './src/react-bricks/config'
import './src/css/style.css'

// Wraps every page in ReactBricks component
export const wrapPageElement = ({ element }) => {
  return <ReactBricks {...config}>{element}</ReactBricks>
}
