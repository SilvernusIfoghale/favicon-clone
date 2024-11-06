import React from "react";
import Input from "./page_components/Input";
import FormBtn from "./page_components/FormBtn";

export default function Form() {
  return (
    <div className="form-section">
      <div className="form-container">
        <h2>Contact Me</h2>
        <div className="form-content">
          <Input placeholder="Full Name *" />
          <Input placeholder="Email *" />
          <Input placeholder="Subject *" />
          <textarea className="textarea" placeholder="Message *"></textarea>
          <FormBtn text="Send" />
        </div>
      </div>
    </div>
  );
}
