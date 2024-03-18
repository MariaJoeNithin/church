import React from "react";
import HomeSlide from "./HomeSlide";
import ImNew from "./imNew/ImNew";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Events from "./events/Events";
import About from "./aboutUs/About";
import Ministries from "./ministries/Ministries";
import Membership from "./membership/Membership";
import Navbar from "./Navbar";
import Give from "./give/Give";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomeSlide />} />
          <Route path="/about" element={<About />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/imNew" element={<ImNew />} />
          <Route path="/Ministries" element={<Ministries />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/give" element={<Give/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
