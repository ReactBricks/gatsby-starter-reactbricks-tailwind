import { Link } from 'gatsby'
import React from 'react'

import gatsbyLogo from '../images/gatsby-icon.png'
import rbLogo from '../images/reactbricks-icon.svg'

const Header = () => (
  <header className="pt-8">
    <div className="max-w-4xl mx-auto px-6">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
          <div className="flex flex-row items-center mb-5 sm:mb-0">
            <img src={rbLogo} className="w-10" alt="React Bricks" />
            <img src={gatsbyLogo} className="w-10 ml-4" alt="Gatsby" />
          </div>
          <h1 className="ml-4 text-xl text-center">
            <Link to="/" className="text-gray-800 hover:text-pink-700">
              React Bricks + Gatsby + Tailwind
            </Link>
          </h1>
        </div>
        <Link to="/admin">Admin Dashboard &raquo;</Link>
      </div>
    </div>
  </header>
)

export default Header
