import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <NavLink to="/">ThapaReactQuery</NavLink>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/trad">FetchOld</NavLink></li>
        <li><NavLink to="/rq">FetchRQ</NavLink></li>
        <li><NavLink to="/infinite">InfiniteScroll</NavLink></li>
      </ul>
    </header>
  )
}

export default Header