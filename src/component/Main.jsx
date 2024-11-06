import React from "react";
import pngImage from "../assets/asset1.png";
import textImage from "../assets/asset2.png";
import emojiImage from "../assets/asset3.png";
import MainCard from "./page_components/MainCard";

export default function Main() {
  return (
    <div className="main-section">
      <h2>Favicon Generators</h2>
      <div className="main-container">
        <div className="main-cards">
          <MainCard
            image={pngImage}
            title="Image"
            text="If you already have an image or logo that you want to use for your favicon then use this tool to convert your image to the proper favicon
          format."
          />
          <MainCard
            image={textImage}
            title="Text"
            text="If you don't have a logo or image for your website and want to generate a favicon from scratch then use this tool to generate your favicon."
          />
          <MainCard
            image={emojiImage}
            title="Emoji"
            text="Want to use an emoji for your favicon? Choose from a list of hundreds of emojis to generate a favicon for your website."
          />
        </div>
      </div>
    </div>
  );
}
