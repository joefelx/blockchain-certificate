import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verify from "./pages/Verify";
import Upload from "./pages/Upload";
import ConnectWallet from "./pages/ConnectWallet";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<ConnectWallet />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
