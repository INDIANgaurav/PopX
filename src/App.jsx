import React from "react";
import { Route , Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
function App() {
   
  return (
    <div className="p-3">
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/sign-up" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/home" element={<HomePage/>} />

        </Routes>
    </div>
  );
}

export default App;