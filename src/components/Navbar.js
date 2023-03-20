import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//use  shortcut rfc
export default function Navbar(props) {
  return (
    
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>

        <div className="container-fluid" >
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{props.itm1}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{props.itm2}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">{props.itm3}</Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>


            </ul>
            <form className="d-flex" role="search">
              <input className="form-control mx-5" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success " type="submit">Search</button>
            </form>

            <div className={`form-check form-switch mx-5 text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
            </div>

          </div>

        </div>
      </nav>
    
  );
}

Navbar.prototype = { title: PropTypes.string, itm1: PropTypes.string, itm2: PropTypes.string, ptm3: PropTypes.string }
// Navbar.defaultProps = {
//     title: 'set title here',
//     itm1:'set item1 here',
//     itm2:'set item2 here',
//     itm3:'set item3 here'
// }