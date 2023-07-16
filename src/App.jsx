import { useState } from "react";
import "./App.css";
import CvForm from "./components/CvForm";
import Navbar from "./components/NAvbar";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  return (
    <div className="app">
      {showNavbar && <Navbar />}
      <CvForm setShowNavbar={setShowNavbar} />
    </div>
  );
}

export default App;
