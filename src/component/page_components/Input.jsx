import React from "react";

export default function Input({ placeholder }) {
  return (
    <div className="input-container">
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
