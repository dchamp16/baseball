import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
// bootstrap
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// ----------

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
    <BrowserRouter>
      <div className="App">
        <div className="container-fluid">
          <div className="row sticky-top head">
            <NavBar />
          </div>
          <div className="row">
            <Routes>
              <Route path="/baseball" element={<Content />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="*" element={<h1>404 Error</h1>} />
            </Routes>
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
    </BrowserRouter>
  );
}

export default App;
