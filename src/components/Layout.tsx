import { Link } from 'gatsby'
import React from 'react'

interface ILayout {
  children: any
  title: string
}

const Layout = ({ children, title }: ILayout) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about-us'>About Us</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
