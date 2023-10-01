import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./components/Intro";
import Patient from "./components/App";
import Navbar from "./components/Navbar";
import Desktop from "./components/Desktop";
import Map from "./components/Map";
import Meet from "./components/Meet";
import Payment from "./components/payment";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Intro />} />
      <Route exact path="/patient" element={<Patient />} />
      <Route exact path="/desktop" element={<Desktop />} />
      <Route exact path="/map" element={<Map />} />
      <Route exact path="/meet" element={<Meet />} />
      <Route exact path="/payment" element={<Payment />} />
    </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;
