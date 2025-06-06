import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SkipSizeSelection.css";
import { useNavigate } from "react-router-dom";

const SkipSizeSelection = () => {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(" https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
      .then((res) => setSkips(res.data))
      .catch((err) => console.error("Failed to fetch skips", err));
  }, []);

  const handleCardClick = (skip) => {
    setSelectedSkip(skip);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedSkip(null);
  };

  return (
    <div className="skip-selector-container">
      <h2 className="skip-title">Choose Your Skip Size</h2>
      <div className="skip-grid">
        {skips.map((skip) => (
          <div key={skip.id} className="skip-card" onClick={() => handleCardClick(skip)}>
            <h3>{skip.name}</h3>
            <p><strong>Price:</strong> £{skip.price}</p>
          </div>
        ))}
      </div>

      {showModal && selectedSkip && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedSkip.name}</h2>
            <p>{selectedSkip.description}</p>
            <p><strong>Capacity:</strong> {selectedSkip.capacity} yards</p>
            <p><strong>Price:</strong> £{selectedSkip.price}</p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkipSizeSelection;
