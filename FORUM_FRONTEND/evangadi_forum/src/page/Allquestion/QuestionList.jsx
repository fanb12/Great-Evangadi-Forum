import { useEffect, useState, useContext } from "react";
import classes from "./allquestion.module.css";
import { IoSearchOutline } from "react-icons/io5";
import Layout from "../../Components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { AppState } from "../../App";
import { CgProfile } from "react-icons/cg";
import axios from "../../axiosConfig";
import { RiArrowRightDoubleFill } from "react-icons/ri";

function QuestionList({ questionId }) {
  const { user } = useContext(AppState);
  //console.log(ab);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   setSearchResults(filterQuestions(searchTerm));
  // }, [searchTerm]); // Update search results whenever searchTerm changes

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };
  const [questions, setQuestions] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const { data } = await axios.get("/questions/questionList", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setQuestions(data.questions);
        console.log(data.questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }

    fetchQuestions();
  }, []);
  const calculateDateDifference = (postDate) => {
    const currentDate = new Date();
    const diffInMilliseconds = currentDate - new Date(postDate);
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays > 0) {
      return `${diffInDays}day(s) ago`;
    } else if (diffInHours > 0) {
      const remainingMinutes = diffInMinutes % 60;
      return `${diffInHours}hr and ${remainingMinutes}min ago`;
    } else {
      return `${diffInMinutes}min ago`;
    }
  };
  const [count, setCount] = useState(0);

  function increse() {
    setCount(count + 1);
  }
  function decrease() {
    if (count > 0) setCount(count - 1);
  }
  return (
    <div>
      <Layout>
        <div className={classes.hol}>
          <div className={classes.outer}>
            <Link to="/askquestion">
              <button>Ask Question</button>
            </Link>
            <div className={classes.search}>
              {/* search */}
              <select name="" id="">
                <option value="">All</option>
              </select>

              <input
                type="text"
                // value={searchTerm}
                // onChange={handleSearch}
                placeholder="Search questions..."
              />
              <IoSearchOutline size={25} />
              {/* {searchResults.length > 0 && (
                <ul>
                  {searchResults.map((question) => (
                    <li key={question.id}>{question.title}</li>
                  ))}
                </ul>
              )} */}
            </div>
            <h2>Welecome:{user.username}</h2>
          </div>
          <div className={classes.question}>
            <h2>Questions</h2>
          </div>

          <ul>
            {questions.length > 0 &&
              questions?.map((question, index) => (
                <div key={index} className={classes.questionlist}>
                  <Link to={`/questions/myanswers/${question.question}`}>
                    <div className={classes.icon}>
                      <div className={classes.profile}>
                        <CgProfile size={70} />

                        <h3>{question.username}</h3>
                      </div>

                      <h4>title: {question.title}</h4>
                      {/* <p>Date: {calculateDateDifference(question.date)}</p> */}
                      {/* <p>answers {answer.length}</p> */}
                    </div>
                    <h5 className={classes.arows}>
                      <RiArrowRightDoubleFill size={35} />
                    </h5>
                  </Link>
                </div>
              ))}
          </ul>
        </div>
      </Layout>
    </div>
  );
}

export default QuestionList;
