import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/SignUp/Signup";
import Register from "./Components/register/Register";
import Landing from "./Components/Landing/Landing";
import QuestionList from "./page/Allquestion/QuestionList";
import Singlequetion from "./page/singleQuestion/Singlequetion";
import Answer from "./page/answerEntry/answer";
import Askquestion from "./page/askquestion/askquestion";
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
					<Route path="/enteranswer" element={<Answer />} />
					<Route path="/enterquestion" element={<Askquestion/>} />
				</Routes>
			</Router>
		</div>
	);
}

export default Routerr;
