import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import Search from "./components/Search";
import WeekOne from "./components/WeekOne";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Search />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/week-one" element={<WeekOne />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
