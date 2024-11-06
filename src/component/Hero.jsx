import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <h3>
          FAVICON <FaSearch style={{ width: "12px" }} /> <span>GENERATOR</span>
        </h3>
        <h2>
          The only favicon generator you need for your next project. Quickly
          generate your favicon from text, image, or choose from hundreds of
          emojis.
        </h2>
      </div>
    </>
  );
}
