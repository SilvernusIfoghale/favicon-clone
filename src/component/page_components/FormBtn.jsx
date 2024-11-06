import React from "react";

export default function FormBtn({ text }) {
  return (
    <div>
      <div className="btn-send">
        <button>{text}</button>
      </div>
    </div>
  );
}
