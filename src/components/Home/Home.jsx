import React from "react";
import "./Home.scss";
import Header from "../header/header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import { Routes, Route } from "react-router-dom";
import Tson from "../tson/TsonChat";
export default function Home() {
  return (
    <div className="home">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/con" element={<Tson/>} />
        <Route path="/con" element={<Tson/>} />
        <Route path="/con" element={<Tson/>} />
        <Route path="/con" element={<Tson/>} />
        <Route path="/con" element={<Tson/>} />
      </Routes>
      <Footer />
    </div>
  );
}
