import { useRef, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./answer.module.css";
import { Link } from "react-router-dom";
import axios from "../../axiosConfig.js";

function Answer({ questionId }) {
  const answerText = useRef();
  async function handleAnswerSubmit(questionId) {
    const answert = answerText.current.value;
    const token = localStorage.getItem("token");
    try {
      const askload = {
        answerText: answert,
      };
      const response = await axios.post(
        `/questions/myanswers${questionId}`,
        askload,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      alert("post answer");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to submit answer. Please try again later.");
    }
  }

  return (
    <Layout>
      <div>
        <div className={classes.questionAns__wrapper}>
          <h2 className={classes.questionAns__title}> QUESTION</h2>

          <Link to="/Home">
            <button className={classes.answerButton}>
              View Other Questions
            </button>
          </Link>

          <br />
        </div>
        <div>
          <div className={classes.voteQuestion__wrapper}>
            <div className={classes.titleTimeLaps__wrap}>
              <h3>question-title</h3>

              <div className={classes.time_wrap}>(..days ago)</div>
            </div>
          </div>
        </div>
        <div>
          <h4>description of your question here</h4>
        </div>
      </div>
      <div className={classes.operations}>
        <div className={classes.questionOperations}>
          <button className={classes.editQuestion}> EDIT</button>
          <button className={classes.deleteQuestion}> DELETE</button>
        </div>

        <form
          className={classes.answer__form}
          onSubmit={(e) => {
            e.preventDefault();
            handleAnswerSubmit(questionId);
          }}
        >
          <h2>Answer for the above question</h2>
          <Link to="/Home">
            <button>Go to Question page</button>
          </Link>

          <textarea
            className={classes.answer__description}
            type="text"
            name="answer"
            placeholder="place your answer here"
            ref={answerText}
          ></textarea>
          <button type="submit" className={classes.answer_posted}>
            <div>POST YOUR ANSWER HERE</div>
          </button>
        </form>
      </div>
    </Layout>
  );
}
export default Answer;
