import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

import NavBar from "../components/Navbar";
import Content from "../components/Content";
import Pricing from "../components/Pricing";
import Features from "../components/Features";
import ContentBottom from "../components/ContentBottom";
import TopSideBar from "../components/TopSideBar";
import BottomSideBar from "../components/BottomSideBar";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row sticky-top head">
          <NavBar />
        </div>
        <div className="row">
          {/* ----------- */}
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Content />} />
              <Route exact path="/features" element={<Features />} />
              <Route exact path="/pricing" element={<Pricing />} />
              <Route exact path="*" element={<h1>404 Error</h1>} />
            </Routes>
          </BrowserRouter>

          {/* ----------- */}
          <TopSideBar />
          <ContentBottom />
          <BottomSideBar />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
