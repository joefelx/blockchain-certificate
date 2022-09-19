import { useState } from "react";
import "../App.css";

function Verify() {
  const [hash, setHash] = useState(null);
  return (
    <div className="verify">
      <div className="verify-container">
        <div className="heading">
          <h1>Verify your certificate</h1>
        </div>
        <div className="verify-section">
          <input
            type="text"
            className="verify-input"
            placeholder="Enter the certificate hash here"
            onChange={(e) => {
              setHash(e.target.value);
              console.log(e.target.value);
            }}
          />
          <button>Verify</button>
        </div>
      </div>
    </div>
  );
}

export default Verify;
