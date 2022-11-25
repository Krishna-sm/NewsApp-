import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              News App
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/business">
                    Business
                 </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/entertainment">
                    Entertainment
                 </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/general">
                    General
                 </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/health">
                    Health
                 </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/science">
                    Science
                 </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/sports">
                    Sports
                 </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/technology">
                    Technology
                 </NavLink>
                </li>
                {/* <NavLink className="nav-link" to='/about'>business</a>
          <NavLink className="nav-link" to='/about'>entertainment</a>
          <NavLink className="nav-link" to='/about'>general</a>
          <NavLink className="nav-link" to='/about'>health</a>
          <NavLink className="nav-link" to='/about'>science</a>
          <NavLink className="nav-link" to='/about'>sports</a>
          <NavLink className="nav-link" to='/about'>technology</a> */}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
