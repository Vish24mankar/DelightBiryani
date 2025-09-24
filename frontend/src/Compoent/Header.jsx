import React, { useState, useCallback } from "react";
import ImagesPaths from "../shared/ImagesPaths";
import {
  FaSearch,
  FaRegCalendarAlt,
  FaWallet,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaUtensils } from "react-icons/fa6";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "200px",
  borderRadius: "8px",
};

const defaultCenter = { lat: 19.076, lng: 72.8777 }; // Default location

const Header = () => {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [activeTab, setActiveTab] = useState("delivery");
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);

  // Close modal on background click
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("custom-modal-overlay")) {
      setShowLocationModal(false);
    }
  };

  // Handle marker drag
  const onMarkerDragEnd = useCallback((e) => {
    setMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  }, []);

  return (
    <>
      {/* Navbar */}
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
            <a
              className="d-flex align-items-center me-3 text-decoration-none"
              href="#"
            >
              <img
                src={ImagesPaths.logoImg}
                alt="Logo"
                width={50}
                height={50}
                className="me-3"
              />
              <div className="d-flex flex-column">
                <span
                  style={{
                    fontWeight: "bold",
                    color: "orange",
                    fontSize: "20px",
                  }}
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
              onClick={() => setShowLocationModal(true)}
            >
              <FaMapMarkerAlt className="me-2" size={18} color="red" />
              <span style={{ fontSize: "16px", color: "dodgerblue" }}>
                Select your location
              </span>
            </a>
          </div>

          {/* Right Side Links + Login */}
          <div className="d-flex flex-wrap align-items-center">
            <a href="#" className="d-flex align-items-center text-secondary me-3">
              <FaSearch className="me-2" size={18} /> Search
            </a>
            <a href="#" className="d-flex align-items-center text-secondary me-3">
              <FaUtensils className="me-2" size={18} /> Menu
            </a>
            <a href="#" className="d-flex align-items-center text-secondary me-3">
              <FaRegCalendarAlt className="me-2" size={18} /> Book a Table
            </a>
            <a href="#" className="d-flex align-items-center text-secondary me-3">
              <FaWallet className="me-2" size={18} />
            </a>

            {/* Login Button */}
            <button
              type="button"
              className="btn btn-outline-primary"
              style={{ fontSize: "16px" }}
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Location Modal */}
      {showLocationModal && (
        <div
          className="custom-modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1050,
          }}
          onClick={handleOverlayClick}
        >
          <div
            className="modal-content p-4"
            style={{
              borderRadius: "12px",
              backgroundColor: "#fff",
              width: "500px",
              maxWidth: "95%",
            }}
          >
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold">Enter Location</h4>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowLocationModal(false)}
              ></button>
            </div>

            {/* Tabs */}
            <div className="d-flex mb-3">
              <button
                className={`btn me-2 ${
                  activeTab === "delivery" ? "btn-warning" : "btn-light"
                }`}
                onClick={() => setActiveTab("delivery")}
              >
                Delivery
              </button>
              <button
                className={`btn ${
                  activeTab === "takeaway" ? "btn-warning" : "btn-light"
                }`}
                onClick={() => setActiveTab("takeaway")}
              >
                Takeaway
              </button>
            </div>

            {/* Search Box */}
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Your Area / Locality"
            />

            <button className="btn btn-outline-dark w-100 mb-3">
              📍 Detect Current Location
            </button>

            {/* Google Map */}
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={markerPosition}
                zoom={12}
              >
                <Marker
                  position={markerPosition}
                  draggable={true}
                  onDragEnd={onMarkerDragEnd}
                />
              </GoogleMap>
            </LoadScript>

            <small className="text-muted d-block mb-3 mt-2">
              Note: Drag the map marker to change the delivery location.
            </small>

            <button className="btn btn-warning w-100 fw-bold">
              Confirm Location
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
