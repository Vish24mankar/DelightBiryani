import React, { useState, useEffect } from "react";
import popupImg from "../assets/AllImges/PopUpImg.jpg"; // your image path

const ImagePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup automatically after component mounts
  useEffect(() => {
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null; // hide popup when false

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={closePopup} // click outside image to close
    >
      <div
        style={{
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking on image
      >
        {/* Close button */}
        <button
          onClick={closePopup}
          style={{
            position: "absolute",
            top: "-15px",
            right: "-15px",
            background: "whitesmoke",
            color: "black",
            border: "none",
            borderRadius: "5%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          ×
        </button>

        {/* Popup Image */}
        <img
          src={popupImg}
          alt="Popup"
          style={{
            height: "600px",
            width: "500px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default ImagePopup;
