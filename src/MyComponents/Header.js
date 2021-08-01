import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {

  return (
    <div className="bg-secondary">
    <nav className="navbar p-2 navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler btn btn-primary  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto m-1 mb-lg-0  ">
            <li className="nav-item ">
              <Link className="nav-link btn btn-dark btn-lg" aria-current="page" to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-dark btn-lg h3" to="/about">About</Link>
            </li>
          </ul>
      
          {props.searchBar ? <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success " type="submit">Search</button>
          </form> : "No Search bar"}
        </div>
      </div>
    
    </nav>
    </div>
  
  )
}
// Header.defaultProps = {
//   title: "Your Title is",
//   searchBar: true
// }

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}