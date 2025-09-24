// src/pages/SearchPage.jsx
import React, { useState } from "react";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import searchImage from '../assets/AllImges/serachPageImg.svg'
const SearchPage = () => {
  const [query, setQuery] = useState("");

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Container className="py-4">
        {/* Back Button + Search Bar */}
        <div className="d-flex align-items-center mb-4">
          <FaArrowLeft
            size={22}
            className="me-3"
            style={{ cursor: "pointer" }}
            onClick={() => window.history.back()}
          />
          <InputGroup>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </InputGroup>
        </div>

        {/* Empty State */}
        {query.trim() === "" && (
          <div className="text-center mt-5">
            <img
              src={searchImage}
              alt="Search Food"
              style={{ width: "250px", maxWidth: "80%" }}
            />
            <h5 className="mt-3 fw-bold">Search for Food!</h5>
          </div>
        )}

        {/* Results */}
        {query.trim() !== "" && (
          <div className="mt-4">
            <h6 className="fw-bold">Results for "{query}"</h6>
            <p className="text-muted">No items found. (Integrate API here)</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default SearchPage;
