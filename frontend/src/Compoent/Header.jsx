import React from "react";
import ImagesPaths from "../shared/ImagesPaths";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={ImagesPaths.logo}
            alt="Logo"
            width="50"
            height="50"
            className="me-3"
          />
          <div className="d-flex flex-column">
            <span style={{ fontWeight: "bold", color: "orange", fontSize: "20px" }}>
              DELIGHT
            </span>
            <span style={{ color: "purple", fontSize: "14px" }}>
              TASTE & AUROMA
            </span>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
