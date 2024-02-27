import React, { useState } from "react";
import classes from "./askquestion.module.css";
import Layout from "../../Components/Layout/Layout";
function Askquestion() {
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
              <input type="title" placeholder="title" />
              <br />
              <input type="text" placeholder="tag" />

              <br />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="dascription"
              ></textarea>

              <br />
              <button type="submit">Post your Question</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Askquestion;
