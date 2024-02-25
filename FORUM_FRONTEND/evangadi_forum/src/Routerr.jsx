import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/SignUp/Signup";
import Register from "./Components/register/Register";
import Landing from "./Components/Landing/Landing";

function Routerr() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routerr;
