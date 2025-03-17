import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav_bar from "./components/Nav_bar";
import About from "./pages/About";
import Classes from "./pages/Classess";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login_Signup from "./pages/Login_Signup";
import HireTrainer from "./pages/HireTrainers";

const App = () => {
  return (
    <>
      <Router>
        <Nav_bar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login_Signup" element={<Login_Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Classess" element={<Classes />} />
          <Route path="/HireTrainers" element={<HireTrainer />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
