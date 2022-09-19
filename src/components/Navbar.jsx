import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="left-section">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            blokcert
          </Link>
        </div>
        <div className="right-section">
          <Link to="/verify" style={{ color: "white", textDecoration: "none" }}>
            <span>verify</span>
          </Link>
          <Link to="/upload" style={{ color: "white", textDecoration: "none" }}>
            <span>upload</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
