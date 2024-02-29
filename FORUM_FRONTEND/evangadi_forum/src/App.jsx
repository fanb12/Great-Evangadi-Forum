import { Routes, Route } from "react-router-dom";
import Signup from "./Components/SignUp/Signup";
import Register from "./Components/register/Register";
import Landing from "./Components/Landing/Landing";
import QuestionList from "./page/Allquestion/QuestionList";
import Singlequetion from "./page/singleQuestion/Singlequetion";
import Askquestion from "./page/Askquestion/Askquestion";
import Answer from "./page/answerEntry/Answer";
import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./axiosConfig";
export const AppState = createContext();

function App() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // console.log(token);
  async function checkUser() {
    try {
      const response = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const user = response.data;
      //return user;
      //setUser(data);
      console.log(user);
    } catch (error) {
      console.log(error.response);
      navigate("/SignUp");
    }
  }
  useEffect(() => {
    checkUser();
  }, []);
  return (
    <AppState.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<QuestionList />} />
        <Route path="/Single" element={<Singlequetion />} />
        <Route path="/askquestion" element={<Askquestion />} />
        <Route path="/answerpage" element={<Answer />} />
      </Routes>
    </AppState.Provider>
  );
}

export default App;
