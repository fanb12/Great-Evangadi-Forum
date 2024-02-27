import React, { useEffect, useState } from "react";
import classes from "./allquestion.module.css";
import { IoSearchOutline } from "react-icons/io5";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
function QuestionList() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   setSearchResults(filterQuestions(searchTerm));
  // }, [searchTerm]); // Update search results whenever searchTerm changes

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };
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
            <h2>Welecome:</h2>
          </div>
          <div className={classes.question}>
            <h2>Questions</h2>
          </div>
          <div className={classes.questionlist}>
            <Link to="/Single">
              {""}
              <h2>sigle</h2>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default QuestionList;
