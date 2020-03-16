const React = require('react')
const ReactBricks = require('react-bricks').ReactBricks

const config = require('./src/react-bricks/config').default
require('./src/css/style.css')

// Wraps every page in ReactBricks component
exports.wrapPageElement = ({ element }) => {
  return <ReactBricks {...config}>{element}</ReactBricks>
}
