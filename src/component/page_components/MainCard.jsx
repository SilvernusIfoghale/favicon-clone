import React from "react";

export default function MainCard({ image, title, text }) {
  return (
    <div>
      <div className="main-card">
        <div className="main-img-container">
          <img src={image} alt="asset-img" className="img" />
        </div>
        <div className="main-card-text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
