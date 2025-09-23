import React from "react";
import ImagesPaths from "../shared/ImagesPaths";
import {
  FaSearch,
  FaRegCalendarAlt,
  FaWallet,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaUtensils } from "react-icons/fa6";

const Header = () => {
  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "whitesmoke",
        padding: "10px 20px",
        borderBottom: "1px solid #ddd",
      }}
    >
    <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
  {/* Brand Logo + Text + Location */}
  <div className="d-flex align-items-center flex-wrap mb-2 mb-md-0">
    <a className="d-flex align-items-center me-3 text-decoration-none" href="#">
      <img
        src={ImagesPaths.logoImg}
        alt="Logo"
        width={50}
        height={50}
        className="me-3"
      />
      <div className="d-flex flex-column">
        <span
          style={{ fontWeight: "bold", color: "orange", fontSize: "20px" }}
        >
          DELIGHT
        </span>
        <span style={{ color: "purple", fontSize: "14px" }}>
          TASTE & AUROMA
        </span>
      </div>
    </a>

    {/* Location Selector */}
    <a
      href="#"
      className="d-flex align-items-center text-secondary cursor-pointer text-decoration-none"
    >
      <FaMapMarkerAlt className="me-2" size={18} color="red" />
      <span style={{ fontSize: "16px", color: "dodgerblue" }}>
        Select your location
      </span>
    </a>
  </div>

  {/* Right Side Links */}
  <div className="d-flex flex-wrap align-items-center">
    <a
      href="#"
      className="d-flex align-items-center text-secondary cursor-pointer text-decoration-none me-3 mb-2 mb-md-0"
    >
      <FaSearch className="me-2" size={18} />
      <span style={{ fontSize: "16px" }}>Search</span>
    </a>

    <a
      href="#"
      className="d-flex align-items-center text-secondary cursor-pointer text-decoration-none me-3 mb-2 mb-md-0"
    >
      <FaUtensils className="me-2" size={18} />
      <span style={{ fontSize: "16px" }}>Menu</span>
    </a>

    <a
      href="#"
      className="d-flex align-items-center text-secondary cursor-pointer text-decoration-none me-3 mb-2 mb-md-0"
    >
      <FaRegCalendarAlt className="me-2" size={18} />
      <span style={{ fontSize: "16px" }}>Book a Table</span>
    </a>

    <a
      href="#"
      className="d-flex align-items-center text-secondary cursor-pointer text-decoration-none me-3 mb-2 mb-md-0"
    >
      <FaWallet className="me-2" size={18} />
      <span style={{ fontSize: "16px" }}>Wallet</span>
    </a>

    {/* Login Button with border only */}
    <a
      href="#"
      className="btn btn-outline-primary text-decoration-none"
      style={{ fontSize: "16px" }}
    >
      Login
    </a>
  </div>
</div>

    </nav>
  );
};

export default Header;
