import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/SignUp/Signup";
import Register from "./Components/register/Register";
import Landing from "./Components/Landing/Landing";
import QuestionList from "./page/Allquestion/QuestionList";
import Singlequetion from "./page/singleQuestion/Singlequetion";

function Routerr() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<QuestionList />} />
          <Route path="/Single" element={<Singlequetion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routerr;
