import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {



  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top navbar-light bg-light p-0"
        aria-label="Main Navigation"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img
              src="./images/logo.png"
              alt="Circular logo with a light blue infinity symbol and three abstract human figures above it on a dark blue background. Below the symbol are three horizontal lines suggesting waves. The background shows a blurred word 'HIMALAYA.'"
              aria-label="ARC logo"
            />
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to='/' className="nav-link px-3" href="index.html" >
                  Home
                </NavLink>
              </li>
              {/* About Us Dropdown */}
              <li className="nav-item">
                <NavLink to='/about' className="nav-link px-3" href="about.html"  >
                  {" "}
                  About Us{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/research' className="nav-link px-3" href="research-projects.html" >
                  Research &amp; Projects
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/gallery' className="nav-link px-3" href="gallery.html" >
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contact' className="nav-link px-3" href="contact.html" >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
