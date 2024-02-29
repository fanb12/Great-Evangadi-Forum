import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowUp } from "react-icons/io";
import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./singleQuetion.module.css";
import { Link } from "react-router-dom";

function Singlequetion() {
  const [count, setCount] = useState(0);

  function increse() {
    setCount(count + 1);
  }
  function decrease() {
    if (count > 0) setCount(count - 1);
  }
  return (
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
              <div className={classes.icon}>
                <div className={classes.profile}>
                  <CgProfile size={60} />
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
              </div>
            </div>
            <div className={classes.student}>
              <h2> Answers from the Students</h2>
            </div>
            <div className={classes.answerlist}>
              <Link to=""></Link>
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
