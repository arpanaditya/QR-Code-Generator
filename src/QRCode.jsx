import "./App.css";
import React, { useState } from "react";

export default function QRCode() {
  const [value, setvalue] = useState("HelloWorld");

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const imgsrc = `https://api.qrserver.com/v1/create-qr-code/?data=${value}&size=200X200&margin=20&amp;size=200x200`;

  return (
    <div>
    <div className="heading">
      <h2>QR Code Generator</h2>
      <p>Enter any text and generate the QR Code</p>
    </div>
      <div className="text-container">
        <input
          type="text"
          name="textbox"
          id="textbox"
          placeholder="HelloWorld"
          onChange={handleChange}
          value={value}
        />
      </div>
      <div className="img-container">
        <img src={imgsrc} alt={value} title={value} />
      </div>
    </div>
  );
}
