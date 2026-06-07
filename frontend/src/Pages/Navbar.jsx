import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="container">
          <li className="list"><Link className='link' to="/">Home</Link></li>
          <li className="list"><Link className='link' to="/about">About</Link></li>
          <li className="list"><Link className='link' to="/services">Services</Link></li>
          <li className="list"><Link className='link' to="/contact">Contact</Link></li>
          <li className="list">
            <Link className="link" to='/parent'>props</Link>
          </li>
          <li className="list">
            <Link className="link" to='/useState'>useState</Link>
          </li>
          <li className="list">
            <Link className="link" to='/useEffects'>useEffects</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar