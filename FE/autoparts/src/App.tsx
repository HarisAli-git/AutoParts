import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Parts from "./pages/Parts";

const App: React.FC = () => {
  return (
    <Router>
      <div className="w-full h-full">
        <Navbar />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* {/* <Route path="/about" element={<About />} /> */}
          <Route path="/parts" element={<Parts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
