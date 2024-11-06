import React from "react";

export default function ArticleCard({ title, text }) {
  return (
    <div>
      <div className="article-card">
        <div className="article-card-text">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
