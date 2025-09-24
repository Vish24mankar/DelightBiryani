import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logoImg from "../assets/AllImges/logoImg.png";
const Footer = () => {
  return (
    <footer
      className="text-white pt-4"
      style={{ backgroundColor: "#8B0037" }} // same maroon color
    >
      <Container>
        <Row className="gy-4">
          {/* Logo */}
          <Col md={3} sm={12}>
            {/* Logo */}
            <img src={logoImg} alt="LogoImg" style={{ width: "50px" }} />

            {/* Navigation Links */}
            <ul className="list-unstyled mt-3">
              <li>
                <a href="#home" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#search" className="text-white text-decoration-none">
                  Search
                </a>
              </li>
              <li>
                <a href="#menu" className="text-white text-decoration-none">
                  Menu
                </a>
              </li>
              <li>
                <a href="#table" className="text-white text-decoration-none">
                  Table
                </a>
              </li>
              <li>
                <a href="#book" className="text-white text-decoration-none">
                  Book
                </a>
              </li>
            </ul>
          </Col>

          {/* Useful Links */}
          <Col md={3} sm={6}>
            <h6 className="fw-bold">Useful Links</h6>
            <ul className="list-unstyled mt-2">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  About BBK
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Loyalty Program
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Bulk Order
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Media
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Un-subscribe
                </a>
              </li>
            </ul>
          </Col>

          {/* More Info */}
          <Col md={3} sm={6}>
            <h6 className="fw-bold">More Info</h6>
            <ul className="list-unstyled mt-2">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3} sm={12}>
            <h6 className="fw-bold">Contact Us</h6>
            <p className="mb-1">
              Call:{" "}
              <a href="tel:18002122212" className="text-warning fw-bold">
                1800-212-2-212
              </a>
            </p>
            <h6 className="fw-bold mt-3">
              Explore Delight Store App on Mobile
            </h6>
            <div className="d-flex mt-2">
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  style={{ height: "40px", marginRight: "10px" }}
                />
              </a>
              <a href="#">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  style={{ height: "40px" }}
                />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-light my-4" />

        {/* Bottom Section */}
        <Row className="align-items-center text-center text-md-start">
          <Col md={6} sm={12}>
            <a href="#" className="text-white me-3 text-decoration-none">
              Terms & Conditions
            </a>
            <a href="#" className="text-white text-decoration-none">
              Privacy Policy
            </a>
          </Col>
          <Col
            md={6}
            sm={12}
            className="d-flex justify-content-md-end justify-content-center align-items-center mt-3 mt-md-0"
          >
            <span className="me-2">Follow us:</span>
            <a href="#" className="text-white me-3">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white me-3">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-white me-3">
              <FaInstagram />
            </a>
            <a href="#" className="text-white me-3">
              <FaTwitter />
            </a>
            <a href="#" className="text-white me-3">
              <FaYoutube />
            </a>
            <span className="ms-3">V 0.1.0</span>
          </Col>
        </Row>

        <div className="text-center mt-3 pb-2" style={{ fontSize: "14px" }}>
          Copyright © 2025 Sky Gate Hospitality PVT. LTD. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
