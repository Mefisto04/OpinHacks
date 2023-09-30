// import logo from './logo.svg';
import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed inset-0 bg-dark">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/patient">Info</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Desktop">Cards</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Map">Map</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Meet">Meet</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/payment">Payment</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  );
}

export default Navbar;
