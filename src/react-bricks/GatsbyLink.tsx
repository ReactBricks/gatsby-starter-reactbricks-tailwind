import { Link } from 'gatsby'
import { types } from 'react-bricks'

const GatsbyLink: types.RenderLocalLink = ({ href, children, className, activeClassName }) => (
  <Link to={href} className={className} activeClassName={activeClassName}>
    {children}
  </Link>
)

export default GatsbyLink