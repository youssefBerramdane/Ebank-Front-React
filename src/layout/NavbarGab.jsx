import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../logo.png";

export default function NavbarGab() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
    <a className="navbar-brand" href="#">
  <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
  Ensas Bank
    </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
          <li className="nav-item">
              <a className="nav-link" >Home</a>
          </li>
          <li className="nav-item">
              <Link to="/gab" className="nav-link"  >GAB</Link>
          </li>
          <li className="nav-item">
              <Link to={"/login"} className="nav-link" >Login</Link>
          </li>
          <li><div className="dropdown">
              <button className="btn  dropdown-toggle" type="button" id="Agent" data-bs-toggle="dropdown" aria-expanded="false">
                  Agent
              </button>
              <ul className="dropdown-menu" aria-labelledby="Agent">
                  <li><Link className="dropdown-item" href="/agent/servir">Servir</Link></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                  <li><a className="dropdown-item" href="#">Profil</a></li>
              </ul>
          </div></li>
          <li className="nav-item">
              <Link to={"/backoffice"} className="nav-link" >BackOffice</Link>
          </li>
      </ul>
      <ul className="navbar">

          <div className="dropdown">
              <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  [Username]
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">Login</a></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                  <li><a className="dropdown-item" href="#">Profil</a></li>
              </ul>
          </div>
      </ul>
  </div>

</nav>
  )
}
