import React from "react";
import classes from "./allquestion.module.css";
import { IoSearchOutline } from "react-icons/io5";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
function QuestionList() {
  return (
    <div>
      <Layout>
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
              <IoSearchOutline size={25} />
            </div>
            <h2>Welecome:</h2>
          </div>
          <div className={classes.question}>
            <h2>Questions</h2>
          </div>
          <div className={classes.questionlist}>
            <Link to="/Single">
              {" "}
              <h2>sigle</h2>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default QuestionList;
