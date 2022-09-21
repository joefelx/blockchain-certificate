import "../App.css";
import image from "../assets/Next steps-pana.png";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <h1>
          Be the change by creating the digital certificate using Blockchain
        </h1>
      </div>

      <div className="home-feature">
        <div className="home-feature-section">
          <div className="home-feature-image">
            <img src={image} />
          </div>
          <span>feature1</span>
        </div>
        <div className="home-feature-section">
          <div className="home-feature-image">
            <img src={image} />
          </div>
          <span>feature1</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
