import React from "react";
import {
  FaSearch,
  FaRegCalendarAlt,
  FaWallet,
  FaMapMarkerAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { FaUtensils } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import './Header.css'; // custom styles here

const Header = () => {
  const isLoggedIn = false; // Replace with actual login state

  return (
    <nav className="navbar-biryani shadow-sm">
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
        {/* Branding */}
        <div className="d-flex align-items-center flex-wrap mb-2 mb-md-0">
          <a className="brand-logo d-flex align-items-center me-4 text-decoration-none" href="/">
            <img
              src="/assets/AllImges/logoImg.png"
              alt="Delight Biryani Logo"
              width={55}
              height={55}
              className="me-3"
            />
            <div className="brand-text d-flex flex-column">
              <span className="brand-name">DELIGHT</span>
              <span className="brand-tagline">BIRYANI & FLAVORS</span>
            </div>
          </a>

          <div className="d-flex align-items-center location-select text-white">
            <FaMapMarkerAlt className="me-2" color="#f44336" />
            <span>Select Location</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="d-flex flex-wrap align-items-center">
          {/* Search */}
          <div className="search-wrapper d-flex align-items-center me-3 mb-2 mb-md-0">
            <FaSearch className="me-2" size={18} />
            <input
              type="text"
              placeholder="Search biryani, kebab..."
              className="search-input"
            />
          </div>

          {/* Navigation Links */}
          <NavLink to="/menu" className="nav-link-item"> <FaUtensils className="me-2" /> Menu </NavLink>
          <NavLink to="/offers" className="nav-link-item"> <FaWallet className="me-2" /> Offers </NavLink>
          <NavLink to="/reservation" className="nav-link-item"> <FaRegCalendarAlt className="me-2" /> Reserve </NavLink>
          <NavLink to="/cart" className="nav-link-item"> <FaShoppingCart className="me-2" /> Cart </NavLink>

          {/* Login / Account */}
          {isLoggedIn ? (
            <NavLink to="/account" className="btn btn-outline-light ms-3">My Account</NavLink>
          ) : (
            <NavLink to="/login" className="btn btn-outline-warning ms-3">Login</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
