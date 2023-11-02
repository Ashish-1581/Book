import React from 'react'
import { NavLink, Link } from "react-router-dom";

const header = () => {
  return (
    <>
    <ul className="nav justify-content-center bg-dark">
  <li className="nav-item">
    <NavLink  className="nav-link " aria-current="page" to="/">Home</NavLink>
  </li>
  <li className="nav-item">
  <NavLink  className="nav-link " aria-current="page" to="/create-book">Create Book</NavLink>
  </li>
  
</ul>

    
    </>
  )
}

export default header