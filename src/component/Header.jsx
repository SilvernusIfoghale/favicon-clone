import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaCoffee, FaTwitter } from "react-icons/fa";
import PageBtn from "./page_components/PageBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="header-container">
        <div className="header-left-content">
          <div className="img-container">
            <img src={logo} alt="favicon-logo" className="img" />
          </div>
          <div className="nav-container">
            <ul>
              <li>
                <a href="#">Converter</a>
                <a href="#">Generator</a>
                <a href="#">Emojis</a>
                <a href="#">Tutorials</a>
                <a href="#">Logos</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="page-btn-container">
          <PageBtn>
            <FaTwitter /> <p>Tweet</p>
          </PageBtn>
          <PageBtn>
            <FaCoffee /> <p>Buy me a coffee</p>
          </PageBtn>
        </div>
        <div className="toggle-bar">
          {nav ? (
            <IoClose onClick={() => setNav(!nav)} />
          ) : (
            <GiHamburgerMenu onClick={() => setNav(!nav)} />
          )}
        </div>
      </div>
      {nav && (
        <div className="mobile-Nav" style={{ padding: "0 25px" }}>
          <div
            className="nav-container"
            style={{
              display: nav && "block",
              margin: nav && "10px 8px",
            }}
          >
            <ul>
              <li style={{ flexDirection: nav && "column" }}>
                <a href="#">Converter</a>
                <a href="#">Generator</a>
                <a href="#">Emojis</a>
                <a href="#">Tutorials</a>
                <a href="#">Logos</a>
              </li>
            </ul>
          </div>
          <div
            className="page-btn-container"
            style={{
              display: nav && "block",
              justifyContent: nav && "space-between",

              padding: nav && "7px 0",
            }}
          >
            <PageBtn>
              <FaTwitter /> <p>Tweet</p>
            </PageBtn>
            <PageBtn>
              <FaCoffee /> <p>Buy me a coffee</p>
            </PageBtn>
          </div>
        </div>
      )}
    </>
  );
}
