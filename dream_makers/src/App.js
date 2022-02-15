import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
// import Practice from "./Practice";
import Tutorial from "./Tutorial";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/1" element={<Practice />} /> */}
          <Route path="/2" element={<Tutorial />} />
          <Route path="/3" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
