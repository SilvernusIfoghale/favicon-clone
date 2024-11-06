import React from "react";
import ArticleCard from "./page_components/ArticleCard";
import { resource } from "./resourceDb/db";

export default function Article() {
  return (
    <div>
      <div className="article-section">
        <h2>Resources</h2>
        <div className="article-container">
          {resource.map((item, index) => (
            <ArticleCard key={index} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
