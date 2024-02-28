import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/SignUp/Signup";
import Register from "./Components/register/Register";
import Landing from "./Components/Landing/Landing";
import QuestionList from "./page/Allquestion/QuestionList";
import Singlequetion from "./page/singleQuestion/Singlequetion";
import Askquestion from "./page/Askquestion/Askquestion";
import Answer from "./page/answerEntry/Answer";

function RouterComp() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<QuestionList />} />
          <Route path="/Single" element={<Singlequetion />} />
          <Route path="/askquestion" element={<Askquestion />} />
          <Route path="/answerpage" element={<Answer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default RouterComp;
