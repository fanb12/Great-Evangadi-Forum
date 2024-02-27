import React from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./singleQuetion.module.css";
import { Link } from "react-router-dom";

function Singlequetion() {
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
								<Link to="/enteranswer">
									<button>provide Answer</button>
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
							<div className={classes.btn}>
								<button>Edit</button>
								<button>Delete</button>
							</div>
						</div>
						<div className={classes.student}>
							<h2> Answers from the Students</h2>
						</div>
						<div className={classes.answerlist}>
							<Link to=""></Link>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default Singlequetion;
