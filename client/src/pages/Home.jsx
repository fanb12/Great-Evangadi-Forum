import React from "react";
import classes from "./allquestion.module.css";
import axios from '../axiosConfig'
import { useEffect,useState } from 'react';
import { Link ,useNavigation} from "react-router-dom";
function Home() {
  const [questions, setQuestions] = useState([]);
  const username = localStorage.getItem("name");
  const token=localStorage.getItem('token')
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get('/questionList',{
          headers:{
            Authorization:token
          }
        });
        setQuestions(response.data.questions);
      } catch (error) {
        console.error('Error fetching questions:', error);
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
  return (
    
      <div className={classes.hol}>
          <div className={classes.outer}>
            <Link to="/answer">
              <button>Ask Question</button>
            </Link>
            <div className={classes.search}>
              {/* search */}
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" name="" id="" placeholder="search Question" />
              {/* <IoSearchOutline size={25} /> */}
            </div>
            <h2>Welecome: {username}</h2>
          </div>
          <div className={classes.question}>
            <h2>Questions</h2>
            
          </div>
          <div className={classes.questionlist}>
            <ul >
        {questions.map((question, index) => (
          <li key={index}>
            <h2>
            <p>Username: {question.username}</p>
            <p>Question: {question.question}</p>
            <p>Date: {calculateDateDifference(question.date)}</p>
            </h2>
          </li>
        ))}
      </ul>
      </div>
        </div>
  
  );
}

export default Home;
