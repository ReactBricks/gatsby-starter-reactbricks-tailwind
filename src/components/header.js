import { Link } from 'gatsby'
import React from 'react'

import gatsbyLogo from '../images/gatsby-icon.png'
import rbLogo from '../images/reactbricks-icon.svg'

const Header = () => (
  <header className="py-8">
    <div className="max-w-4xl mx-auto">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex items-center">
          <img src={rbLogo} className="w-10" alt="React Bricks" />
          <img src={gatsbyLogo} className="w-10 ml-4" alt="Gatsby" />
          <h1 className="ml-4 text-xl">
            <Link to="/" className="text-gray-800 hover:text-pink-700">
              React Bricks + Gatsby + Tailwind
            </Link>
          </h1>
        </div>
        <Link to="/admin">
          Admin Dashboard &raquo;
        </Link>
      </div>
    </div>
  </header>
)

export default Header
