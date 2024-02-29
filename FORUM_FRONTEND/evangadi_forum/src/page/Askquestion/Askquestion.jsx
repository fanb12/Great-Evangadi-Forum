import React, { useState, useRef } from "react";
import classes from "./askquestion.module.css";
import Layout from "../../Components/Layout/Layout";
import axios from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
function Askquestion() {
  const navigate = useNavigate();
  const title = useRef();
  const description = useRef();

  async function HandleSubmit(e) {
    e.preventDefault();
    const titlevalue = title.current.value;
    const descriptionvalue = description.current.value;
    if (!titlevalue || !descriptionvalue) {
      alert("please complete");
      return;
    }
    try {
      const response = await axios.post("/questions/myquestions", {
        title: titlevalue,
        description: descriptionvalue,
      });
      alert("ask question succesfull. please go to question page");
      navigate("/Home");
      console.log(response?.data);
    } catch (error) {
      console.log(error?.response?.data);
      alert("some thing wrong");
    }
  }
  return (
    <>
      <Layout>
        <div className={classes.container}>
          <div className={classes.steps}>
            <h1>Steps to write a good question</h1>
            <li>Summerize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>Review your Question and post it to the site.</li>
          </div>
          <div className={classes.box}>
            <div className={classes.title}>
              <h2>Ask a public question</h2>
              <h3>Go to Question page</h3>
            </div>
            <div className={classes.input}>
              <form onSubmit={HandleSubmit}>
                <input ref={title} type="title" placeholder="title" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="description"
                  ref={description}
                ></textarea>

                <br />
                <button type="submit">Post your Question</button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Askquestion;
