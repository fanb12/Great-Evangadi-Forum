import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowUp } from "react-icons/io";
import React, { useState, useEffect, useRef } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./singleQuetion.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "../../axiosConfig";

function Singlequetion() {
  // Destructure match object from React Router's props
  //const questionId = match.params.questionId;
  const { questionId } = useParams();

  //const answerText = useRef();
  // async function handleAnswerSubmit(questionId) {
  //   const answert = answerText.current.value;
  //   const token = localStorage.getItem("token");
  //   try {
  //     const askload = {-
  //       answerText: answert,
  //     };
  //     const response = await axios.post(
  //       `/questions/myanswers${questionId}`,
  //       askload,
  //       {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       }
  //     );
  //     alert("post answer");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //     alert("Failed to submit answer. Please try again later.");
  //   }
  // }
  const [count, setCount] = useState(0);
  function increse() {
    setCount(count + 1);
  }
  function decrease() {
    if (count > 0) setCount(count - 1);
  }
  // increse();
  // decrease();
  const [question, setQuestions] = useState([]);

  const [answer, setAllanswer] = useState([]);
  useEffect(() => {
    async function fetchAnswers() {
      const token = localStorage.getItem("token");
      try {
        const { data } = await axios.get(`/answer/${questionId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAllanswer(data.answer);
        console.log(data.answer);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }

    fetchAnswers();
  }, [questionId]);

  useEffect(() => {
    async function fetchQuestions() {
      const token = localStorage.getItem("token");
      try {
        const { data } = await axios.get(`/questions/${questionId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setQuestions(data.question);
        console.log(data.question);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }

    fetchQuestions();
  }, [questionId]);
  return (
    // <div>
    //   <h1>HEllo</h1>
    // </div>

    <>
      <Layout>
        <div className={classes.hol}>
          <div className={classes.generaly}>
            <div className={classes.both}>
              <div className={classes.question}>
                <h2>Questions</h2>
              </div>
              <div>
                <Link to="/answerpage">
                  <button>Answer</button>
                </Link>
              </div>
            </div>
            <div className={classes.siglequestion}>
              {/* <Link to={`/QuestionList${data.id}`}>
          <span>
             <h2>{data?.titile}</h2>
          </span>
          <p>{data?.description} </p> */}
              {/* </Link> */}
              {/* <ul> */}
              {/* {question.length > 0 &&
                question?.map((question, index) => (
                  <li key={index}> */}
              <div className={classes.questionlist}>
                <div className={classes.icon}>
                  <div className={classes.profile}>
                    <CgProfile size={60} />
                    <p>{question.username}</p>
                  </div>

                  <div className={classes.arrow}>
                    <IoIosArrowUp
                      size={40}
                      style={{ marginLeft: "10px" }}
                      onClick={increse}
                    />
                    <h2>{count} </h2>
                    <IoIosArrowDown
                      size={40}
                      style={{ marginLeft: "10px" }}
                      onClick={decrease}
                    />
                  </div>
                  <p>title: {question.title}</p>
                  <br />
                  <br />
                  <p>description: {question.description}</p>

                  {/* <p>Date: {calculateDateDifference(question.date)}</p> */}
                </div>
              </div>
              {/* </li>
                ))} */}
            </div>
            <div className={classes.student}>
              <h2> Answers from the Students</h2>
            </div>
            <div className={classes.answerlist}>
              <p>{answer.answer}</p>
              <h4>{answer.username}</h4>
            </div>
            <h2>Your Answer</h2>
            <form>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="answer"
              ></textarea>
              <br />
              <button type="submit">Post your Answer</button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Singlequetion;
